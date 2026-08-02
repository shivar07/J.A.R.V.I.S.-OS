window.secureComponents = window.secureComponents || {};
window.secureComponents.win_music = `
    <div class="window" id="win-music" style="width: 610px; height: 350px; top: 40px; left: 34%; display: none;">
      <div class="window-header" id="win-musicheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
          Arc Audio Decrypter
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-music')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-music')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-music')"></div>
        </div>
      </div>
      <div class="window-content"
        style="padding: 16px; background: rgba(8, 12, 24, 0.97); display: flex; flex-direction: row; gap: 18px; height: calc(100% - 38px); box-sizing: border-box; overflow: hidden;">

        <!-- Left Column (Visualizer, Cover Art & Info) -->
        <div
          style="width: 240px; display: flex; flex-direction: column; gap: 10px; justify-content: center; align-items: center; border-right: 1px dashed rgba(79, 216, 232, 0.15); padding-right: 18px; flex-shrink: 0; box-sizing: border-box;">

          <!-- NOW PLAYING Label -->
          <div
            style="font-family: var(--font-hud); font-size: 8px; color: var(--primary); letter-spacing: 2px; text-align: center; text-transform: uppercase; flex-shrink: 0; opacity: 0.8;">
            NOW PLAYING</div>

          <!-- 1:1 Cover Art Screen -->
          <div class="music-screen-container"
            style="position: relative; width: 110px; height: 110px; background: radial-gradient(circle, #0c1220 0%, #03060c 100%); border: 1.5px solid rgba(79, 216, 232, 0.35); border-radius: 10px; overflow: hidden; box-shadow: 0 0 15px rgba(79, 216, 232, 0.2); display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
            <img id="music-track-img" src="https://img.youtube.com/vi/wbjc55JqkGs/0.jpg"
              style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: opacity 0.5s ease;">
            <div
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(79, 216, 232, 0.05), rgba(0, 255, 0, 0.02), rgba(79, 216, 232, 0.05)); background-size: 100% 4px, 6px 100%; opacity: 0.6;">
            </div>

            <!-- Glowing Equalizer Bars -->
            <div class="music-equalizer"
              style="position: absolute; bottom: 6px; left: 0; width: 100%; height: 24px; display: flex; justify-content: center; gap: 3px; pointer-events: none; opacity: 0.85;">
              <div class="eq-bar eq-bar-1"></div>
              <div class="eq-bar eq-bar-2"></div>
              <div class="eq-bar eq-bar-3"></div>
              <div class="eq-bar eq-bar-4"></div>
              <div class="eq-bar eq-bar-5"></div>
              <div class="eq-bar eq-bar-6"></div>
              <div class="eq-bar eq-bar-7"></div>
              <div class="eq-bar eq-bar-8"></div>
            </div>
          </div>

          <!-- Native Audio Element (Hidden) -->
          <audio id="stark-audio-player"></audio>

          <!-- Centered Track Title & Subtitle -->
          <div
            style="width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; flex-shrink: 0;">
            <h4 id="music-track-title"
              style="font-family: var(--font-hud); font-size: 12.5px; color: #ffffff; letter-spacing: 0.5px; margin: 0 0 1px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
              Select Track</h4>
            <p id="music-track-desc"
              style="font-family: var(--font-mono); font-size: 8.5px; color: var(--text-dim); text-transform: uppercase; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
              Awaiting directive</p>
          </div>

          <!-- Progress Slider Bar (Timeline) -->
          <div style="width: 100%; display: flex; flex-direction: column; gap: 2px; flex-shrink: 0;">
            <div style="position: relative; display: flex; align-items: center; width: 100%;">
              <input type="range" id="music-progress-slider" min="0" max="100" value="0"
                style="width: 100%; accent-color: var(--primary); height: 4px; background: rgba(255,255,255,0.08); outline: none; border-radius: 2px; cursor: pointer; transition: background 0.1s;">
            </div>
            <div
              style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 8px; color: var(--text-dim);">
              <span id="music-curr-time">0:00</span>
              <span id="music-total-time">0:00</span>
            </div>
          </div>

        </div>

        <!-- Right Column (Controls & Scrollable Playlist Queue) -->
        <div
          style="flex-grow: 1; display: flex; flex-direction: column; gap: 12px; min-width: 0; height: 100%; box-sizing: border-box;">

          <!-- Controls & Volume Bar -->
          <div style="display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; width: 100%;">
            <!-- Circular Controls Row -->
            <div style="display: flex; align-items: center; gap: 12px;">
              <!-- Prev Button -->
              <button class="top-bar-btn" id="music-prev-btn"
                style="width: 32px; height: 32px; padding: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: transparent; border: 1.5px solid rgba(79, 216, 232, 0.2); cursor: pointer; color: var(--text-main); transition: all 0.2s;">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="19 20 9 12 19 4 19 20"></polygon>
                  <line x1="5" y1="19" x2="5" y2="5"></line>
                </svg>
              </button>

              <!-- Circular Arc Reactor Play Button -->
              <div class="reactor-play-btn" id="music-play-btn" title="Toggle Decryption Matrix"
                style="width: 44px; height: 44px;">
                <div class="reactor-ring"></div>
                <div class="reactor-core" style="width: 20px; height: 20px;">
                  <svg class="play-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="7" height="7"
                    fill="currentColor" style="color: #050810;">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                  <svg class="pause-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="7" height="7"
                    fill="currentColor" style="color: #050810;">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                </div>
              </div>

              <!-- Next Button -->
              <button class="top-bar-btn" id="music-next-btn"
                style="width: 32px; height: 32px; padding: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: transparent; border: 1.5px solid rgba(79, 216, 232, 0.2); cursor: pointer; color: var(--text-main); transition: all 0.2s;">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="5 4 15 12 5 20 5 4"></polygon>
                  <line x1="19" y1="5" x2="19" y2="19"></line>
                </svg>
              </button>
            </div>

            <!-- Volume Controller -->
            <div style="display: flex; align-items: center; gap: 6px; width: 110px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
                stroke="var(--text-dim)" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              <input type="range" id="music-volume-slider" min="0" max="1" step="0.05" value="0.5"
                style="width: 100%; accent-color: var(--primary); height: 3px; background: rgba(255,255,255,0.08); outline: none; border-radius: 2px; cursor: pointer;">
            </div>
          </div>

          <!-- Scrollable Playlist Queue -->
          <div
            style="display: flex; flex-direction: column; flex-grow: 1; min-height: 0; border-top: 1px dashed rgba(79, 216, 232, 0.15); padding-top: 10px; overflow: hidden; width: 100%;">
            <div
              style="font-family: var(--font-hud); font-size: 8.5px; color: #4fd8e8; letter-spacing: 1.5px; margin-bottom: 8px; text-transform: uppercase; flex-shrink: 0;">
              PLAYLIST (4)</div>
            <div class="music-playlist-list custom-scroll" id="music-playlist-container"
              style="flex-grow: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; width: 100%; padding-right: 4px;">
              <!-- Rendered items will go here -->
            </div>
          </div>
        </div>

      </div>
    </div>
`;
