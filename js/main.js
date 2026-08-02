document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("system-theme") || "cyan";
  document.body.setAttribute("data-theme", savedTheme);

  const savedWall = localStorage.getItem("system-wallpaper") || "ironman";
  const startBgEl = document.getElementById("desktop-bg");
  if (startBgEl) {
    if (savedWall === "gradient") {
      startBgEl.style.backgroundImage = "linear-gradient(135deg, #020713 0%, #071530 100%)";
    } else if (savedWall === "glowing") {
      startBgEl.style.backgroundImage = "radial-gradient(circle, #0e1b30 0%, #040812 100%)";
    } else if (savedWall === "cyberspace") {
      startBgEl.style.backgroundImage = "radial-gradient(circle, #001220 0%, #000407 100%)";
    } else if (savedWall === "roboart") {
      let roboArtPath = localStorage.getItem("robo-art-wallpaper") || "assets/robo_wallpaper.png";
      if (roboArtPath.includes(":\\") || roboArtPath.includes(":/") || roboArtPath.startsWith("file:")) {
        roboArtPath = "assets/robo_wallpaper.png";
      }
      startBgEl.style.backgroundImage = `url('${roboArtPath}')`;
    } else if (savedWall === "ironman") {
      startBgEl.style.backgroundImage = "url('wallpaper/wp11991604-neon-4k-iron-man-wallpapers.jpg')";
    } else if (savedWall === "custom-url") {
      const url = localStorage.getItem("custom-wallpaper-url");
      if (url) startBgEl.style.backgroundImage = `url('${url}')`;
    } else if (savedWall === "custom-file") {
      const base64 = localStorage.getItem("custom-wallpaper-data");
      if (base64) startBgEl.style.backgroundImage = `url('${base64}')`;
    }
  }

  initClock();

  const windows = document.querySelectorAll(".window");
  windows.forEach(win => {
    makeDraggable(win);
    win.addEventListener("mousedown", () => {
      focusWindow(win);
    });
  });

  const startBtn = document.getElementById("win-start-btn");
  const startMenu = document.getElementById("start-menu");
  
  if (startBtn && startMenu) {
    startBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isShowing = startMenu.style.display === "flex";
      startMenu.style.display = isShowing ? "none" : "flex";
      synthSound("click");
    });

    document.addEventListener("click", () => {
      startMenu.style.display = "none";
    });
    
    startMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  document.body.addEventListener("click", () => {
    synthSound("startup");
  }, { once: true });

  initSettings();
  initYouTubeLab();
  initShowcase();
  initGallery();
  initHUDSystem();
  initWeather();
  initHackatime();
  initMusicPromptHandlers();
  initMusicPlayer();
  initBrowser();
  initFlyouts();
  
  initBootSequence();
});
