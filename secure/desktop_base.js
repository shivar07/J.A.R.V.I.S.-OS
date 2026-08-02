window.secureComponents = window.secureComponents || {};
window.secureComponents.desktopBase = `
    <div class="search-container-wrap">
      <div class="desktop-search-container">
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" id="desktop-search-input" placeholder="Search apps... (⌘K)" autocomplete="off">
        <div class="search-results-list" id="search-results"></div>
      </div>
    </div>

    <header class="top-bar">
      <!-- Left: CPU Telemetry -->
      <div class="top-bar-left"
        style="display: flex; align-items: center; gap: 10px; font-family: var(--font-mono); font-size: 11px; color: var(--text-main); width: 35%;">
        <span
          style="font-family: var(--font-hud); font-size: 10px; color: var(--primary); letter-spacing: 0.5px; white-space: nowrap;">CPU
          LOAD:</span>
        <span id="diag-cpu-val" style="width: 32px; font-weight: bold; text-align: right;">28%</span>
        <div
          style="flex-grow: 1; max-width: 150px; height: 6px; background: rgba(79, 216, 232, 0.1); border-radius: 3px; overflow: hidden; border: 1.5px solid rgba(79, 216, 232, 0.25);">
          <div id="diag-cpu-bar"
            style="width: 28%; height: 100%; background: var(--primary); box-shadow: var(--shadow-glow); transition: width 0.5s ease;">
          </div>
        </div>
      </div>

      <!-- Center: Thermal Telemetry -->
      <div class="top-bar-center"
        style="display: flex; align-items: center; gap: 10px; font-family: var(--font-mono); font-size: 11px; color: var(--text-main); justify-content: center; width: 30%;">
        <span
          style="font-family: var(--font-hud); font-size: 9px; color: var(--accent); letter-spacing: 1px; white-space: nowrap;">THERMAL
          PROFILE:</span>
        <span id="diag-temp-val" style="font-weight: bold;">46°C</span>
        <div
          style="width: 60px; height: 6px; background: rgba(255, 47, 142, 0.1); border-radius: 3px; overflow: hidden; border: 1.5px solid rgba(255, 47, 142, 0.25);">
          <div id="diag-temp-bar"
            style="width: 58%; height: 100%; background: var(--accent); box-shadow: 0 0 8px var(--accent); transition: width 0.5s ease;">
          </div>
        </div>
      </div>

      <!-- Right: Memory Telemetry -->
      <div class="top-bar-right"
        style="display: flex; align-items: center; gap: 10px; font-family: var(--font-mono); font-size: 11px; color: var(--text-main); justify-content: flex-end; width: 35%;">
        <span
          style="font-family: var(--font-hud); font-size: 10px; color: var(--primary); letter-spacing: 0.5px; white-space: nowrap;">SYS
          MEMORY:</span>
        <span id="diag-ram-val" style="white-space: nowrap; font-weight: bold;">4.2 GB / 8.0 GB</span>
        <div
          style="flex-grow: 1; max-width: 150px; height: 6px; background: rgba(79, 216, 232, 0.1); border-radius: 3px; overflow: hidden; border: 1.5px solid rgba(79, 216, 232, 0.25);">
          <div id="diag-ram-bar"
            style="width: 52%; height: 100%; background: var(--primary); box-shadow: var(--shadow-glow); transition: width 0.5s ease;">
          </div>
        </div>
      </div>
    </header>

    <div id="start-menu-placeholder"></div>

    <main class="desktop-grid" id="desktop-icons-placeholder"></main>

    <div class="hud-desktop-widgets">
      <div class="hud-widget clock-widget">
        <div class="analog-clock">
          <div class="hand hour-hand" id="analog-hour"></div>
          <div class="hand min-hand" id="analog-min"></div>
          <div class="hand sec-hand" id="analog-sec"></div>
          <div class="clock-center"></div>
        </div>
        <div class="digital-time" id="widget-digital-time">12:00:00 AM</div>
      </div>

      <div class="hud-widget calendar-widget">
        <div class="calendar-header">
          <span id="calendar-month-year">July 2026</span>
        </div>
        <div class="calendar-days-grid">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>
        <div class="calendar-dates-grid" id="calendar-dates"></div>
      </div>
    </div>

    <div class="context-menu" id="desktop-context-menu" style="display: none;">
      <ul>
        <li onclick="toggleWindow('win-jarvis')"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="22"></line>
          </svg> J.A.R.V.I.S. AI</li>
        <li onclick="toggleWindow('win-youtube')"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path
              d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
            </path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg> YouTube Lab</li>
        <li onclick="toggleWindow('win-browser')"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg> Chrome Browser</li>
        <li onclick="toggleWindow('win-tasks')"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg> RoboTasks</li>
        <li onclick="toggleWindow('win-terminal')"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg> Terminal</li>
        <li onclick="toggleWindow('win-showcase')"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
            </polygon>
          </svg> Trophy Showcase</li>
        <li onclick="toggleWindow('win-gallery')"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg> Gallery Hub</li>
        <li onclick="toggleWindow('win-settings')"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z">
            </path>
          </svg> Settings</li>
        <li class="menu-separator" style="height: 1.5px; background: rgba(79, 216, 232, 0.15); margin: 6px 0;"></li>
        <li onclick="window.location.reload()"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
          </svg> Reboot System</li>
      </ul>
    </div>

    <div id="windows-container"></div>

    <footer class="win-taskbar">
      <!-- Left: Dynamic Weather Widget -->
      <div class="taskbar-left" onclick="toggleWindow('win-weather')">
        <div class="taskbar-weather-widget" id="taskbar-weather">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none"
            stroke="#e5c158" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <div class="weather-text-wrap"
            style="display: flex; flex-direction: column; font-family: var(--font-ui); font-size: 11px; line-height: 1.2; margin-left: 8px;">
            <span id="taskbar-weather-temp" style="color: #ffffff; font-weight: bold;">--°C</span>
            <span id="taskbar-weather-desc" style="color: var(--text-dim); font-size: 9px; white-space: nowrap;">Malibu
              (Loading...)</span>
          </div>
        </div>
      </div>

      <!-- Center: Start Button, Search Pill, Apps Container -->
      <div class="taskbar-center">
        <!-- Windows 11 Start Button -->
        <div class="taskbar-item start-btn-icon" data-tooltip="Start Menu" id="win-start-btn">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <rect x="2" y="2" width="9.5" height="9.5" fill="#0078d4" />
            <rect x="12.5" y="2" width="9.5" height="9.5" fill="#0078d4" />
            <rect x="2" y="12.5" width="9.5" height="9.5" fill="#0078d4" />
            <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#0078d4" />
          </svg>
        </div>

        <!-- Rounded Search Pill -->
        <div class="taskbar-search-pill" onclick="document.getElementById('desktop-search-input').focus()">
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
            fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>Search</span>
        </div>

        <!-- App Shortcuts -->
        <div class="taskbar-apps-container">
          <!-- Chrome (Portfolio Browser) -->
          <div class="taskbar-item dock-item chrome-icon" data-tooltip="Chrome Browser"
            onclick="toggleWindow('win-browser')">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path fill="#4285F4" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
              <path fill="#EA4335" d="M12 2a9.985 9.985 0 0 1 8.66 5H12v7l-6.06-10.5C7.45 2.5 9.66 2 12 2z" />
              <path fill="#FBBC05" d="M22 12a9.985 9.985 0 0 1-5 8.66L11 10.15h11z" />
              <path fill="#34A853" d="M12 22a9.985 9.985 0 0 1-8.66-5L9.4 6.5l2.6 15.5z" />
              <circle cx="12" cy="12" r="4" fill="#fff" />
              <circle cx="12" cy="12" r="3.2" fill="#4285F4" />
            </svg>
            <div class="dock-indicator" id="indicator-win-browser"></div>
          </div>

          <!-- YouTube -->
          <div class="taskbar-item dock-item youtube-icon" data-tooltip="YouTube Channel"
            onclick="toggleWindow('win-youtube')">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path fill="#FF0000"
                d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.122C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.496a3.003 3.003 0 0 0-2.11 2.122A30.2 30.2 0 0 0 0 12c0 3.845.247 5.83.496 5.837a3.003 3.003 0 0 0 2.11 2.122c1.86.496 9.388.496 9.388.496s7.528 0 9.388-.496a3.002 3.002 0 0 0 2.11-2.122A30.2 30.2 0 0 0 24 12a30.2 30.2 0 0 0-.502-5.837z" />
              <polygon fill="#FFFFFF" points="9.545 15.568 15.818 12 9.545 8.432" />
            </svg>
            <div class="dock-indicator" id="indicator-win-youtube"></div>
          </div>

          <!-- File Explorer (Gallery Hub) -->
          <div class="taskbar-item dock-item gallery-icon" data-tooltip="File Explorer"
            onclick="toggleWindow('win-gallery')">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#ffd700" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <div class="dock-indicator" id="indicator-win-gallery"></div>
          </div>

          <!-- RoboTerminal -->
          <div class="taskbar-item dock-item terminal-icon" data-tooltip="Terminal"
            onclick="toggleWindow('win-terminal')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none"
              stroke="#ff2f8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M7 9l3 3-3 3M12 15h5" />
            </svg>
            <div class="dock-indicator" id="indicator-win-terminal"></div>
          </div>

          <!-- J.A.R.V.I.S. AI -->
          <div class="taskbar-item dock-item jarvis-icon" data-tooltip="J.A.R.V.I.S. AI"
            onclick="toggleWindow('win-jarvis')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
              <circle cx="12" cy="12" r="10" fill="url(#jarvis-grad-dock)" stroke="#4fd8e8" stroke-width="1.5" />
              <circle cx="12" cy="12" r="6" fill="none" stroke="#ff2f8e" stroke-width="1" stroke-dasharray="2 2" />
              <circle cx="12" cy="12" r="3" fill="#e5c158" />
            </svg>
            <div class="dock-indicator" id="indicator-win-jarvis"></div>
          </div>

          <!-- RoboTasks -->
          <div class="taskbar-item dock-item tasks-icon" data-tooltip="RoboTasks" onclick="toggleWindow('win-tasks')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none"
              stroke="#00f0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <div class="dock-indicator" id="indicator-win-tasks"></div>
          </div>

          <!-- Trophy Showcase -->
          <div class="taskbar-item dock-item showcase-icon" data-tooltip="Trophy Showcase"
            onclick="toggleWindow('win-showcase')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none"
              stroke="#ffd700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v3h16v-3h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v5c0 2.2-1.8 4-4 4s-4-1.8-4-4V6a4 4 0 0 1 4-4z" />
            </svg>
            <div class="dock-indicator" id="indicator-win-showcase"></div>
          </div>

          <!-- Stark Music Player -->
          <div class="taskbar-item dock-item music-icon" data-tooltip="Arc Audio Decrypter"
            onclick="toggleWindow('win-music')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none"
              stroke="#27c93f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
            <div class="dock-indicator" id="indicator-win-music"></div>
          </div>

          <!-- System Settings -->
          <div class="taskbar-item dock-item settings-icon" data-tooltip="Settings"
            onclick="toggleWindow('win-settings')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none"
              stroke="#4fd8e8" stroke-width="2">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <div class="dock-indicator" id="indicator-win-settings"></div>
          </div>

          <!-- Analytics & HUD Diagnostics -->
          <div class="taskbar-item dock-item diagnostics-icon" data-tooltip="Analytics Console"
            onclick="toggleWindow('win-hackatime-stats')">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="#4fd8e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
            <div class="dock-indicator" id="indicator-win-hackatime-stats"></div>
          </div>

          <!-- Socials Hub -->
          <div class="taskbar-item dock-item socials-icon" data-tooltip="Socials Hub"
            onclick="toggleWindow('win-socials')">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="#ff2f8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <div class="dock-indicator" id="indicator-win-socials"></div>
          </div>

          <!-- Calculator -->
          <div class="taskbar-item dock-item calculator-icon" data-tooltip="Calculator"
            onclick="toggleWindow('win-calculator')">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"
              stroke="#4fd8e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="9" y1="22" x2="9" y2="18" />
              <line x1="15" y1="22" x2="15" y2="18" />
              <line x1="9" y1="18" x2="15" y2="18" />
              <rect x="7" y="5" width="10" height="4" />
              <circle cx="9" cy="13" r="1" />
              <circle cx="15" cy="13" r="1" />
              <circle cx="9" cy="17" r="1" />
              <circle cx="15" cy="17" r="1" />
            </svg>
            <div class="dock-indicator" id="indicator-win-calculator"></div>
          </div>

          <!-- Hackatime Workspace -->
          <div class="taskbar-item dock-item hackatime-workspace-icon" data-tooltip="Hackatime"
            onclick="openHackatimeWorkspace()">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"
              stroke="#D7FF6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18M15 3v18" />
            </svg>
            <div class="dock-indicator" id="indicator-workspace-hackatime"></div>
          </div>

          <!-- Hackatime Leaderboard Dock Item -->
          <div class="taskbar-item dock-item hackatime-leaderboard-icon" data-tooltip="Leaderboards"
            onclick="toggleWindow('win-hackatime-leaderboard')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none"
              stroke="#ff2f8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v3h16v-3h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v5c0 2.2-1.8 4-4 4s-4-1.8-4-4V6a4 4 0 0 1 4-4z" />
            </svg>
            <div class="dock-indicator" id="indicator-win-hackatime-leaderboard"></div>
          </div>
        </div>
      </div>

      <!-- Right: SysTray, Connections, and Clock -->
      <div class="taskbar-right">
        <div class="taskbar-tray-pill" id="quick-settings-trigger"
          style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 4px 12px; cursor: pointer; transition: background 0.2s; height: 32px; box-sizing: border-box; margin-right: 12px;">
          <div class="tray-icon" title="WiFi Signal Strong"
            style="display: flex; align-items: center; color: var(--primary);">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 13a10 10 0 0 1 14 0"></path>
              <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
          </div>
          <div class="tray-icon" title="Audio Feedback Enabled"
            style="display: flex; align-items: center; color: var(--primary);">
            <svg id="audio-icon-tray" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </div>
          <div class="tray-icon" title="Battery Status: 100%"
            style="display: flex; align-items: center; color: var(--primary);">
            <div class="battery-pill-indicator"
              style="width: 18px; height: 9px; padding: 0.5px; border-width: 1px; border-color: currentColor;">
              <div class="battery-fill" style="width: 100%; background-color: var(--primary);"></div>
            </div>
          </div>
        </div>
        <div class="taskbar-clock" id="taskbar-clock-btn"
          style="display: flex; flex-direction: column; align-items: flex-end; font-family: var(--font-ui); font-size: 11px; line-height: 1.25; color: #ffffff; cursor: pointer; text-align: right; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 10px; height: 32px; justify-content: center;">
          <span id="taskbar-clock-time">--:-- --</span>
          <span id="taskbar-clock-date" style="font-size: 9px; color: var(--text-dim);">--/--/----</span>
        </div>
      </div>
    </footer>
`;
