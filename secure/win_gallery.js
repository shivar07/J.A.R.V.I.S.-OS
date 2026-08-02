window.secureComponents = window.secureComponents || {};
window.secureComponents.win_gallery = `
    <div class="window" id="win-gallery" style="width: 820px; height: 540px; top: 14%; left: 22%; display: none;">
      <div class="window-header" id="win-galleryheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          Achievements Gallery Hub
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-gallery')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-gallery')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-gallery')"></div>
        </div>
      </div>
      <div class="window-content custom-scroll"
        style="background: #080d19; display: flex; flex-direction: row; overflow: hidden; padding: 0;">

        <aside class="gallery-sidebar custom-scroll"
          style="width: 240px; border-right: 1px solid var(--border-dim); background: rgba(3, 7, 18, 0.6); flex-shrink: 0; padding: 12px 6px;">
          <div class="gallery-sidebar-title"
            style="padding-left: 8px; font-family: var(--font-hud); font-size: 11px; color: var(--primary); letter-spacing: 1.5px; margin-bottom: 12px;">
            DIRECTORY TREE</div>
          <ul class="gallery-folder-list" id="gallery-folders"
            style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px;">

          </ul>
        </aside>

        <div class="gallery-main" style="flex-grow: 1; display: flex; flex-direction: column; height: 100%;">
          <div class="gallery-path-bar"
            style="padding: 10px 16px; border-bottom: 1px solid var(--border-dim); background: rgba(0,0,0,0.2); font-family: var(--font-mono); font-size: 12px; color: var(--text-dim); display: flex; align-items: center; gap: 8px;">
            <span>Root / gallery /</span>
            <span id="gallery-current-folder-label" style="color: var(--primary); font-weight: bold;">Designs</span>
          </div>
          <div class="gallery-grid-wrapper custom-scroll" style="flex-grow: 1; padding: 16px; overflow-y: auto;">
            <div class="gallery-grid" id="gallery-items-grid">

            </div>
          </div>
        </div>
      </div>
    </div>
`;
