window.secureComponents = window.secureComponents || {};
window.secureComponents.win_terminal = `
    <div class="window" id="win-terminal" style="width: 600px; height: 380px; top: 25%; left: 30%;">
      <div class="window-header" id="win-terminalheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          RoboTerminal Interface
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-terminal')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-terminal')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-terminal')"></div>
        </div>
      </div>
      <div class="window-content custom-scroll" onclick="focusTerminalInput()">
        <div class="terminal-container">
          <div class="terminal-history" id="term-history">
            <div class="terminal-line" style="color: var(--primary);">RoboOS Diagnostics System v1.0.0</div>
            <div class="terminal-line">Type <span style="color: var(--primary); font-weight: bold;">help</span> to
              inspect command registry.</div>
            <div class="terminal-line">&nbsp;</div>
          </div>
          <div class="terminal-prompt-row">
            <span class="terminal-prompt-tag">user@robo-pc:~$</span>
            <input type="text" id="term-input" class="terminal-input" autocomplete="off" spellcheck="false">
          </div>
        </div>
      </div>
    </div>
`;
