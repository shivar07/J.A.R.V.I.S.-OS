window.secureComponents = window.secureComponents || {};
window.secureComponents.win_socials = `
    <div class="window" id="win-socials" style="width: 400px; height: 320px; top: 22%; left: 35%; display: none;">
      <div class="window-header" id="win-socialsheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          Socials Hub
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-socials')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-socials')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-socials')"></div>
        </div>
      </div>
      <div class="window-content custom-scroll"
        style="background: rgba(6, 11, 23, 0.98); padding: 20px; display: flex; flex-direction: column; gap: 16px; justify-content: center; align-items: center;">
        <h3
          style="font-family: var(--font-hud); font-size: 15px; color: var(--primary); margin-bottom: 8px; letter-spacing: 1px;">
          COMMUNICATION LINK</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%;">
          <a href="https://www.youtube.com/@roboticengineerwala" target="_blank" class="top-bar-btn"
            style="text-decoration: none; justify-content: center; padding: 12px; font-size: 12px; border: 1px solid #ff0000; color: #ff0000; background: rgba(255, 0, 0, 0.05);">
            YOUTUBE CHANNEL
          </a>
          <a href="https://github.com/sujayinnovator" target="_blank" class="top-bar-btn"
            style="text-decoration: none; justify-content: center; padding: 12px; font-size: 12px; border: 1px solid #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.05);">
            GITHUB
          </a>
        </div>
      </div>
    </div>
`;
