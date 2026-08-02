window.secureComponents = window.secureComponents || {};
window.secureComponents.win_hackatime_stats = `
    <div class="window" id="win-hackatime-stats" style="width: 820px; height: 530px; top: 100px; left: 180px; display: none;">
      <div class="window-header" id="win-hackatime-statsheader">
        <div class="window-title">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3v18h18" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          </svg>
          Hackatime Analytics Console
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-hackatime-stats')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-hackatime-stats')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-hackatime-stats')"></div>
        </div>
      </div>
      <div class="window-content" style="background: #0d0c15; display: flex; box-sizing: border-box; overflow: hidden; height: calc(100% - 30px);">
        <!-- Sidebar -->
        <div class="hack-sidebar">
          <div class="hack-user-profile">
            <img id="hack-avatar" src="image/me.png" alt="User Avatar" class="hack-avatar-img">
            <h3 id="hack-display-name" class="hack-name-text">shivar07</h3>
            <span class="hack-badge-in">🇮🇳 India</span>
          </div>
          <div class="hack-streak-card">
            <div class="hack-streak-title">CURRENT STREAK</div>
            <div class="hack-streak-val" id="hack-streak-days">2 days</div>
          </div>
          <div class="hack-sidebar-menu">
            <div class="hack-menu-item active">Home</div>
            <div class="hack-menu-item" onclick="toggleWindow('win-hackatime-leaderboard')">Leaderboard</div>
            <a href="https://github.com/hackclub/hackatime" target="_blank" class="hack-menu-item">GitHub Repository ↗</a>
          </div>
        </div>
        <!-- Main Stats Panel -->
        <div class="hack-stats-panel custom-scroll">
          <div class="hack-loader" id="hack-stats-loader">Loading Hackatime logs...</div>
          <div class="hack-main-content" id="hack-stats-content" style="display: none;">
            <div class="hack-panel-header">
              <h2>Keep Track of Your Coding Time</h2>
              <p id="hack-today-log">Today, you've logged 1h 12m 4s across HTML, Markdown (&amp; 4 other languages) using Antigravity-ide</p>
            </div>
            
            <!-- KPIs Row -->
            <div class="hack-kpi-row">
              <div class="hack-kpi-card">
                <span class="hack-kpi-label">TOTAL TIME</span>
                <span class="hack-kpi-val" id="hack-total-time">11h 2m</span>
              </div>
              <div class="hack-kpi-card">
                <span class="hack-kpi-label">TOP PROJECT</span>
                <span class="hack-kpi-val" id="hack-top-project">Web OS</span>
              </div>
              <div class="hack-kpi-card">
                <span class="hack-kpi-label">TOP LANGUAGE</span>
                <span class="hack-kpi-val" id="hack-top-language">HTML</span>
              </div>
              <div class="hack-kpi-card">
                <span class="hack-kpi-label">TOP EDITOR</span>
                <span class="hack-kpi-val">Antigravityide</span>
              </div>
            </div>

            <!-- Charts Section -->
            <div class="hack-charts-grid">
              <div class="hack-chart-card">
                <h3>Project Durations</h3>
                <div class="hack-chart-container" id="hack-projects-bars">
                  <!-- Generated bars -->
                </div>
              </div>
              <div class="hack-chart-card">
                <h3>Languages Distribution</h3>
                <div class="hack-chart-container" id="hack-languages-bars">
                  <!-- Generated bars -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
