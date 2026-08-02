window.secureComponents = window.secureComponents || {};
window.secureComponents.win_browser = `
    <div class="window" id="win-browser" style="width: 800px; height: 530px; top: 12%; left: 20%; display: none;">
      <div class="window-header" id="win-browserheader">
        <div class="window-title">
          <svg viewBox="0 0 24 24" width="14" height="14" style="margin-right: 4px;">
            <path fill="#4285F4" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
            <path fill="#EA4335" d="M12 2a9.985 9.985 0 0 1 8.66 5H12v7l-6.06-10.5C7.45 2.5 9.66 2 12 2z" />
            <path fill="#FBBC05" d="M22 12a9.985 9.985 0 0 1-5 8.66L11 10.15h11z" />
            <path fill="#34A853" d="M12 22a9.985 9.985 0 0 1-8.66-5L9.4 6.5l2.6 15.5z" />
            <circle cx="12" cy="12" r="4" fill="#fff" />
            <circle cx="12" cy="12" r="3.2" fill="#4285F4" />
          </svg>
          Chrome Browser
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-browser')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-browser')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-browser')"></div>
        </div>
      </div>
      <div class="window-content" style="background: #181a1f; display: flex; flex-direction: column; height: calc(100% - 30px); overflow: hidden; padding: 0;">
        
        <!-- Tab Bar Row -->
        <div class="chrome-tabbar" style="display: flex; align-items: flex-end; background: #0f1115; padding: 6px 12px 0 12px; gap: 4px; border-bottom: 1px solid #2d3139; flex-shrink: 0; height: 34px; box-sizing: border-box;">
          <div id="chrome-tabs-list" style="display: flex; gap: 4px; overflow-x: auto; max-width: calc(100% - 40px); height: 28px;">
            <!-- Dynamic Tabs go here -->
          </div>
          <button id="chrome-new-tab-btn" style="background: none; border: none; color: #a5adba; cursor: pointer; width: 26px; height: 26px; display: flex; justify-content: center; align-items: center; border-radius: 4px; margin-bottom: 2px; font-size: 16px; font-weight: bold; transition: background 0.15s;">+</button>
        </div>

        <!-- Navigation & Address Bar Row -->
        <div class="chrome-navbar" style="display: flex; align-items: center; background: #20242c; padding: 6px 12px; gap: 10px; border-bottom: 1px solid #2d3139; flex-shrink: 0; height: 38px; box-sizing: border-box;">
          <div style="display: flex; gap: 6px; flex-shrink: 0;">
            <button id="chrome-back-btn" class="chrome-nav-btn" style="background: none; border: none; color: #a5adba; cursor: pointer; width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; border-radius: 50%; font-size: 14px; transition: background 0.15s;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
            <button id="chrome-forward-btn" class="chrome-nav-btn" style="background: none; border: none; color: #a5adba; cursor: pointer; width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; border-radius: 50%; font-size: 14px; transition: background 0.15s;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
            <button id="chrome-reload-btn" class="chrome-nav-btn" style="background: none; border: none; color: #a5adba; cursor: pointer; width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; border-radius: 50%; font-size: 14px; transition: background 0.15s;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg></button>
            <button id="chrome-home-btn" class="chrome-nav-btn" style="background: none; border: none; color: #a5adba; cursor: pointer; width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; border-radius: 50%; font-size: 14px; transition: background 0.15s;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></button>
          </div>

          <!-- Address Input Bar -->
          <div style="display: flex; flex-grow: 1; align-items: center; background: #12141a; border-radius: 14px; padding: 2px 12px; border: 1px solid #3c4250; height: 26px; box-sizing: border-box;">
            <input type="text" id="chrome-address-input" style="flex-grow: 1; background: none; border: none; outline: none; color: #a5adba; font-family: var(--font-mono); font-size: 11px; height: 20px; cursor: default;" value="chrome://newtab" readonly placeholder="Select a verified shortcut below">
            <button id="chrome-go-btn" style="background: none; border: none; color: var(--primary); cursor: pointer; display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
          </div>

          <!-- External open button -->
          <button id="chrome-ext-btn" title="Open in physical browser tab" style="background: none; border: none; color: #a5adba; cursor: pointer; width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; border-radius: 4px; transition: background 0.15s;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></button>
        </div>

        <!-- Browser Frame Viewport Area -->
        <div id="chrome-viewports-container" style="flex-grow: 1; position: relative; min-height: 0; background: #0e1115;">
          <!-- Dynamic Iframes go here -->
        </div>

      </div>
    </div>
`;
