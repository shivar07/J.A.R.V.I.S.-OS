window.secureComponents = window.secureComponents || {};
window.secureComponents.win_jarvis = `
    <div class="window" id="win-jarvis" style="width: 480px; height: 480px; top: 8%; left: 32%;">
      <div class="window-header" id="win-jarvisheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="22"></line>
          </svg>
          J.A.R.V.I.S. Subsystem
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-jarvis')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-jarvis')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-jarvis')"></div>
        </div>
      </div>
      <div class="window-content custom-scroll"
        style="background: rgba(3, 7, 18, 0.94); display: flex; flex-direction: column;">
        <div class="jarvis-app"
          style="padding: 16px; display: flex; flex-direction: column; height: 100%; justify-content: space-between;">

          <div class="jarvis-core-container"
            style="display: flex; justify-content: center; align-items: center; height: 140px; position: relative; margin-bottom: 12px;">
            <div class="jarvis-pulse-ring"></div>
            <div class="jarvis-pulse-ring2"></div>
            <div class="jarvis-core-sphere" id="jarvis-core"></div>
          </div>

          <div class="jarvis-dialogue custom-scroll" id="jarvis-dialogue"
            style="flex-grow: 1; border: 1px solid var(--border-dim); border-radius: 6px; padding: 12px; background: rgba(0,0,0,0.4); margin-bottom: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-mono); font-size: 13px; max-height: 200px;">
            <div class="jarvis-bubble jarvis-ai" style="color: var(--primary);">[JARVIS v2.4] Co-pilot systems online.
              Ready to coordinate mission operations. Click the mic button to speak, or input commands below.</div>
          </div>

          <div class="jarvis-input-area" style="display: flex; gap: 8px; align-items: center;">
            <button class="jarvis-voice-btn" id="jarvis-voice-btn" title="Speak to Jarvis"
              style="width: 44px; height: 38px; border-radius: 4px; border: 1px solid var(--border-dim); background: rgba(var(--primary-rgb), 0.1); color: var(--primary); cursor: pointer; display: flex; justify-content: center; align-items: center; transition: var(--transition-fast);">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </button>
            <input type="text" class="jarvis-input" id="jarvis-text-input" placeholder="Awaiting verbal protocol..."
              autocomplete="off"
              style="flex-grow: 1; height: 38px; border: 1px solid var(--border-dim); border-radius: 4px; background: rgba(255, 255, 255, 0.02); color: var(--text-main); font-family: var(--font-mono); padding: 0 12px; outline: none;">
            <button class="task-add-btn" id="jarvis-send-btn" style="height: 38px;">SEND</button>
          </div>

          <div
            style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-family: var(--font-ui);">
            <label
              style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-dim); cursor: pointer;">
              <input type="checkbox" id="jarvis-voice-toggle" checked
                style="width: 14px; height: 14px; cursor: pointer;">
              Voice Synthesis Engine (TTS)
            </label>
            <span style="font-size: 11px; color: var(--primary); font-family: var(--font-hud);"
              id="voice-indicator">STT: Standby</span>
          </div>
        </div>
      </div>
    </div>
`;
