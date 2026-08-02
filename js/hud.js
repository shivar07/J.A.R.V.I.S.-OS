function initHUDSystem() {
  
  function updateClockWidget() {
    const now = new Date();
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secDeg = (secs / 60) * 360;
    const minDeg = (mins / 60) * 360 + (secs / 60) * 6;
    const hourDeg = (hours / 12) * 360 + (mins / 60) * 30;

    const secHand = document.getElementById("analog-sec");
    const minHand = document.getElementById("analog-min");
    const hourHand = document.getElementById("analog-hour");

    if (secHand) secHand.style.transform = `rotate(${secDeg}deg)`;
    if (minHand) minHand.style.transform = `rotate(${minDeg}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;

    const digitalReadout = document.getElementById("widget-digital-time");
    if (digitalReadout) {
      let ampm = hours >= 12 ? 'PM' : 'AM';
      let dispHour = hours % 12;
      dispHour = dispHour ? dispHour : 12;
      const dispMin = String(mins).padStart(2, '0');
      const dispSec = String(secs).padStart(2, '0');
      digitalReadout.textContent = `${dispHour}:${dispMin}:${dispSec} ${ampm}`;
    }
  }
  setInterval(updateClockWidget, 1000);
  updateClockWidget();

  
  function renderCalendarWidget() {
    const monthYear = document.getElementById("calendar-month-year");
    const datesGrid = document.getElementById("calendar-dates");
    if (!monthYear || !datesGrid) return;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    const monthNames = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];

    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    datesGrid.innerHTML = "";

    for (let i = 0; i < firstDayIndex; i++) {
      const blank = document.createElement("div");
      blank.className = "calendar-date blank";
      datesGrid.appendChild(blank);
    }

    for (let d = 1; d <= totalDays; d++) {
      const dateEl = document.createElement("div");
      dateEl.className = "calendar-date";
      dateEl.textContent = d;
      if (d === today) {
        dateEl.classList.add("today");
      }
      datesGrid.appendChild(dateEl);
    }
  }
  renderCalendarWidget();

  
  const searchInput = document.getElementById("desktop-search-input");
  const searchResults = document.getElementById("search-results");

  const apps = [
    { name: "J.A.R.V.I.S. AI Co-Pilot", id: "win-jarvis", keywords: ["jarvis", "ai", "speech", "copilot", "voice"] },
    { name: "Robotic Engineer Wala (YouTube Channel)", id: "win-youtube", keywords: ["youtube", "video", "channel", "playlist", "robot", "wala", "robotic"] },
    { name: "Netlify Portfolio", id: "win-portfolio", keywords: ["portfolio", "resume", "work", "cv", "netlify", "me"] },
    { name: "RoboTasks List", id: "win-tasks", keywords: ["tasks", "todo", "schedule", "planner", "organizer"] },
    { name: "RoboTerminal Console", id: "win-terminal", keywords: ["terminal", "shell", "cmd", "neofetch", "cli"] },
    { name: "Trophy Showcase", id: "win-showcase", keywords: ["showcase", "trophy", "awards", "medals", "certificates"] },
    { name: "Gallery Explorer", id: "win-gallery", keywords: ["gallery", "photos", "videos", "media", "designs"] },
    { name: "Socials Hub", id: "win-socials", keywords: ["socials", "instagram", "linkedin", "facebook", "github", "links"] },
    { name: "HUD Diagnostics", id: "win-diagnostics", keywords: ["diagnostics", "cpu", "ram", "memory", "temperature", "temp", "hud"] },
    { name: "System Settings", id: "win-settings", keywords: ["settings", "config", "theme", "wallpaper", "crt"] }
  ];

  if (searchInput && searchResults) {
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInput.focus();
        if (typeof synthSound === "function") {
          synthSound("click");
        }
      }
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        searchResults.style.display = "none";
        searchInput.blur();
      }
    });

    searchInput.addEventListener("input", () => {
      const val = searchInput.value.trim().toLowerCase();
      if (val === "") {
        searchResults.style.display = "none";
        return;
      }

      const filtered = apps.filter(app => 
        app.name.toLowerCase().includes(val) || 
        app.keywords.some(kw => kw.includes(val))
      );

      if (filtered.length > 0) {
        searchResults.innerHTML = "";
        filtered.forEach(app => {
          const li = document.createElement("li");
          li.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> ${app.name}`;
          li.onclick = () => {
            toggleWindow(app.id);
            searchInput.value = "";
            searchResults.style.display = "none";
            searchInput.blur();
          };
          searchResults.appendChild(li);
        });
        searchResults.style.display = "block";
      } else {
        searchResults.style.display = "none";
      }
    });

    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = "none";
      }
    });
  }

  
  const contextMenu = document.getElementById("desktop-context-menu");

  if (contextMenu) {
    document.addEventListener("contextmenu", (e) => {
      if (e.target.closest(".window") || e.target.closest(".desktop-dock") || e.target.closest(".top-bar")) {
        return; 
      }
      
      e.preventDefault();
      contextMenu.style.display = "block";
      contextMenu.style.left = e.clientX + "px";
      contextMenu.style.top = e.clientY + "px";
      
      if (typeof synthSound === "function") {
        synthSound("click");
      }
    });

    document.addEventListener("click", () => {
      contextMenu.style.display = "none";
    });
  }

  
  setInterval(() => {
    const cpuVal = document.getElementById("diag-cpu-val");
    const cpuBar = document.getElementById("diag-cpu-bar");
    const ramVal = document.getElementById("diag-ram-val");
    const ramBar = document.getElementById("diag-ram-bar");
    const tempVal = document.getElementById("diag-temp-val");
    const tempBar = document.getElementById("diag-temp-bar");

    if (cpuVal && cpuBar) {
      const load = Math.floor(15 + Math.random() * 25);
      cpuVal.textContent = load + "%";
      cpuBar.style.width = load + "%";
    }
    if (ramVal && ramBar) {
      const ram = (3.1 + Math.random() * 0.4).toFixed(1);
      ramVal.textContent = ram + " GB / 8.0 GB";
      ramBar.style.width = ((ram / 8.0) * 100) + "%";
    }
    if (tempVal && tempBar) {
      const temp = Math.floor(43 + Math.random() * 6);
      tempVal.textContent = temp + "°C";
      tempBar.style.width = ((temp / 80) * 100) + "%";
    }
  }, 2000);
}
