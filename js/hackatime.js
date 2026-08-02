// --- Hackatime Integration Logic ---
let leaderboardEntries = [];
let activeScope = "global";
let myHackatimeStats = null;

function openHackatimeWorkspace() {
  const statsWin = document.getElementById("win-hackatime-stats");
  const lbWin = document.getElementById("win-hackatime-leaderboard");

  if (!statsWin || !lbWin) return;

  const statsClosed = statsWin.style.display === "none" || statsWin.style.display === "";
  const lbClosed = lbWin.style.display === "none" || lbWin.style.display === "";

  if (statsClosed || lbClosed) {
    statsWin.style.display = "flex";
    lbWin.style.display = "flex";
    
    statsWin.style.zIndex = highestZ++;
    lbWin.style.zIndex = highestZ++;
    focusWindow(lbWin);

    const statsInd = document.getElementById("indicator-win-hackatime-stats") || document.getElementById("indicator-workspace-hackatime");
    const lbInd = document.getElementById("indicator-win-hackatime-leaderboard");
    if (statsInd) statsInd.parentElement.classList.add("app-open");
    if (lbInd) lbInd.parentElement.classList.add("app-open");

    if (typeof synthSound === "function") synthSound("success");
  } else {
    statsWin.style.display = "none";
    lbWin.style.display = "none";

    const statsInd = document.getElementById("indicator-win-hackatime-stats") || document.getElementById("indicator-workspace-hackatime");
    const lbInd = document.getElementById("indicator-win-hackatime-leaderboard");
    if (statsInd) statsInd.parentElement.classList.remove("app-open");
    if (lbInd) lbInd.parentElement.classList.remove("app-open");

    if (typeof synthSound === "function") synthSound("click");
  }
}

