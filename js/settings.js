function initSettings() {
  const themeBtns = document.querySelectorAll(".theme-btn");
  const wallCards = document.querySelectorAll(".wallpaper-card");
  const bgEl = document.getElementById("desktop-bg");

  const currentTheme = document.body.getAttribute("data-theme") || "cyan";
  themeBtns.forEach(btn => {
    if (btn.getAttribute("data-select") === currentTheme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const currentWall = localStorage.getItem("system-wallpaper") || "ironman";
  wallCards.forEach(card => {
    if (card.getAttribute("data-bg") === currentWall) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  themeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      themeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const selection = btn.getAttribute("data-select");
      document.body.setAttribute("data-theme", selection);
      localStorage.setItem("system-theme", selection);
      synthSound("success");
    });
  });

  wallCards.forEach(card => {
    card.addEventListener("click", () => {
      wallCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      synthSound("click");
      
      const bgType = card.getAttribute("data-bg");
      localStorage.setItem("system-wallpaper", bgType);
      
      if (bgType === "gradient") {
        bgEl.style.backgroundImage = "linear-gradient(135deg, #020713 0%, #071530 100%)";
      } else if (bgType === "glowing") {
        bgEl.style.backgroundImage = "radial-gradient(circle, #0e1b30 0%, #040812 100%)";
      } else if (bgType === "cyberspace") {
        bgEl.style.backgroundImage = "radial-gradient(circle, #001220 0%, #000407 100%)";
      } else if (bgType === "roboart") {
        let roboArtPath = localStorage.getItem("robo-art-wallpaper") || "assets/robo_wallpaper.png";
        if (roboArtPath.includes(":\\") || roboArtPath.includes(":/") || roboArtPath.startsWith("file:")) {
          roboArtPath = "assets/robo_wallpaper.png";
        }
        bgEl.style.backgroundImage = `url('${roboArtPath}')`;
      } else if (bgType === "ironman") {
        bgEl.style.backgroundImage = "url('wallpaper/wp11991604-neon-4k-iron-man-wallpapers.jpg')";
      }
    });
  });

  const customWallUrlBtn = document.getElementById("custom-wall-url-btn");
  const customWallUrlInput = document.getElementById("custom-wall-url");
  if (customWallUrlBtn && customWallUrlInput) {
    customWallUrlBtn.addEventListener("click", () => {
      const url = customWallUrlInput.value.trim();
      if (url) {
        wallCards.forEach(c => c.classList.remove("active"));
        localStorage.setItem("system-wallpaper", "custom-url");
        localStorage.setItem("custom-wallpaper-url", url);
        bgEl.style.backgroundImage = `url('${url}')`;
        synthSound("success");
      }
    });
  }

  const customWallFileInput = document.getElementById("custom-wall-file");
  if (customWallFileInput) {
    customWallFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64 = event.target.result;
          wallCards.forEach(c => c.classList.remove("active"));
          localStorage.setItem("system-wallpaper", "custom-file");
          localStorage.setItem("custom-wallpaper-data", base64);
          bgEl.style.backgroundImage = `url('${base64}')`;
          synthSound("success");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const crtCheckbox = document.getElementById("crt-toggle");
  const scanlinesEl = document.getElementById("scanlines-layer");
  crtCheckbox.addEventListener("change", () => {
    synthSound("click");
    if (crtCheckbox.checked) {
      scanlinesEl.classList.add("crt-glow");
      scanlinesEl.style.display = "block";
    } else {
      scanlinesEl.classList.remove("crt-glow");
      scanlinesEl.style.display = "none";
    }
  });
}
