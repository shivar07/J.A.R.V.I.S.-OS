window.secureComponents = window.secureComponents || {};
window.secureComponents.win_settings = `
    <div class="window" id="win-settings" style="width: 400px; height: 420px; top: 20%; left: 45%;">
      <div class="window-header" id="win-settingsheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z">
            </path>
          </svg>
          System Settings
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-settings')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-settings')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-settings')"></div>
        </div>
      </div>
      <div class="window-content custom-scroll">
        <div class="settings-app">

          <div class="settings-group">
            <div class="settings-title">HUD Accent Subsystems</div>
            <div class="theme-options">
              <button class="theme-btn active" data-select="cyan">CYAN</button>
              <button class="theme-btn" data-select="green">GREEN</button>
              <button class="theme-btn" data-select="amber">AMBER</button>
              <button class="theme-btn" data-select="purple">ROSE</button>
            </div>
          </div>


          <div class="settings-group">
            <div class="settings-title">Wallpaper Matrix</div>
            <div class="wallpaper-options">
              <div class="wallpaper-card" data-bg="gradient"
                style="background-image: linear-gradient(135deg, #020713 0%, #071530 100%);">
                <span class="wallpaper-label">Ambient Dark</span>
              </div>
              <div class="wallpaper-card" data-bg="glowing"
                style="background-image: radial-gradient(circle, #0e1b30 0%, #040812 100%);">
                <span class="wallpaper-label">Reactor Glow</span>
              </div>
              <div class="wallpaper-card" data-bg="cyberspace"
                style="background: radial-gradient(circle, #001220 0%, #000407 100%);">
                <span class="wallpaper-label">Cyberspace</span>
              </div>
              <div class="wallpaper-card" data-bg="roboart" id="settings-wall-roboart"
                style="background-image: url('assets/robo_wallpaper.png');">
                <span class="wallpaper-label">Robo Art</span>
              </div>
              <div class="wallpaper-card active" data-bg="ironman"
                style="background-image: url('wallpaper/wp11991604-neon-4k-iron-man-wallpapers.jpg');">
                <span class="wallpaper-label">Neon Iron Man</span>
              </div>
            </div>

            <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 8px;">
              <label
                style="font-size: 11px; color: var(--text-dim); font-family: var(--font-mono); letter-spacing: 0.5px;">CUSTOM
                WALLPAPER SOURCE</label>
              <div style="display: flex; gap: 8px;">
                <input type="text" id="custom-wall-url" placeholder="Paste image URL..."
                  style="flex-grow: 1; height: 30px; background: rgba(0,0,0,0.4); border: 1.5px solid rgba(79, 216, 232, 0.15); border-radius: 4px; color: var(--text-main); font-family: var(--font-mono); font-size: 11px; padding: 0 8px; outline: none;">
                <button class="top-bar-btn" id="custom-wall-url-btn"
                  style="height: 30px; font-size: 11px; padding: 0 10px;">APPLY</button>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 10px; color: var(--text-dim); font-family: var(--font-mono);">OR</span>
                <input type="file" id="custom-wall-file" accept="image/*" style="display: none;">
                <button class="top-bar-btn" onclick="document.getElementById('custom-wall-file').click()"
                  style="height: 30px; font-size: 11px; flex-grow: 1; justify-content: center;">UPLOAD LOCAL
                  FILE</button>
              </div>
            </div>
          </div>


          <div class="settings-group">
            <div class="settings-title">Visual Overlay</div>
            <label style="display: flex; align-items: center; gap: 10px; font-size: 15px; cursor: pointer;">
              <input type="checkbox" id="crt-toggle" checked style="width: 18px; height: 18px; cursor: pointer;">
              Enable CRT Screen Scanlines
            </label>
          </div>
        </div>
      </div>
    </div>
`;
