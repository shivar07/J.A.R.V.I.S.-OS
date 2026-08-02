window.secureComponents = window.secureComponents || {};
window.secureComponents.screens = `
  <div id="boot-screen" class="boot-screen">
    <div class="win-boot-logo">
      <div class="win-logo-square"></div>
      <div class="win-logo-square"></div>
      <div class="win-logo-square"></div>
      <div class="win-logo-square"></div>
    </div>
    <div class="win-loader">
      <div class="win-loader-dot"></div>
      <div class="win-loader-dot"></div>
      <div class="win-loader-dot"></div>
      <div class="win-loader-dot"></div>
      <div class="win-loader-dot"></div>
    </div>

    <div id="boot-status-text" style="display: none;"></div>
    <div id="boot-progress" style="display: none; width: 0%;"></div>
  </div>

  <!-- Stark BIOS Boot Screen -->
  <div id="bios-boot-screen" class="bios-boot-screen" style="display: none;">
    <div class="linux-console" id="linux-console"></div>
  </div>

  <div id="login-screen" class="login-screen" style="display: none;">
    <div class="login-box">
      <div class="login-avatar-container">
        <img src="image/me.png" alt="Robotics Engineer" class="login-avatar">
      </div>
      <div class="login-username" style="font-size: 16px; margin-bottom: 24px; text-transform: uppercase;">Robotics
        Engineer & Maker</div>
      <button class="login-btn" id="login-signin-btn">
        SIGN IN
      </button>
    </div>
  </div>

  <div id="lightbox-modal" class="lightbox-modal" style="display: none;" onclick="closeLightbox()">
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-content" id="lightbox-img">
    <div id="lightbox-caption"></div>
  </div>

  <div id="video-playback-modal" class="lightbox-modal" style="display: none;">
    <span class="lightbox-close" onclick="closeVideoModal()">&times;</span>
    <div class="video-modal-content">
      <video id="gallery-local-player" controls autoplay
        style="width: 100%; border-radius: 8px; border: 1px solid var(--border-glow); box-shadow: 0 0 25px rgba(0,0,0,0.8);"></video>
      <div id="video-modal-title"
        style="margin-top: 12px; text-align: center; font-family: var(--font-ui); font-size: 15px; color: var(--text-main); text-shadow: 0 0 5px var(--primary);">
      </div>
    </div>
  </div>

  <!-- J.A.R.V.I.S. Prompt Overlay -->
  <div id="jarvis-music-prompt" class="jarvis-prompt-overlay" style="display: none;">
    <div class="jarvis-prompt-box">
      <div class="jarvis-prompt-header">
        <span class="jarvis-prompt-logo">🌀</span>
        <span class="jarvis-prompt-title">J.A.R.V.I.S. INTERFACE</span>
      </div>
      <div class="jarvis-prompt-body">
        <p>Would you like to play some music, sir?</p>
      </div>
      <div class="jarvis-prompt-actions">
        <button id="jarvis-prompt-yes" class="jarvis-prompt-btn yes">YES, PLAY MUSIC</button>
        <button id="jarvis-prompt-no" class="jarvis-prompt-btn no">NO, STAY SILENT</button>
      </div>
    </div>
  </div>
`;
