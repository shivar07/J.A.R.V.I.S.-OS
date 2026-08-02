const musicTracks = [
  { title: "Iron Man", desc: "AC/DC - Iron Man", file: "music/Iron_Man.m4a", img: "https://img.youtube.com/vi/wbjc55JqkGs/0.jpg" },
  { title: "Back In Black", desc: "AC/DC - Back In Black", file: "music/Back_In_Black.m4a", img: "https://img.youtube.com/vi/hbGpqY2cXa4/0.jpg" },
  { title: "Shoot To Thrill", desc: "AC/DC - Shoot To Thrill", file: "music/Shoot_to_Thrill.m4a", img: "https://img.youtube.com/vi/lbC0CCS06VE/0.jpg" },
  { title: "Driving With The Top Down", desc: "Ramin Djawadi - Iron Man OST", file: "music/Driving_With_The_Top_Down.m4a", img: "https://img.youtube.com/vi/lhg9bYNLvOg/0.jpg" },
  { title: "Shape of You", desc: "Ed Sheeran - Shape of You", file: "music/Shape_of_You.m4a", img: "https://img.youtube.com/vi/JGwWNGJdvx8/0.jpg" },
  { title: "One Dance (8D Audio)", desc: "Drake - One Dance", file: "music/One_Dance.m4a", img: "https://img.youtube.com/vi/r2U0_xJLuXQ/0.jpg" },
  { title: "Lose My Mind (F1)", desc: "Don Don Toliver - Lose My Mind", file: "music/Lose_My_Mind.m4a", img: "https://img.youtube.com/vi/WWEs82u37Mw/0.jpg" },
  { title: "Jalebi Baby Mashup", desc: "TikTok Remix Thailand", file: "music/Jalebi_Baby_Mashup.m4a", img: "https://img.youtube.com/vi/kM6T-ZvgfoI/0.jpg" },
  { title: "[Da Da Da] Jarico", desc: "Jarico - Remix", file: "music/Da_Da_Da_Jarico.m4a", img: "https://img.youtube.com/vi/3PY2j22d3Ds/0.jpg" },
  { title: "Your Woman Remix", desc: "White Town - Remix", file: "music/Your_Woman_Remix.m4a", img: "https://img.youtube.com/vi/FSmYI_CiWsw/0.jpg" },
  { title: "Boom Shaka", desc: "KR$NA x Dhanda Nyoliwala", file: "music/Boom_Shaka.m4a", img: "https://img.youtube.com/vi/cL0KKSPjZf8/0.jpg" },
  { title: "FUNK CRIMINAL", desc: "ICEDMANE - Slowed", file: "music/Funk_Criminal.m4a", img: "https://img.youtube.com/vi/AAUW-f3_oCg/0.jpg" },
  { title: "Kar Gayi Chull", desc: "Bhumika's Beatzzz - Slowed", file: "music/Kar_Gayi_Chull.m4a", img: "https://img.youtube.com/vi/Bea019pOw5w/0.jpg" },
  { title: "Dj Waley Babu", desc: "Badshah - Slowed", file: "music/Dj_Waley_Babu.m4a", img: "https://img.youtube.com/vi/k4r-Oh2IiAc/0.jpg" }
];

let currentTrackIndex = 0;
let isPlaying = false;

function triggerStartupWelcome() {
  toggleWindow('win-weather');

  setTimeout(() => {
    const tempVal = document.getElementById("weather-temp")?.textContent || "24.5 degrees";
    const cityVal = document.getElementById("weather-display-city")?.textContent || "Malibu";
    const conditionVal = document.getElementById("taskbar-weather-desc")?.textContent?.split('(')[1]?.replace(')', '') || "Clear";
    
    const welcomeText = `Welcome sir. The current temperature in ${cityVal} is ${tempVal}, with ${conditionVal} conditions. System telemetry is stable.`;
    
    if (typeof jarvisSpeak === "function") {
      jarvisSpeak(welcomeText, () => {
        showMusicPrompt();
      });
    } else {
      showMusicPrompt();
    }
  }, 1000);
}

function showMusicPrompt() {
  const promptOverlay = document.getElementById("jarvis-music-prompt");
  if (promptOverlay) {
    promptOverlay.style.display = "flex";
  }
}

function initMusicPromptHandlers() {
  const yesBtn = document.getElementById("jarvis-prompt-yes");
  const noBtn = document.getElementById("jarvis-prompt-no");
  const promptOverlay = document.getElementById("jarvis-music-prompt");

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      if (promptOverlay) promptOverlay.style.display = "none";
      if (typeof synthSound === "function") synthSound("success");
      
      openWindowAt("win-music", "40px", "calc(50% - 305px)", "610px", "350px");
      playFirstTrack();
      
      setTimeout(() => {
        openWindowAt("win-gallery", "40px", "calc(100% - 640px)", "620px", "82vh");
      }, 1000);
      
      setTimeout(() => {
        openWindowAt("win-jarvis", "40px", "20px", "480px", "480px");
      }, 2500);
    });
  }

  if (noBtn) {
    noBtn.addEventListener("click", () => {
      if (promptOverlay) promptOverlay.style.display = "none";
      if (typeof synthSound === "function") synthSound("click");
    });
  }
}

