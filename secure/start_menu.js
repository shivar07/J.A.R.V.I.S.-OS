window.secureComponents = window.secureComponents || {};
window.secureComponents.startMenu = `
    <div class="start-menu" id="start-menu">
      <!-- Left Pane (Main Start Menu) -->
      <div class="start-main-pane">
        <!-- Search bar -->
        <div class="start-search-wrap">
          <svg class="start-search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="start-search-input" placeholder="Search for apps, settings, and documents" class="start-search-input">
          <svg class="start-phone-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-5 21c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V4h10v14z"/>
          </svg>
        </div>

        <!-- Pinned Section -->
        <div class="start-section-header">
          <span>Pinned</span>
        </div>
        <div class="start-pinned-grid">
          <div class="start-pinned-item" onclick="jarvisSpeak('Opening Office 365, sir.')">
            <div class="start-pinned-icon office-icon">
              <svg viewBox="0 0 48 48" width="32" height="32"><path fill="#E03E2F" d="M38 4H10A6 6 0 004 10v28a6 6 0 006 6h28a6 6 0 006-6V10a6 6 0 00-6-6z"/><path fill="#FFF" d="M16 28h16V16H16v12zm4-8h8v4h-8v-4z"/></svg>
            </div>
            <span class="start-pinned-label">Office 365</span>
          </div>
          <div class="start-pinned-item" onclick="toggleWindow('win-browser')">
            <div class="start-pinned-icon chrome-icon">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path fill="#4285F4" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
                <path fill="#EA4335" d="M12 2a9.985 9.985 0 0 1 8.66 5H12v7l-6.06-10.5C7.45 2.5 9.66 2 12 2z" />
                <path fill="#FBBC05" d="M22 12a9.985 9.985 0 0 1-5 8.66L11 10.15h11z" />
                <path fill="#34A853" d="M12 22a9.985 9.985 0 0 1-8.66-5L9.4 6.5l2.6 15.5z" />
                <circle cx="12" cy="12" r="4" fill="#fff" />
                <circle cx="12" cy="12" r="3.2" fill="#4285F4" />
              </svg>
            </div>
            <span class="start-pinned-label">Google Chrome</span>
          </div>
          <div class="start-pinned-item" onclick="jarvisSpeak('Antigravity core system running at optimal parameters.')">
            <div class="start-pinned-icon antigravity-icon">
              <svg viewBox="0 0 48 48" width="32" height="32" fill="none"><rect width="48" height="48" rx="8" fill="#1E293B"/><path d="M24 8L8 36h32L24 8z" fill="url(#antigravity-start-grad)"/><defs><linearGradient id="antigravity-start-grad" x1="24" y1="8" x2="24" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#38BDF8"/><stop offset="1" stop-color="#3B82F6"/></linearGradient></defs></svg>
            </div>
            <span class="start-pinned-label">Antigravity</span>
          </div>
          <div class="start-pinned-item" onclick="toggleWindow('win-terminal')">
            <div class="start-pinned-icon arduino-icon">
              <svg viewBox="0 0 48 48" width="32" height="32" fill="none"><rect width="48" height="48" rx="8" fill="#008184"/><path d="M14 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" stroke="#FFF" stroke-width="3"/><path d="M26 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" stroke="#FFF" stroke-width="3"/><path d="M18 24h8m6 0h8" stroke="#FFF" stroke-width="3" stroke-linecap="round"/></svg>
            </div>
            <span class="start-pinned-label">Arduino IDE</span>
          </div>
          <div class="start-pinned-item" onclick="toggleWindow('win-jarvis')">
            <div class="start-pinned-icon claude-icon">
              <svg viewBox="0 0 48 48" width="32" height="32" fill="none"><rect width="48" height="48" rx="8" fill="#D97706"/><circle cx="24" cy="24" r="10" fill="#FEF3C7"/><path d="M20 20l4 8 4-8" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <span class="start-pinned-label">Claude</span>
          </div>
        </div>

        <!-- Recommended Section -->
        <div class="start-section-header">
          <span>Recommended</span>
          <a class="start-header-link" onclick="jarvisSpeak('Showing all activities, sir.')">Show all ></a>
        </div>
        <div class="start-rec-grid">
          <div class="start-rec-item" onclick="jarvisSpeak('Opening Autodesk Fusion logs.')">
            <div class="start-rec-icon fusion">F</div>
            <div class="start-rec-details">
              <div class="start-rec-title">Autodesk Fusion</div>
              <div class="start-rec-subtitle">Recently added</div>
            </div>
          </div>
          <div class="start-rec-item" onclick="jarvisSpeak('NodeJS environment active.')">
            <div class="start-rec-icon node">JS</div>
            <div class="start-rec-details">
              <div class="start-rec-title">Node.js</div>
              <div class="start-rec-subtitle">Recently added</div>
            </div>
          </div>
          <div class="start-rec-item" onclick="toggleWindow('win-terminal')">
            <div class="start-rec-icon cmd">C:\\</div>
            <div class="start-rec-details">
              <div class="start-rec-title">Node.js command prompt</div>
              <div class="start-rec-subtitle">Recently added</div>
            </div>
          </div>
          <div class="start-rec-item" onclick="jarvisSpeak('Opening Devlog five.')">
            <div class="start-rec-icon file">📄</div>
            <div class="start-rec-details">
              <div class="start-rec-title">dev5</div>
              <div class="start-rec-subtitle">23m ago</div>
            </div>
          </div>
          <div class="start-rec-item" onclick="toggleWindow('win-browser')">
            <div class="start-rec-icon file">📄</div>
            <div class="start-rec-details">
              <div class="start-rec-title">NASA-APOD-2026-07-24</div>
              <div class="start-rec-subtitle">23m ago</div>
            </div>
          </div>
          <div class="start-rec-item" onclick="toggleWindow('win-gallery')">
            <div class="start-rec-icon img">🖼️</div>
            <div class="start-rec-details">
              <div class="start-rec-title">Screenshot 2026-07-25 122235</div>
              <div class="start-rec-subtitle">57m ago</div>
            </div>
          </div>
        </div>

        <!-- Scrollable All Apps section (Alphabetical) -->
        <div class="start-section-header">
          <span>All</span>
          <span class="start-header-link">View: List</span>
        </div>
        <div class="start-all-list custom-scroll">
          <div class="start-all-letter">A</div>
          <div class="start-all-item" onclick="jarvisSpeak('Accessibility features.')"><span class="start-all-icon">📂</span>Accessibility</div>
          <div class="start-all-item" onclick="toggleWindow('win-jarvis')"><span class="start-all-icon">🪐</span>Antigravity</div>
          <div class="start-all-item" onclick="toggleWindow('win-jarvis')"><span class="start-all-icon">💻</span>Antigravity IDE <span class="tag-new">New</span></div>
          <div class="start-all-item" onclick="toggleWindow('win-terminal')"><span class="start-all-icon">♾️</span>Arduino IDE</div>
          <div class="start-all-item" onclick="jarvisSpeak('Opening Autodesk Fusion.')"><span class="start-all-icon">🏗️</span>Autodesk Fusion</div>
          
          <div class="start-all-letter">B</div>
          <div class="start-all-item" onclick="jarvisSpeak('Opening B and O Audio Control.')"><span class="start-all-icon">🔊</span>B&O Audio Control <span class="tag-new">New</span></div>
        </div>

        <!-- Footer -->
        <div class="start-footer-bar">
          <div class="start-footer-user" onclick="jarvisSpeak('User profile: shivar07, administrator.')">
            <img src="image/me.png" alt="shivar07" class="start-footer-avatar">
            <span class="start-footer-username">shivar07</span>
          </div>
          <div class="start-footer-actions">
            <svg class="start-footer-btn" viewBox="0 0 24 24" width="16" height="16" onclick="toggleWindow('win-gallery')"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            <svg class="start-footer-btn" viewBox="0 0 24 24" width="16" height="16" onclick="jarvisSpeak('Opening downloads.')"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
            <svg class="start-footer-btn" viewBox="0 0 24 24" width="16" height="16" onclick="toggleWindow('win-music')"><path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6V3h-6z"/></svg>
            <svg class="start-footer-btn" viewBox="0 0 24 24" width="16" height="16" onclick="toggleWindow('win-gallery')"><path fill="currentColor" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            <svg class="start-footer-btn" viewBox="0 0 24 24" width="16" height="16" onclick="jarvisSpeak('Initializing optics camera hardware, sir.')"><circle cx="12" cy="12" r="3.2" fill="currentColor"/><path fill="currentColor" d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
            <svg class="start-footer-btn" viewBox="0 0 24 24" width="16" height="16" onclick="toggleWindow('win-gallery')"><path fill="currentColor" d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
            <svg class="start-footer-btn" viewBox="0 0 24 24" width="16" height="16" onclick="toggleWindow('win-settings')"><path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3-1.57-3-3.5s1.57-3 3-3 3 1.57 3 3-1.57 3-3 3z"/></svg>
            <svg class="start-footer-btn power" viewBox="0 0 24 24" width="16" height="16" onclick="window.location.reload()"><path fill="currentColor" d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7a6.92 6.92 0 0 1 2.59-5.41L6.17 5.17A8.93 8.93 0 0 0 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9a8.93 8.93 0 0 0-3.17-6.83z"/></svg>
          </div>
        </div>
      </div>

      <!-- Right Pane (Mobile Linkage) -->
      <div class="start-side-pane" id="start-side-pane">
        <div class="start-side-graphic">
          <svg viewBox="0 0 120 100" width="80" height="80">
            <!-- Laptop screen mock -->
            <rect x="10" y="20" width="70" height="45" rx="3" fill="#D1D5DB" />
            <rect x="14" y="24" width="62" height="37" fill="#F43F5E" />
            <!-- Laptop base mock -->
            <polygon points="5,65 85,65 80,72 10,72" fill="#9CA3AF" />
            <!-- Small widget shapes on laptop -->
            <circle cx="25" cy="42" r="3" fill="#FFF" />
            <circle cx="35" cy="42" r="3" fill="#FFF" />
            <circle cx="45" cy="42" r="3" fill="#FFF" />
            <!-- Phone overlay -->
            <rect x="75" y="10" width="30" height="60" rx="4" fill="#312E81" />
            <rect x="78" y="14" width="24" height="52" rx="2" fill="#1E1B4B" />
            <rect x="80" y="18" width="20" height="12" rx="1.5" fill="#3B82F6" />
          </svg>
        </div>
        <div class="start-side-title">Access your mobile device here</div>
        <div class="start-side-desc">Keep up with calls, messages, and recent activity here in the Start menu.</div>
        <div class="start-side-actions">
          <span class="start-side-action-label">Select device</span>
          <div class="start-side-buttons">
            <button class="start-side-btn active" onclick="jarvisSpeak('Android linkage selected, sir.')">Android™</button>
            <button class="start-side-btn" onclick="jarvisSpeak('iPhone linkage selected, sir.')">iPhone®</button>
          </div>
        </div>
        <div class="start-side-hide" onclick="toggleStartSidePane()">Hide this pane</div>
      </div>
    </div>
`;
