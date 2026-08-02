window.secureComponents = window.secureComponents || {};
window.secureComponents.win_hackatime_leaderboard = `
    <!-- Hackatime Leaderboards Window -->
    <div class="window" id="win-hackatime-leaderboard" style="width: 780px; height: 540px; top: 100px; left: 1020px; display: none;">
      <div class="window-header" id="win-hackatime-leaderboardheader">
        <div class="window-title">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v3h16v-3h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v5c0 2.2-1.8 4-4 4s-4-1.8-4-4V6a4 4 0 0 1 4-4z" />
          </svg>
          Hackatime Global Leaderboards
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-hackatime-leaderboard')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-hackatime-leaderboard')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-hackatime-leaderboard')"></div>
        </div>
      </div>
      <div class="window-content" style="background: #0d0c15; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-sizing: border-box; overflow: hidden; height: calc(100% - 30px);">
        <div class="hack-lb-header">
          <h2>Leaderboards</h2>
          <div class="hack-lb-controls">
            <!-- Filter buttons -->
            <div class="hack-filter-group">
              <button class="hack-filter-btn active" id="lb-scope-global">Global</button>
              <button class="hack-filter-btn" id="lb-scope-india">🇮🇳 India</button>
            </div>
            
            <!-- Search field -->
            <div class="hack-lb-search">
              <input type="text" id="lb-search-input" placeholder="Find user...">
            </div>
          </div>
        </div>
        
        <!-- Leaderboard Table -->
        <div class="hack-lb-table-wrap custom-scroll">
          <div class="hack-loader" id="hack-lb-loader">Accessing Hack Club leaderboard nodes...</div>
          <table class="hack-lb-table" id="hack-lb-table" style="display: none;">
            <thead>
              <tr>
                <th style="width: 80px; text-align: center;">Rank</th>
                <th>User</th>
                <th style="width: 120px; text-align: center;">Streak</th>
                <th style="width: 180px; text-align: right;">Coding Time</th>
              </tr>
            </thead>
            <tbody id="hack-lb-tbody">
              <!-- Dynamically populated entries -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
`;