function initMusicPlayer() {
  const audio = document.getElementById("stark-audio-player");
  const playBtn = document.getElementById("music-play-btn");
  const prevBtn = document.getElementById("music-prev-btn");
  const nextBtn = document.getElementById("music-next-btn");
  const volSlider = document.getElementById("music-volume-slider");
  const progSlider = document.getElementById("music-progress-slider");
  const currTimeEl = document.getElementById("music-curr-time");
  const totalTimeEl = document.getElementById("music-total-time");
  const playlistContainer = document.getElementById("music-playlist-container");

  if (!audio) return;

  if (playlistContainer) {
    playlistContainer.innerHTML = "";
    musicTracks.forEach((track, idx) => {
      const item = document.createElement("div");
      item.className = `music-playlist-item ${idx === currentTrackIndex ? 'active' : ''}`;
      item.style.padding = "6px 10px";
      item.style.background = "rgba(255, 255, 255, 0.02)";
      item.style.border = "1px solid rgba(79, 216, 232, 0.1)";
      item.style.borderRadius = "4px";
      item.style.cursor = "pointer";
      item.style.display = "flex";
      item.style.justifyContent = "space-between";
      item.style.alignItems = "center";
      item.style.transition = "all 0.2s";

      item.innerHTML = `
        <div style="display: flex; flex-direction: column;">
          <span style="font-family: var(--font-hud); font-size: 11px; color: #ffffff;">${track.title}</span>
          <span style="font-family: var(--font-mono); font-size: 8px; color: var(--text-dim);">${track.desc}</span>
        </div>
        <span style="font-size: 10px; color: var(--primary);">▶</span>
      `;

      item.addEventListener("click", () => {
        loadAndPlayTrack(idx);
      });

      playlistContainer.appendChild(item);
    });
  }

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      togglePlayState();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      let prevIdx = currentTrackIndex - 1;
      if (prevIdx < 0) prevIdx = musicTracks.length - 1;
      loadAndPlayTrack(prevIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      let nextIdx = currentTrackIndex + 1;
      if (nextIdx >= musicTracks.length) nextIdx = 0;
      loadAndPlayTrack(nextIdx);
    });
  }

  if (volSlider) {
    volSlider.addEventListener("input", () => {
      audio.volume = volSlider.value;
    });
  }

  let isDraggingProgressSlider = false;

  audio.addEventListener("timeupdate", () => {
    if (audio.duration && !isDraggingProgressSlider) {
      const pct = (audio.currentTime / audio.duration) * 100;
      if (progSlider) progSlider.value = pct;
      if (currTimeEl) currTimeEl.textContent = formatTime(audio.currentTime);
    }
  });

  audio.addEventListener("seeking", () => {
    isDraggingProgressSlider = true;
  });

  audio.addEventListener("seeked", () => {
    isDraggingProgressSlider = false;
  });

  audio.addEventListener("loadedmetadata", () => {
    if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("ended", () => {
    let nextIdx = currentTrackIndex + 1;
    if (nextIdx >= musicTracks.length) nextIdx = 0;
    loadAndPlayTrack(nextIdx);
  });

  if (progSlider) {
    progSlider.addEventListener("input", () => {
      isDraggingProgressSlider = true;
      if (audio.duration && currTimeEl) {
        currTimeEl.textContent = formatTime((progSlider.value / 100) * audio.duration);
      }
    });

    progSlider.addEventListener("change", () => {
      isDraggingProgressSlider = true;
      if (audio.duration) {
        audio.currentTime = (progSlider.value / 100) * audio.duration;
      }
    });
  }

  loadTrack(currentTrackIndex);
}

function loadTrack(idx) {
  const audio = document.getElementById("stark-audio-player");
  const title = document.getElementById("music-track-title");
  const desc = document.getElementById("music-track-desc");
  const img = document.getElementById("music-track-img");

  if (!audio) return;

  currentTrackIndex = idx;
  const track = musicTracks[idx];
  audio.src = track.file;

  if (title) title.textContent = track.title;
  if (desc) desc.textContent = track.desc;
  if (img && track.img) img.src = track.img;
  
  const items = document.querySelectorAll(".music-playlist-item");
  items.forEach((item, i) => {
    if (i === idx) {
      item.classList.add("active");
      item.style.borderColor = "var(--primary)";
    } else {
      item.classList.remove("active");
      item.style.borderColor = "rgba(79, 216, 232, 0.1)";
    }
  });
}

function loadAndPlayTrack(idx) {
  loadTrack(idx);
  playTrack();
}

function playTrack() {
  const audio = document.getElementById("stark-audio-player");
  const win = document.getElementById("win-music");
  if (!audio) return;

  audio.play()
    .then(() => {
      isPlaying = true;
      if (win) win.classList.add("win-music-playing");
    })
    .catch(err => {
      console.warn("Autoplay block or audio load error:", err);
    });
}

function togglePlayState() {
  const audio = document.getElementById("stark-audio-player");
  const win = document.getElementById("win-music");
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    if (win) win.classList.remove("win-music-playing");
  } else {
    playTrack();
  }
}

function playFirstTrack() {
  loadAndPlayTrack(0);
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
