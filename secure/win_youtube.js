window.secureComponents = window.secureComponents || {};
window.secureComponents.win_youtube = `
    <div class="window" id="win-youtube" style="width: 800px; height: 500px; top: 12%; left: 25%;">
      <div class="window-header" id="win-youtubeheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
            </path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
          YouTube Lab - @roboticengineerwala
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-youtube')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-youtube')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-youtube')"></div>
        </div>
      </div>
      <div class="window-content custom-scroll" style="overflow: hidden;">
        <div class="youtube-dashboard">

          <aside class="yt-sidebar custom-scroll">
            <div class="yt-channel-card">
              <div class="yt-channel-logo" style="background-color: var(--primary); color: #000;">R</div>
              <div class="yt-channel-title">Robotic Engineer Wala</div>
              <div class="yt-sub-count">Creator & Engineer</div>
              <a href="https://www.youtube.com/@roboticengineerwala" target="_blank" class="top-bar-btn"
                style="text-decoration: none; justify-content: center; font-size: 11px;">
                OPEN CHANNEL
              </a>
            </div>
            <div class="yt-feed-title">Robotics Lab Videos</div>
            <div class="yt-video-list" id="yt-feed-container">

            </div>
          </aside>

          <div class="yt-main-content">
            <div class="yt-player-wrapper" id="yt-player-container">
              <div style="text-align: center; color: var(--text-dim);">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  style="color: var(--primary); margin-bottom: 12px;">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                <p>Select a video from the sidebar feed to play</p>
              </div>
            </div>
            <div class="yt-video-details"
              style="position: relative; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
              <div style="flex-grow: 1;">
                <h4 id="yt-video-active-title">No Video Selected</h4>
                <p id="yt-video-active-desc">Select a project feed to begin video playback diagnostics.</p>
              </div>
              <a id="yt-video-direct-btn" href="#" target="_blank" class="top-bar-btn"
                style="display: none; text-decoration: none; align-items: center; gap: 6px; padding: 6px 12px; font-size: 11px; flex-shrink: 0; margin-top: 4px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