function fetchHackatimeData() {
  const statsLoader = document.getElementById("hack-stats-loader");
  const statsContent = document.getElementById("hack-stats-content");

  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  const apiBase = isLocal ? "http://localhost:3001/api" : "/.netlify/functions";

  // 1. Fetch Stats
  fetch(`${apiBase}/stats`)
    .then(res => res.json())
    .then(data => {
      myHackatimeStats = data;
      if (statsLoader) statsLoader.style.display = "none";
      if (statsContent) statsContent.style.display = "block";

      const profile = data.profile || {};
      const dashboard = data.dashboard_stats?.filterable_dashboard_data || {};

      const avatarEl = document.getElementById("hack-avatar");
      if (avatarEl && profile.avatar_url) avatarEl.src = profile.avatar_url;

      const nameEl = document.getElementById("hack-display-name");
      if (nameEl) nameEl.textContent = profile.display_name || "shivar07";

      const streakEl = document.getElementById("hack-streak-days");
      if (streakEl) streakEl.textContent = `${profile.streak_days || 0} days`;

      const totalTimeEl = document.getElementById("hack-total-time");
      if (totalTimeEl && dashboard.total_time) {
        const hrs = Math.floor(dashboard.total_time / 3600);
        const mins = Math.floor((dashboard.total_time % 3600) / 60);
        totalTimeEl.textContent = `${hrs}h ${mins}m`;
      }

      const topProjectEl = document.getElementById("hack-top-project");
      if (topProjectEl) topProjectEl.textContent = dashboard.top_project || "--";

      const topLangEl = document.getElementById("hack-top-language");
      if (topLangEl) topLangEl.textContent = dashboard.top_language || "--";

      const todayLogEl = document.getElementById("hack-today-log");
      if (todayLogEl) {
        const todayHrs = Math.floor((dashboard.total_time || 0) / 3600);
        const todayMins = Math.floor(((dashboard.total_time || 0) % 3600) / 60);
        todayLogEl.textContent = `Overall, you've logged ${todayHrs}h ${todayMins}m across HTML, CSS, JavaScript, and Arduino configurations using Antigravity-ide.`;
      }

      const projectsGrid = document.getElementById("hack-projects-bars");
      if (projectsGrid && dashboard.project_durations) {
        projectsGrid.innerHTML = "";
        const maxSecs = Math.max(...Object.values(dashboard.project_durations), 1);
        
        Object.entries(dashboard.project_durations).forEach(([proj, secs]) => {
          if (secs === 0) return;
          const percentage = (secs / maxSecs) * 100;
          const h = Math.floor(secs / 3600);
          const m = Math.floor((secs % 3600) / 60);

          const barWrapper = document.createElement("div");
          barWrapper.className = "chart-bar-wrapper";
          barWrapper.style.marginBottom = "8px";
          barWrapper.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 8px; font-family: var(--font-mono); color: var(--text-main); margin-bottom: 2px;">
              <span>${proj.toUpperCase()}</span>
              <span>${h}H ${m}M</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow: hidden; border: 1px solid rgba(79, 216, 232, 0.15);">
              <div style="background: linear-gradient(90deg, #4fd8e8, #00f0ff); width: ${percentage}%; height: 100%; box-shadow: 0 0 8px #4fd8e8;"></div>
            </div>
          `;
          projectsGrid.appendChild(barWrapper);
        });
      }

      const languagesGrid = document.getElementById("hack-languages-bars");
      if (languagesGrid && dashboard.language_stats) {
        languagesGrid.innerHTML = "";
        const maxSecs = Math.max(...Object.values(dashboard.language_stats), 1);
        
        Object.entries(dashboard.language_stats).forEach(([lang, secs]) => {
          if (secs === 0) return;
          const percentage = (secs / maxSecs) * 100;
          const h = Math.floor(secs / 3600);
          const m = Math.floor((secs % 3600) / 60);

          const barWrapper = document.createElement("div");
          barWrapper.className = "chart-bar-wrapper";
          barWrapper.style.marginBottom = "8px";
          barWrapper.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 8px; font-family: var(--font-mono); color: var(--text-main); margin-bottom: 2px;">
              <span>${lang.toUpperCase()}</span>
              <span>${h}H ${m}M</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow: hidden; border: 1px solid rgba(255, 47, 142, 0.15);">
              <div style="background: linear-gradient(90deg, #ff2f8e, #ff007f); width: ${percentage}%; height: 100%; box-shadow: 0 0 8px #ff2f8e;"></div>
            </div>
          `;
          languagesGrid.appendChild(barWrapper);
        });
      }

      if (leaderboardEntries.length > 0) {
        renderLeaderboard();
      }
    })
    .catch(err => {
      console.error("Error loading Hackatime stats:", err);
      if (statsLoader) statsLoader.textContent = "Offline or proxy disconnected.";
    });

  // 2. Fetch Leaderboard
  const lbLoader = document.getElementById("hack-lb-loader");
  const lbTable = document.getElementById("hack-lb-table");

  fetch(`${apiBase}/leaderboard`)
    .then(res => res.json())
    .then(data => {
      if (lbLoader) lbLoader.style.display = "none";
      if (lbTable) lbTable.style.display = "table";

      const entriesData = data.props?.entries?.data || data.props?.entries?.entries || [];
      leaderboardEntries = entriesData;
      renderLeaderboard();
    })
    .catch(err => {
      console.error("Error loading Leaderboard:", err);
      if (lbLoader) lbLoader.textContent = "Offline or proxy disconnected.";
    });
}

function initHackatime() {
  fetchHackatimeData();
  setInterval(fetchHackatimeData, 120000);

  const scopeGlobal = document.getElementById("lb-scope-global");
  const scopeIndia = document.getElementById("lb-scope-india");
  const searchInput = document.getElementById("lb-search-input");

  if (scopeGlobal) {
    scopeGlobal.addEventListener("click", () => {
      scopeGlobal.classList.add("active");
      if (scopeIndia) scopeIndia.classList.remove("active");
      activeScope = "global";
      renderLeaderboard();
    });
  }

  if (scopeIndia) {
    scopeIndia.addEventListener("click", () => {
      scopeIndia.classList.add("active");
      if (scopeGlobal) scopeGlobal.classList.remove("active");
      activeScope = "india";
      renderLeaderboard();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderLeaderboard();
    });
  }
}
