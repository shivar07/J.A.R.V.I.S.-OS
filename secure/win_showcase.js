window.secureComponents = window.secureComponents || {};
window.secureComponents.win_showcase = `
    <div class="window" id="win-showcase" style="width: 780px; height: 530px; top: 10%; left: 24%; display: none;">
      <div class="window-header" id="win-showcaseheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="#ffd700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
            </polygon>
          </svg>
          Trophy Showcase & Honors
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-showcase')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-showcase')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-showcase')"></div>
        </div>
      </div>
      <div class="window-content custom-scroll"
        style="background: rgba(6, 11, 23, 0.98); display: flex; flex-direction: column; overflow: hidden; padding: 0;">
        <div class="showcase-container">
          <div class="showcase-slider">
            <button class="slider-btn prev-btn" id="showcase-prev-btn">&lt;</button>
            <div class="showcase-active-slide">
              <div class="showcase-img-frame" id="showcase-active-frame">
                <img id="showcase-active-img" src="showcase ui + image/1.png" alt="Showcase Image">
              </div>
              <div class="showcase-info-panel">
                <h3 id="showcase-title">National Robot Champion Award</h3>
                <span class="showcase-badge" id="showcase-badge">Robofest Gujarat 3.0 / 4.0</span>
                <p id="showcase-desc">Official recognition certificate and trophy representing our 1st prize design and
                  execution in autonomous robotics competitions.</p>
              </div>
            </div>
            <button class="slider-btn next-btn" id="showcase-next-btn">&gt;</button>
          </div>
          <div class="showcase-thumbnails custom-scroll" id="showcase-thumbs-tray">

          </div>
        </div>
      </div>
    </div>
`;
