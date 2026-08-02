window.secureComponents = window.secureComponents || {};
window.secureComponents.flyouts = `
  <!-- Full Screen Dimmer Overlay for Brightness slider -->
  <div id="brightness-dimmer-overlay"
    style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: #000000; opacity: 0; pointer-events: none; z-index: 9999999; transition: opacity 0.15s ease;">
  </div>

  <!-- Windows 11 Quick Settings Flyout -->
  <div id="quick-settings-flyout" class="win11-flyout"
    style="display: none; width: 320px; position: fixed; bottom: 56px; right: 12px; background: rgba(18, 22, 33, 0.88); backdrop-filter: blur(25px); border: 1.5px solid rgba(79, 216, 232, 0.25); border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7), var(--shadow-glow); z-index: 1000002; padding: 16px; box-sizing: border-box; font-family: var(--font-ui); color: #ffffff; flex-direction: column; gap: 14px;">
    <!-- Quick Action Buttons Grid -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; width: 100%;">
      <!-- Wifi Pill (Active by default) -->
      <div class="quick-toggle-item active" id="qs-wifi"
        style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s;">
        <div class="quick-toggle-btn"
          style="width: 100%; height: 40px; border-radius: 6px; display: flex; justify-content: center; align-items: center; transition: all 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 13a10 10 0 0 1 14 0"></path>
            <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
            <line x1="12" y1="20" x2="12.01" y2="20"></line>
          </svg>
        </div>
        <span id="qs-wifi-ssid"
          style="font-size: 9px; margin-top: 6px; text-align: center; font-weight: 600; opacity: 0.9; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: var(--font-hud);">StarkNet_5G</span>
      </div>

      <!-- Bluetooth Pill -->
      <div class="quick-toggle-item active" id="qs-bluetooth"
        style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s;">
        <div class="quick-toggle-btn"
          style="width: 100%; height: 40px; border-radius: 6px; display: flex; justify-content: center; align-items: center; transition: all 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6.5 6.5h11M6.5 17.5h11M12 2v20M12 2l5 5-10 10 10 5" />
          </svg>
        </div>
        <span id="qs-bluetooth-status"
          style="font-size: 9px; margin-top: 6px; text-align: center; font-weight: 600; opacity: 0.9; font-family: var(--font-hud);">On</span>
      </div>

      <!-- Airplane Mode -->
      <div class="quick-toggle-item" id="qs-airplane"
        style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s;">
        <div class="quick-toggle-btn"
          style="width: 100%; height: 40px; border-radius: 6px; display: flex; justify-content: center; align-items: center; transition: all 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 2H2v20h20V2z" />
          </svg>
        </div>
        <span
          style="font-size: 9px; margin-top: 6px; text-align: center; font-weight: 600; opacity: 0.9; font-family: var(--font-hud);">Airplane</span>
      </div>

      <!-- Accessibility -->
      <div class="quick-toggle-item" id="qs-access"
        style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s;">
        <div class="quick-toggle-btn"
          style="width: 100%; height: 40px; border-radius: 6px; display: flex; justify-content: center; align-items: center; transition: all 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        </div>
        <span
          style="font-size: 9px; margin-top: 6px; text-align: center; font-weight: 600; opacity: 0.9; font-family: var(--font-hud);">Accessibility</span>
      </div>

      <!-- Energy Saver -->
      <div class="quick-toggle-item" id="qs-energy"
        style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s;">
        <div class="quick-toggle-btn"
          style="width: 100%; height: 40px; border-radius: 6px; display: flex; justify-content: center; align-items: center; transition: all 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
            <line x1="22" y1="11" x2="22" y2="13" />
            <path d="M6 11l2 2 4-4" />
          </svg>
        </div>
        <span
          style="font-size: 9px; margin-top: 6px; text-align: center; font-weight: 600; opacity: 0.9; font-family: var(--font-hud);">Energy
          saver</span>
      </div>

      <!-- Live Captions -->
      <div class="quick-toggle-item" id="qs-captions"
        style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s;">
        <div class="quick-toggle-btn"
          style="width: 100%; height: 40px; border-radius: 6px; display: flex; justify-content: center; align-items: center; transition: all 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="7" y1="9" x2="17" y2="9" />
            <line x1="7" y1="13" x2="13" y2="13" />
          </svg>
        </div>
        <span
          style="font-size: 9px; margin-top: 6px; text-align: center; font-weight: 600; opacity: 0.9; font-family: var(--font-hud);">Live
          captions</span>
      </div>
    </div>

    <div style="border-bottom: 1.5px solid rgba(79, 216, 232, 0.15); width: 100%;"></div>

    <!-- Sliders -->
    <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
      <!-- Brightness Slider -->
      <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="var(--text-dim)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <input type="range" id="qs-brightness-slider" min="15" max="100" value="100"
          style="flex-grow: 1; accent-color: var(--primary); height: 4px; background: rgba(255,255,255,0.1); outline: none; border-radius: 2px; cursor: pointer;">
      </div>

      <!-- Volume Slider -->
      <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="var(--text-dim)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <input type="range" id="qs-volume-slider" min="0" max="1" step="0.05" value="0.5"
          style="flex-grow: 1; accent-color: var(--primary); height: 4px; background: rgba(255,255,255,0.1); outline: none; border-radius: 2px; cursor: pointer;">
      </div>
    </div>

    <div style="border-bottom: 1.5px solid rgba(79, 216, 232, 0.15); width: 100%;"></div>

    <!-- Footer -->
    <div
      style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; opacity: 0.9; width: 100%; flex-shrink: 0; font-family: var(--font-hud);">
      <div style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--primary);">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          style="color: var(--primary);">
          <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
          <line x1="23" y1="11" x2="23" y2="13" />
          <line x1="6" y1="12" x2="14" y2="12" />
        </svg>
        <span>100% (STABLE)</span>
      </div>
      <div style="cursor: pointer; display: flex; align-items: center; color: var(--text-main);"
        onclick="toggleWindow('win-settings')">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>
    </div>
  </div>

  <!-- Windows 11 Calendar & Notification Flyout -->
  <div id="calendar-flyout" class="win11-flyout"
    style="display: none; width: 320px; position: fixed; bottom: 56px; right: 12px; background: rgba(18, 22, 33, 0.88); backdrop-filter: blur(25px); border: 1.5px solid rgba(79, 216, 232, 0.25); border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7), var(--shadow-glow); z-index: 1000002; padding: 16px; box-sizing: border-box; font-family: var(--font-ui); color: #ffffff; flex-direction: column; gap: 14px;">
    <!-- Time & Date Header -->
    <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%; flex-shrink: 0;">
      <div style="display: flex; flex-direction: column;">
        <span id="cal-flyout-time"
          style="font-size: 24px; font-weight: 300; font-family: var(--font-ui); color: #ffffff; letter-spacing: 0.5px;">12:00:00
          PM</span>
        <span id="cal-flyout-date"
          style="font-size: 11px; color: var(--primary); font-weight: 600; margin-top: 4px; font-family: var(--font-hud);">Friday,
          July 24, 2026</span>
      </div>
      <button
        style="background: none; border: none; color: var(--text-dim); cursor: pointer; padding: 4px; display: flex; align-items: center; border-radius: 4px; transition: background 0.2s;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>

    <div style="border-bottom: 1.5px solid rgba(79, 216, 232, 0.15); width: 100%;"></div>

    <!-- Calendar Month Navigation -->
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-shrink: 0;">
      <span id="cal-current-month"
        style="font-size: 12px; font-weight: 600; color: #ffffff; font-family: var(--font-hud); letter-spacing: 0.5px;">July
        2026</span>
      <div style="display: flex; gap: 8px;">
        <button id="cal-prev-month"
          style="background: none; border: none; color: #ffffff; cursor: pointer; width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; border-radius: 4px; border: 1px solid rgba(79,216,232,0.15); transition: background 0.2s; color: var(--primary);"><svg
            xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg></button>
        <button id="cal-next-month"
          style="background: none; border: none; color: #ffffff; cursor: pointer; width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; border-radius: 4px; border: 1px solid rgba(79,216,232,0.15); transition: background 0.2s; color: var(--primary);"><svg
            xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg></button>
      </div>
    </div>

    <!-- Calendar Days Header & Grid -->
    <div style="display: flex; flex-direction: column; gap: 4px; width: 100%; flex-grow: 1;">
      <!-- Weekdays -->
      <div
        style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; font-size: 9px; font-family: var(--font-hud); color: var(--text-dim); font-weight: bold; padding-bottom: 4px;">
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>
      <!-- Days Grid -->
      <div id="cal-days-grid"
        style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center; font-size: 11px; font-weight: 500; font-family: var(--font-mono);">
      </div>
    </div>

    <div style="border-bottom: 1.5px solid rgba(79, 216, 232, 0.15); width: 100%;"></div>

    <!-- Focus Session Panel -->
    <div
      style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-shrink: 0; font-family: var(--font-hud);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button id="focus-mins-minus"
          style="background: rgba(255,255,255,0.05); border: 1px solid rgba(79,216,232,0.25); color: #ffffff; width: 22px; height: 22px; border-radius: 4px; cursor: pointer; display: flex; justify-content: center; align-items: center; font-weight: bold; transition: background 0.2s;">-</button>
        <span style="font-size: 10px; font-family: var(--font-mono); font-weight: bold;"><span
            id="focus-mins-val">30</span> mins</span>
        <button id="focus-mins-plus"
          style="background: rgba(255,255,255,0.05); border: 1px solid rgba(79,216,232,0.25); color: #ffffff; width: 22px; height: 22px; border-radius: 4px; cursor: pointer; display: flex; justify-content: center; align-items: center; font-weight: bold; transition: background 0.2s;">+</button>
      </div>
      <button id="focus-play-btn"
        style="background: rgba(79, 216, 232, 0.15); border: 1px solid rgba(79, 216, 232, 0.3); border-radius: 6px; padding: 4px 10px; font-family: var(--font-hud); font-size: 9px; color: var(--primary); cursor: pointer; display: flex; align-items: center; gap: 6px; text-transform: uppercase; font-weight: bold; transition: all 0.2s; box-shadow: 0 0 5px rgba(79, 216, 232, 0.15);">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor"
          style="color: var(--primary);">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        Focus
      </button>
    </div>
  </div>
`;
