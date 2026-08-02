window.secureComponents = window.secureComponents || {};
window.secureComponents.win_weather = `
    <div class="window" id="win-weather" style="width: 580px; height: 260px; bottom: 60px; left: 36.5%; display: none;">
      <div class="window-header" id="win-weatherheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41">
            </path>
            <circle cx="12" cy="12" r="4"></circle>
          </svg>
          Atmospheric Flight Telemetry
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-weather')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-weather')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-weather')"></div>
        </div>
      </div>
      <div class="window-content custom-scroll" style="padding: 15px; background: rgba(8, 12, 24, 0.95); overflow-y: hidden;">
        <div class="weather-app-container" style="height: 100%;">
          <div id="weather-loader" style="display: none; text-align: center; padding: 40px 0;">
            <div class="win-loader" style="margin: 0 auto 10px auto;">
              <div class="win-loader-dot"></div>
              <div class="win-loader-dot"></div>
              <div class="win-loader-dot"></div>
            </div>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--text-dim); letter-spacing: 1px;">
              SCANNING LOCAL TELEMETRY CORRIDORS...</div>
          </div>

          <div id="weather-results" style="display: block;">
            <div style="display: flex; gap: 15px; height: 100%;">
              <!-- Left side: Current Weather and Search -->
              <div class="weather-left-pane" style="flex: 1.1; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid rgba(79, 216, 232, 0.15); padding-right: 15px;">
                <!-- Search bar -->
                <div class="weather-search-bar" style="display: flex; gap: 6px;">
                  <input type="text" id="weather-city-input" placeholder="CITY..."
                    style="flex-grow: 1; height: 28px; background: rgba(0,0,0,0.5); border: 1.5px solid rgba(79, 216, 232, 0.25); border-radius: 4px; color: var(--text-main); font-family: var(--font-mono); font-size: 10px; padding: 0 8px; outline: none; letter-spacing: 0.5px;">
                  <button class="top-bar-btn" id="weather-search-btn"
                    style="height: 28px; font-size: 10px; padding: 0 10px; color: #4fd8e8; border-color: rgba(79, 216, 232, 0.4);">SCAN</button>
                </div>

                <!-- Current City Results -->
                <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 8px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                      <div id="weather-display-city" style="font-family: var(--font-hud); font-size: 13px; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 0 5px rgba(255,255,255,0.2);">MALIBU, CA</div>
                      <div id="weather-display-coords" style="font-family: var(--font-mono); font-size: 8px; color: var(--text-dim); margin-top: 1px; white-space: nowrap;">LAT: 34.02° N / LON: 118.77° W</div>
                    </div>
                    <div id="weather-status-alert" style="font-family: var(--font-mono); font-size: 8px; padding: 2px 6px; border-radius: 3px; background: rgba(39, 201, 63, 0.15); border: 1px solid #27c93f; color: #27c93f; font-weight: bold; white-space: nowrap;">OPTIMAL</div>
                  </div>
                  
                  <!-- Current metrics side-by-side or mini grid -->
                  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; margin-top: 6px;">
                    <div style="background: rgba(10,15,30,0.3); border: 1.5px solid rgba(79,216,232,0.12); border-radius: 4px; padding: 5px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 7px; color: var(--text-dim); letter-spacing: 0.5px;">THERMAL</div>
                      <div id="weather-temp" style="font-family: var(--font-hud); font-size: 15px; color: var(--primary); font-weight: bold; margin-top: 1px;">24.5°C</div>
                      <div id="weather-feels" style="font-family: var(--font-mono); font-size: 7px; color: var(--text-main); opacity: 0.8; margin-top: 1px;">FEELS: 25°C</div>
                    </div>
                    <div style="background: rgba(10,15,30,0.3); border: 1.5px solid rgba(79,216,232,0.12); border-radius: 4px; padding: 5px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 7px; color: var(--text-dim); letter-spacing: 0.5px;">WIND</div>
                      <div id="weather-wind" style="font-family: var(--font-hud); font-size: 15px; color: #e5c158; font-weight: bold; margin-top: 1px; white-space: nowrap;">12.4 km/h</div>
                      <div id="weather-wind-dir" style="font-family: var(--font-mono); font-size: 7px; color: var(--text-main); opacity: 0.8; margin-top: 1px; white-space: nowrap;">BEARING: 215°</div>
                    </div>
                    <div style="background: rgba(10,15,30,0.3); border: 1.5px solid rgba(79,216,232,0.12); border-radius: 4px; padding: 5px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 7px; color: var(--text-dim); letter-spacing: 0.5px;">HUMIDITY</div>
                      <div id="weather-humidity" style="font-family: var(--font-hud); font-size: 15px; color: #ff2f8e; font-weight: bold; margin-top: 1px;">45%</div>
                      <div id="weather-precip" style="font-family: var(--font-mono); font-size: 7px; color: var(--text-main); opacity: 0.8; margin-top: 1px; white-space: nowrap;">RAIN: 0.0mm</div>
                    </div>
                    <div style="background: rgba(10,15,30,0.3); border: 1.5px solid rgba(79,216,232,0.12); border-radius: 4px; padding: 5px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 7px; color: var(--text-dim); letter-spacing: 0.5px;">BAROMETRIC</div>
                      <div id="weather-pressure" style="font-family: var(--font-hud); font-size: 15px; color: #27c93f; font-weight: bold; margin-top: 1px;">1013 hPa</div>
                      <div id="weather-pressure-label" style="font-family: var(--font-mono); font-size: 7px; color: var(--text-main); opacity: 0.8; margin-top: 1px; white-space: nowrap;">OK</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Right side: Forecast and Analysis -->
              <div class="weather-right-pane" style="flex: 1.4; display: flex; flex-direction: column; justify-content: space-between;">
                <!-- 5-Day Forecast -->
                <div>
                  <div class="weather-forecast-header" style="font-family: var(--font-mono); font-size: 8px; color: var(--text-dim); letter-spacing: 1px; border-bottom: 1.5px solid rgba(79, 216, 232, 0.15); padding-bottom: 3px; margin-bottom: 8px; text-transform: uppercase;">
                    ATMOSPHERIC FORECAST PROJECTION
                  </div>
                  <div class="weather-forecast-grid" id="weather-forecast-grid" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px;">
                    <!-- Cards populated dynamically -->
                  </div>
                </div>

                <!-- Analysis Summary -->
                <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(79, 216, 232, 0.1); border-radius: 4px; padding: 6px; display: flex; align-items: center; gap: 8px; margin-top: 8px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    style="filter: drop-shadow(0 0 2px var(--primary)); flex-shrink: 0;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <div id="weather-summary-text"
                    style="font-family: var(--font-mono); font-size: 8.5px; color: var(--text-main); line-height: 1.3;">
                    J.A.R.V.I.S. ANALYSIS: Clear flight corridors. Altitude envelope is safe for supersonic repulsor testing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
