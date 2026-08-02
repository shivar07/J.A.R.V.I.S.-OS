let defaultCity = "MALIBU, CA";
let defaultLat = 34.02;
let defaultLon = -118.77;

function initWeather() {
  const searchInput = document.getElementById("weather-city-input");
  const searchBtn = document.getElementById("weather-search-btn");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const city = searchInput.value.trim();
      if (city) {
        fetchWeatherByCity(city);
      }
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const city = searchInput.value.trim();
        if (city) {
          fetchWeatherByCity(city);
        }
      }
    });
  }

  // Load default weather
  fetchWeather(defaultLat, defaultLon, defaultCity);
}

function fetchWeatherByCity(cityName) {
  const loader = document.getElementById("weather-loader");
  const results = document.getElementById("weather-results");
  if (loader && results) {
    loader.style.display = "block";
    results.style.display = "none";
  }

  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`)
    .then(res => res.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        const lat = result.latitude;
        const lon = result.longitude;
        const name = `${result.name.toUpperCase()}, ${result.country_code.toUpperCase()}`;
        fetchWeather(lat, lon, name);
      } else {
        alert("City not found. Please try another query.");
        if (loader && results) {
          loader.style.display = "none";
          results.style.display = "block";
        }
      }
    })
    .catch(err => {
      console.error("Geocoding error:", err);
      if (loader && results) {
        loader.style.display = "none";
        results.style.display = "block";
      }
    });
}

function fetchWeather(lat, lon, displayCity) {
  const tempEl = document.getElementById("weather-temp");
  const feelsEl = document.getElementById("weather-feels");
  const windEl = document.getElementById("weather-wind");
  const windDirEl = document.getElementById("weather-wind-dir");
  const humidityEl = document.getElementById("weather-humidity");
  const precipEl = document.getElementById("weather-precip");
  const pressureEl = document.getElementById("weather-pressure");
  const pressureLabelEl = document.getElementById("weather-pressure-label");
  const cityEl = document.getElementById("weather-display-city");
  const coordsEl = document.getElementById("weather-display-coords");
  const statusAlertEl = document.getElementById("weather-status-alert");
  const forecastGrid = document.getElementById("weather-forecast-grid");
  const summaryText = document.getElementById("weather-summary-text");
  
  const tbTemp = document.getElementById("taskbar-weather-temp");
  const tbDesc = document.getElementById("taskbar-weather-desc");

  const loader = document.getElementById("weather-loader");
  const results = document.getElementById("weather-results");

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`)
    .then(res => res.json())
    .then(data => {
      if (loader && results) {
        loader.style.display = "none";
        results.style.display = "block";
      }

      const current = data.current;
      if (!current) return;

      if (cityEl) cityEl.textContent = displayCity;
      if (coordsEl) coordsEl.textContent = `LAT: ${lat.toFixed(2)}° N / LON: ${Math.abs(lon).toFixed(2)}° ${lon >= 0 ? 'E' : 'W'}`;
      if (tempEl) tempEl.textContent = `${current.temperature_2m.toFixed(1)}°C`;
      if (feelsEl) feelsEl.textContent = `FEELS: ${Math.round(current.apparent_temperature)}°C`;
      if (windEl) windEl.textContent = `${current.wind_speed_10m.toFixed(1)} km/h`;
      if (windDirEl) windDirEl.textContent = `BEARING: ${current.wind_direction_10m}°`;
      if (humidityEl) humidityEl.textContent = `${current.relative_humidity_2m}%`;
      if (precipEl) precipEl.textContent = `RAIN: ${current.precipitation.toFixed(1)}mm`;
      if (pressureEl) pressureEl.textContent = `${Math.round(current.pressure_msl)} hPa`;

      let condition = "Clear";
      let isOptimal = true;
      const code = current.weather_code;
      if (code === 0) condition = "Clear";
      else if (code <= 3) condition = "Cloudy";
      else if (code === 45 || code === 48) { condition = "Foggy"; isOptimal = false; }
      else if (code <= 55) { condition = "Drizzle"; isOptimal = false; }
      else if (code <= 65) { condition = "Rainy"; isOptimal = false; }
      else if (code <= 75) { condition = "Snowy"; isOptimal = false; }
      else if (code <= 82) { condition = "Showers"; isOptimal = false; }
      else { condition = "Stormy"; isOptimal = false; }

      if (statusAlertEl) {
        statusAlertEl.textContent = isOptimal ? "OPTIMAL" : "WARNING";
        statusAlertEl.style.background = isOptimal ? "rgba(39, 201, 63, 0.15)" : "rgba(255, 47, 142, 0.15)";
        statusAlertEl.style.borderColor = isOptimal ? "#27c93f" : "#ff2f8e";
        statusAlertEl.style.color = isOptimal ? "#27c93f" : "#ff2f8e";
      }

      if (pressureLabelEl) {
        pressureLabelEl.textContent = current.pressure_msl > 1013 ? "HIGH" : "NORMAL";
      }

      if (tbTemp) tbTemp.textContent = `${current.temperature_2m.toFixed(1)}°C`;
      if (tbDesc) tbDesc.textContent = `${displayCity.split(',')[0]} (${condition})`;

      if (summaryText) {
        summaryText.textContent = isOptimal 
          ? `J.A.R.V.I.S. ANALYSIS: Clear flight corridors. Altitude envelope is safe for supersonic repulsor testing.` 
          : `J.A.R.V.I.S. WARNING: Adverse flight telemetry. Precipitation or fog hazard detected. Repulsor flight tests restricted.`;
      }

      if (forecastGrid && data.daily) {
        forecastGrid.innerHTML = "";
        const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const todayIdx = new Date().getDay();
        
        for (let i = 0; i < 5; i++) {
          const maxT = data.daily.temperature_2m_max[i];
          const minT = data.daily.temperature_2m_min[i];
          const dayCode = data.daily.weather_code[i];
          const dayName = weekdays[(todayIdx + i) % 7];
          
          let icon = "☀️";
          if (dayCode > 0 && dayCode <= 3) icon = "⛅";
          else if (dayCode === 45 || dayCode === 48) icon = "🌫️";
          else if (dayCode > 48 && dayCode <= 65) icon = "🌧️";
          else if (dayCode > 65 && dayCode <= 75) icon = "❄️";
          else if (dayCode > 75 && dayCode <= 82) icon = "🌦️";
          else icon = "⛈️";

          const card = document.createElement("div");
          card.style.background = "rgba(255, 255, 255, 0.03)";
          card.style.border = "1px solid rgba(79, 216, 232, 0.1)";
          card.style.borderRadius = "4px";
          card.style.padding = "6px 2px";
          card.style.textAlign = "center";
          card.style.display = "flex";
          card.style.flexDirection = "column";
          card.style.alignItems = "center";
          card.style.justifyContent = "space-between";

          card.innerHTML = `
            <div style="font-family: var(--font-mono); font-size: 7px; color: var(--text-dim);">${dayName}</div>
            <div style="font-size: 14px; margin: 3px 0;">${icon}</div>
            <div style="font-family: var(--font-hud); font-size: 8px; color: #ffffff; font-weight: bold;">${Math.round(maxT)}°/${Math.round(minT)}°</div>
          `;
          forecastGrid.appendChild(card);
        }
      }
    })
    .catch(err => {
      console.error("Error loading weather data:", err);
    });
}
