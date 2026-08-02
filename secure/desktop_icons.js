window.secureComponents = window.secureComponents || {};
window.secureComponents.desktopIcons = `
      <div class="hud-brand-header">
        <div class="hud-brand-logo">J.A.R.V.I.S. CORE</div>
        <div class="hud-brand-sub">SYSTEM LEVEL 01</div>
      </div>

      <!-- 1. Chrome -->
      <div class="desktop-icon" onclick="toggleWindow('win-browser')">
        <div class="icon-wrapper chrome-icon">
          <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="#4285F4" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
            <path fill="#EA4335" d="M12 2a9.985 9.985 0 0 1 8.66 5H12v7l-6.06-10.5C7.45 2.5 9.66 2 12 2z" />
            <path fill="#FBBC05" d="M22 12a9.985 9.985 0 0 1-5 8.66L11 10.15h11z" />
            <path fill="#34A853" d="M12 22a9.985 9.985 0 0 1-8.66-5L9.4 6.5l2.6 15.5z" />
            <circle cx="12" cy="12" r="4" fill="#fff" />
            <circle cx="12" cy="12" r="3.2" fill="#4285F4" />
          </svg>
        </div>
        <div class="icon-label">Chrome</div>
      </div>

      <!-- 2. Gallery Hub -->
      <div class="desktop-icon" onclick="toggleWindow('win-gallery')">
        <div class="icon-wrapper gallery-icon">
          <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 10a3 3 0 0 1 3-3h11.172a3 3 0 0 1 2.121.879l3.414 3.414a3 3 0 0 0 2.121.879H41a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V10z" fill="url(#folder-back)" />
            <path d="M4 18h40v20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V18z" fill="url(#folder-front)" />
            <path d="M10 12h28v10H10z" fill="#FFF" opacity="0.8" rx="1" />
            <path d="M14 18l5-4 6 5 8-7 4 4v1H14v-4z" fill="url(#folder-picture)" />
            <defs>
              <linearGradient id="folder-back" x1="24" y1="7" x2="24" y2="41" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFE082" />
                <stop offset="1" stop-color="#FFB300" />
              </linearGradient>
              <linearGradient id="folder-front" x1="24" y1="18" x2="24" y2="41" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFCA28" />
                <stop offset="1" stop-color="#FFA000" />
              </linearGradient>
              <linearGradient id="folder-picture" x1="24" y1="12" x2="24" y2="22" gradientUnits="userSpaceOnUse">
                <stop stop-color="#29B6F6" />
                <stop offset="1" stop-color="#0288D1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="icon-label">Gallery Hub</div>
      </div>

      <!-- 3. Coding Time -->
      <div class="desktop-icon" onclick="openHackatimeWorkspace()">
        <div class="icon-wrapper hackatime-main-icon">
          <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="36" height="36" rx="8" fill="url(#hack-main-bg)" />
            <!-- Glowing code block mock -->
            <path d="M14 20l6 6-6 6M20 28h14" stroke="#D7FF6A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="36" cy="12" r="3" fill="#D7FF6A" />
            <defs>
              <linearGradient id="hack-main-bg" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0F172A" />
                <stop offset="1" stop-color="#1E293B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="icon-label">Coding Time</div>
      </div>

      <!-- 3b. Leaderboards -->
      <div class="desktop-icon" onclick="toggleWindow('win-hackatime-leaderboard')">
        <div class="icon-wrapper leaderboard-main-icon">
          <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="36" height="36" rx="8" fill="url(#leaderboard-main-bg)" />
            <!-- Trophy path adjusted to 48x48 scale -->
            <path d="M16 18h-2a4 4 0 0 0 0-8h2M32 18h2a4 4 0 0 0 0-8h-2M12 40h24M20 28v4c0 .8-.6 1.4-1.4 1.4H12v4h24v-4h-6.6c-.8 0-1.4-.6-1.4-1.4v-4M24 6a8 8 0 0 1 8 8v10c0 4.4-3.6 8-8 8s-8-3.6-8-8V14a8 8 0 0 1 8-8z" stroke="#ff2f8e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
              <linearGradient id="leaderboard-main-bg" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0F172A" />
                <stop offset="1" stop-color="#1E293B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="icon-label">Leaderboards</div>
      </div>

      <!-- 4. Weather HUD -->
      <div class="desktop-icon" onclick="toggleWindow('win-weather')">
        <div class="icon-wrapper weather-icon">
          <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="18" r="10" fill="url(#sun-gradient)" />
            <path d="M30 4v4M30 28v4M16 18h4M40 18h4M20.1 8.1l2.8 2.8M37.1 25.1l2.8 2.8M20.1 27.9l2.8-2.8M37.1 10.9l2.8-2.8" stroke="#FFA000" stroke-width="2.5" stroke-linecap="round" />
            <path d="M14 38a8 8 0 0 1-2.5-15.6 11 11 0 0 1 21-3.4 9 9 0 0 1 8.5 10A9 9 0 0 1 32 38H14z" fill="url(#cloud-gradient)" filter="url(#cloud-shadow)" />
            <defs>
              <linearGradient id="sun-gradient" x1="30" y1="8" x2="30" y2="28" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFD54F" />
                <stop offset="1" stop-color="#FF8F00" />
              </linearGradient>
              <linearGradient id="cloud-gradient" x1="22" y1="16" x2="22" y2="38" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFFFF" />
                <stop offset="1" stop-color="#B0BEC5" />
              </linearGradient>
              <filter id="cloud-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.3" />
              </filter>
            </defs>
          </svg>
        </div>
        <div class="icon-label">Weather HUD</div>
      </div>

      <!-- 5. Settings -->
      <div class="desktop-icon" onclick="toggleWindow('win-settings')">
        <div class="icon-wrapper settings-icon">
          <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 14c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm-6 10c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" fill="url(#gear-center)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.242 4.298a3 3 0 0 0-4.484 0l-.823.896a2 2 0 0 1-2.483.473l-1.077-.577a3 3 0 0 0-4.041 1.674l-.443 1.14a2 2 0 0 1-2.008 1.25l-1.218-.088a3 3 0 0 0-3.155 2.766l-.117 1.219a2 2 0 0 1-1.25 1.74l-1.14.443a3 3 0 0 0-1.674 4.041l.577 1.077a2 2 0 0 1-.473 2.483l-.896.823a3 3 0 0 0 0 4.484l.896.823a2 2 0 0 1.473 2.483l-.577 1.077a3 3 0 0 0 1.674 4.041l1.14.443a2 2 0 0 1 1.25 1.74l.117 1.219a3 3 0 0 0 3.155 2.766l1.218-.088a2 2 0 0 1 2.008 1.25l.443 1.14a3 3 0 0 0 4.041 1.674l1.077-.577a2 2 0 0 1 2.483-.473l.823.896a3 3 0 0 0 4.484 0l.823-.896a2 2 0 0 1 2.483-.473l1.077.577a3 3 0 0 0 4.041-1.674l.443-1.14a2 2 0 0 1 2.008-1.25l1.218.088a3 3 0 0 0 3.155-2.766l.117-1.219a2 2 0 0 1 1.25-1.74l1.14-.443a3 3 0 0 0 1.674-4.041l-.577-1.077a2 2 0 0 1 .473-2.483l.896-.823a3 3 0 0 0 0-4.484l-.896-.823a2 2 0 0 1-.473-2.483l.577-1.077a3 3 0 0 0-1.674-4.041l-1.14-.443a2 2 0 0 1-1.25-1.74l-.117-1.219a3 3 0 0 0-3.155-2.766l-1.218.088a2 2 0 0 1-2.008-1.25l-.443-1.14a3 3 0 0 0-4.041-1.674l-1.077.577a2 2 0 0 1-2.483-.473l-.823-.896z" fill="url(#gear-body)" />
            <defs>
              <linearGradient id="gear-body" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
                <stop stop-color="#90CAF9" />
                <stop offset="1" stop-color="#1E88E5" />
              </linearGradient>
              <linearGradient id="gear-center" x1="24" y1="14" x2="24" y2="34" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E3F2FD" />
                <stop offset="1" stop-color="#90CAF9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="icon-label">Settings</div>
      </div>

      <!-- 6. Socials Hub -->
      <div class="desktop-icon" onclick="toggleWindow('win-socials')">
        <div class="icon-wrapper socials-icon">
          <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="16" r="8" fill="url(#people-head-1)" />
            <path d="M10 38c0-7.732 6.268-14 14-14s14 6.268 14 14H10z" fill="url(#people-body-1)" />
            <circle cx="14" cy="20" r="6" fill="url(#people-head-2)" opacity="0.8" />
            <path d="M4 36c0-6 4-10 10-10s10 4 10 10H4z" fill="url(#people-body-2)" opacity="0.8" />
            <defs>
              <linearGradient id="people-head-1" x1="24" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stop-color="#42A5F5" />
                <stop offset="1" stop-color="#1565C0" />
              </linearGradient>
              <linearGradient id="people-body-1" x1="24" y1="24" x2="24" y2="38" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1E88E5" />
                <stop offset="1" stop-color="#0D47A1" />
              </linearGradient>
              <linearGradient id="people-head-2" x1="14" y1="14" x2="14" y2="26" gradientUnits="userSpaceOnUse">
                <stop stop-color="#90CAF9" />
                <stop offset="1" stop-color="#42A5F5" />
              </linearGradient>
              <linearGradient id="people-body-2" x1="14" y1="26" x2="14" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#42A5F5" />
                <stop offset="1" stop-color="#1565C0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="icon-label">Socials Hub</div>
      </div>

      <!-- 7. Terminal -->
      <div class="desktop-icon" onclick="toggleWindow('win-terminal')">
        <div class="icon-wrapper terminal-icon">
          <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 41H6a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h36a3 3 0 0 1 3 3v28a3 3 0 0 1-3 3z" fill="url(#term-bg)" />
            <path d="M3 13.5h42V10a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3.5z" fill="url(#term-header)" />
            <circle cx="7" cy="10" r="1.5" fill="#FF5F56" />
            <circle cx="12" cy="10" r="1.5" fill="#FFBD2E" />
            <circle cx="17" cy="10" r="1.5" fill="#27C93F" />
            <path d="M12 20L18 25L12 30" stroke="#4FD8E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="20" y1="30" x2="32" y2="30" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
            <defs>
              <linearGradient id="term-bg" x1="24" y1="7" x2="24" y2="41" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1E1E24" />
                <stop offset="1" stop-color="#0F0F12" />
              </linearGradient>
              <linearGradient id="term-header" x1="24" y1="7" x2="24" y2="13.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2D2D37" />
                <stop offset="1" stop-color="#202029" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="icon-label">Terminal</div>
      </div>

      <!-- 8. Calculator -->
      <div class="desktop-icon" onclick="toggleWindow('win-calculator')">
        <div class="icon-wrapper calculator-icon">
          <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="36" height="36" rx="4" fill="url(#calc-bg)" />
            <!-- Screen area -->
            <rect x="10" y="10" width="28" height="8" rx="1.5" fill="#1C1F2E" />
            <!-- Keypad grid indicators -->
            <circle cx="14" cy="24" r="2" fill="#4FD8E8" />
            <circle cx="24" cy="24" r="2" fill="#E2E8F0" />
            <circle cx="34" cy="24" r="2" fill="#E2E8F0" />
            <circle cx="14" cy="30" r="2" fill="#E2E8F0" />
            <circle cx="24" cy="30" r="2" fill="#E2E8F0" />
            <circle cx="34" cy="30" r="2" fill="#E2E8F0" />
            <circle cx="14" cy="36" r="2" fill="#E2E8F0" />
            <circle cx="24" cy="36" r="2" fill="#E2E8F0" />
            <!-- Action keys -->
            <rect x="31" y="33" width="6" height="5" rx="1" fill="#FF2F8E" />
            <defs>
              <linearGradient id="calc-bg" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4285F4" />
                <stop offset="1" stop-color="#1565C0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="icon-label">Calculator</div>
      </div>

      <!-- 9. J.A.R.V.I.S. -->
      <div class="desktop-icon" onclick="toggleWindow('win-jarvis')">
        <div class="icon-wrapper jarvis-icon">
          <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C12 14 18 8 24 8s12 6 12 16-6 16-12 16-12-6-12-16z" fill="url(#copilot-grad-1)" />
            <path d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12c4 0 8-3 8-7s-4-7-8-7-8-3-8-7 4-7 8-7z" fill="url(#copilot-grad-2)" opacity="0.85" />
            <defs>
              <linearGradient id="copilot-grad-1" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse">
                <stop stop-color="#00FFC4" />
                <stop offset="0.5" stop-color="#00A2FF" />
                <stop offset="1" stop-color="#7F00FF" />
              </linearGradient>
              <linearGradient id="copilot-grad-2" x1="24" y1="12" x2="24" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF007F" />
                <stop offset="1" stop-color="#7F00FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="icon-label">J.A.R.V.I.S.</div>
      </div>
`;
