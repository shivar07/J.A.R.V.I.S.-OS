window.secureComponents = window.secureComponents || {};
window.secureComponents.win_calculator = `
    <div class="window" id="win-calculator" style="width: 320px; height: 460px; top: 15%; left: 35%; display: none;">
      <div class="window-header" id="win-calculatorheader">
        <div class="window-title">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="9" y1="22" x2="9" y2="18" />
            <line x1="15" y1="22" x2="15" y2="18" />
            <line x1="9" y1="18" x2="15" y2="18" />
            <rect x="7" y="5" width="10" height="4" />
          </svg>
          Stark Mathematical Engine
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-calculator')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-calculator')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-calculator')"></div>
        </div>
      </div>
      <div class="window-content" style="background: rgba(8, 12, 24, 0.98); padding: 16px; display: flex; flex-direction: column; gap: 12px; box-sizing: border-box;">
        <!-- Calculator Screen -->
        <div class="calculator-screen">
          <div class="calculator-formula" id="calc-formula"></div>
          <div class="calculator-display" id="calc-display">0</div>
        </div>
        <!-- Calculator Keypad Grid -->
        <div class="calculator-grid">
          <button class="calc-btn op" data-val="C">C</button>
          <button class="calc-btn op" data-val="CE">CE</button>
          <button class="calc-btn op" data-val="backspace">⌫</button>
          <button class="calc-btn op" data-val="/">÷</button>

          <button class="calc-btn num" data-val="7">7</button>
          <button class="calc-btn num" data-val="8">8</button>
          <button class="calc-btn num" data-val="9">9</button>
          <button class="calc-btn op" data-val="*">×</button>

          <button class="calc-btn num" data-val="4">4</button>
          <button class="calc-btn num" data-val="5">5</button>
          <button class="calc-btn num" data-val="6">6</button>
          <button class="calc-btn op" data-val="-">-</button>

          <button class="calc-btn num" data-val="1">1</button>
          <button class="calc-btn num" data-val="2">2</button>
          <button class="calc-btn num" data-val="3">3</button>
          <button class="calc-btn op" data-val="+">+</button>

          <button class="calc-btn op" data-val="negate">±</button>
          <button class="calc-btn num" data-val="0">0</button>
          <button class="calc-btn num" data-val=".">.</button>
          <button class="calc-btn equals" data-val="=">=</button>
        </div>
      </div>
    </div>
`;
