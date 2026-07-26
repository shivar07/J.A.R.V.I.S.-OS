
let highestZ = 10;


const originalSizes = {};


const roboPlaylist = [
  {
    id: "TY4hEmsmVYM",
    title: "Robofest Gujarat 4.0 (Highlights & Winners)",
    desc: "Highlights and winners showcase from India's biggest robotics event hosted at Science City.",
    embedUrl: "https://www.youtube-nocookie.com/embed/TY4hEmsmVYM?autoplay=1",
    directUrl: "https://www.youtube.com/watch?v=TY4hEmsmVYM"
  },
  {
    id: "_iuVUyZySqQ",
    title: "Swadeshi Parakh Launch Video",
    desc: "Official launch video showcasing the Swadeshi Parakh diagnostic and innovation initiative features.",
    embedUrl: "https://www.youtube-nocookie.com/embed/_iuVUyZySqQ?autoplay=1",
    directUrl: "https://www.youtube.com/watch?v=_iuVUyZySqQ"
  },
  {
    id: "qIMhXg9YGY",
    title: "Maze Solver with Space Mapping (AlphaBot2)",
    desc: "Custom maze solver project utilizing AlphaBot2 and Raspberry Pi 3 to navigate and map the arena.",
    embedUrl: "https://www.youtube-nocookie.com/embed/qIMhXg9YGY?autoplay=1",
    directUrl: "https://www.youtube.com/watch?v=qIMhXg9YGY"
  },
  {
    id: "videoseries",
    title: "Ciia -4 (Innovation Exhibition & Competition)",
    desc: "Exhibition highlights showcasing creative ideas and technical innovations in action.",
    embedUrl: "https://www.youtube-nocookie.com/embed/videoseries?list=PLYGIFPfRi3VJzikjK_l6aucUSShordDzk&autoplay=1",
    directUrl: "https://www.youtube.com/playlist?list=PLYGIFPfRi3VJzikjK_l6aucUSShordDzk"
  },
  {
    id: "UMdNogwi1eU",
    title: "Technoxian 2024 Maze Solver Challenge",
    desc: "Autonomous navigation and speed run calibrations for the Technoxian global maze solver challenge.",
    embedUrl: "https://www.youtube-nocookie.com/embed/UMdNogwi1eU?autoplay=1",
    directUrl: "https://www.youtube.com/watch?v=UMdNogwi1eU"
  }
];

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


function initClock() {
  const clockTime = document.getElementById("taskbar-clock-time");
  const clockDate = document.getElementById("taskbar-clock-date");
  const update = () => {
    const now = new Date();
    
    let hrs = now.getHours();
    const ampm = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    const mins = String(now.getMinutes()).padStart(2, '0');
    
    if (clockTime) {
      clockTime.textContent = `${hrs}:${mins} ${ampm}`;
    }
    
    if (clockDate) {
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      clockDate.textContent = `${day}/${month}/${year}`;
    }
  };
  update();
  setInterval(update, 1000);
}


function focusWindow(win) {
  if (win.classList.contains("active-window")) return;
  
  document.querySelectorAll(".window").forEach(w => w.classList.remove("active-window"));
  
  
  highestZ++;
  win.style.zIndex = highestZ;
  win.classList.add("active-window");
  synthSound("click");
}

function toggleWindow(winId) {
  const win = document.getElementById(winId);
  if (!win) return;
  const indicator = document.getElementById(`indicator-${winId}`);
  const dockItem = indicator ? indicator.parentElement : null;

  if (win.style.display === "none" || win.style.display === "") {
    
    win.style.display = "flex";
    if (dockItem) dockItem.classList.add("app-open");
    focusWindow(win);
    synthSound("success");
    if (winId === "win-terminal") setTimeout(focusTerminalInput, 50);
  } else if (win.classList.contains("active-window")) {
    
    win.style.display = "none";
    if (dockItem) dockItem.classList.remove("app-open");
    synthSound("click");
  } else {
    
    focusWindow(win);
  }
}

function closeWindow(winId) {
  const win = document.getElementById(winId);
  win.style.display = "none";
  const indicator = document.getElementById(`indicator-${winId}`);
  if (indicator) {
    indicator.parentElement.classList.remove("app-open");
  }
  synthSound("click");
}

function minimizeWindow(winId) {
  closeWindow(winId); 
}

function maximizeWindow(winId) {
  const win = document.getElementById(winId);
  focusWindow(win);
  synthSound("click");

  
  if (win.classList.contains("maximized-window")) {
    win.classList.remove("maximized-window");
    const orig = originalSizes[winId];
    if (orig) {
      win.style.top = orig.top;
      win.style.left = orig.left;
      win.style.width = orig.width;
      win.style.height = orig.height;
    }
  } else {
    
    originalSizes[winId] = {
      top: win.style.top,
      left: win.style.left,
      width: win.style.width,
      height: win.style.height
    };
    win.classList.add("maximized-window");
    win.style.top = "38px";
    win.style.left = "0";
    win.style.width = "100vw";
    win.style.height = "calc(100vh - 38px)";
  }
}


function makeDraggable(win) {
  const header = document.getElementById(`${win.id}header`);
  if (!header) return;

  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    if (win.classList.contains("maximized-window")) return; 
    e = e || window.event;
    e.preventDefault();
    focusWindow(win);

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let targetTop = win.offsetTop - pos2;
    let targetLeft = win.offsetLeft - pos1;

    
    if (targetTop < 38) targetTop = 38; 
    if (targetTop > window.innerHeight - 50) targetTop = window.innerHeight - 50;
    if (targetLeft < -win.offsetWidth + 100) targetLeft = -win.offsetWidth + 100;
    if (targetLeft > window.innerWidth - 100) targetLeft = window.innerWidth - 100;

    win.style.top = targetTop + "px";
    win.style.left = targetLeft + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


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


function initYouTubeLab() {
  const feedContainer = document.getElementById("yt-feed-container");
  const playerContainer = document.getElementById("yt-player-container");
  const activeTitle = document.getElementById("yt-video-active-title");
  const activeDesc = document.getElementById("yt-video-active-desc");

  feedContainer.innerHTML = "";
  
  roboPlaylist.forEach((video, index) => {
    const item = document.createElement("div");
    item.className = "yt-video-item";
    if (index === 0) item.classList.add("active");

    item.innerHTML = `
      <div class="yt-video-thumb-sim">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
      </div>
      <div class="yt-video-title">${video.title}</div>
    `;

    item.addEventListener("click", () => {
      document.querySelectorAll(".yt-video-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      synthSound("click");
      playVideo(video);
    });

    feedContainer.appendChild(item);
  });

  
  if (roboPlaylist.length > 0) {
    playVideo(roboPlaylist[0], false); 
  }

  function playVideo(video, autoplay = true) {
    activeTitle.textContent = video.title;
    activeDesc.textContent = video.desc;

    const directBtn = document.getElementById("yt-video-direct-btn");
    if (directBtn) {
      directBtn.href = video.directUrl;
      directBtn.style.display = "inline-flex";
    }

    let url = video.embedUrl;
    if (!autoplay) {
      url = url.replace("?autoplay=1", "?autoplay=0");
    }

    playerContainer.innerHTML = `
      <iframe src="${url}" style="width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
  }
}


const biosLines = [
  "Stark Industries Kernel 6.9.0-jarvis-amd64 (SMP) #1 SMP PREEMPT_DYNAMIC Mon Jul 20 18:24:50 UTC 2026",
  "Command line: BOOT_IMAGE=/vmlinuz-6.9.0-jarvis root=UUID=stark-core-uuid ro quiet splash",
  "x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'",
  "Signal-based Arc Reactor subsystem detected. Frequency scaling activated.",
  "Vibranium shielding kernel extensions ........ loaded successfully.",
  "ACPI: Core revision 20260318",
  "Virtual Disk /dev/sda1: 2.0 TB SCSI Drive detected.",
  "Journald service [ OK ] listening on security interrupts.",
  "Mounted filesystem /root/core (ext4) successfully.",
  "[    0.000000] Linux version 6.9.0-jarvis (gcc version 13.2.0)",
  "[    0.000215] BIOS-provided physical RAM map:",
  "[    0.000540] BIOS-e820: [mem 0x0000000000000000-0x000000000009ffff] usable",
  "[    0.001083] Memory: 65536MB available (16384K kernel code, 2304K rwdata, 8292K rodata)",
  "[    0.002441] CPU: 16 processors active (Stark Arc-Core v17.5)",
  "[    0.024182] Initializing display adapter: Holographic HUD Renderer 4.0 [OK]",
  "[    0.040203] ACPI: 1 ACPI AML tables successfully acquired and loaded",
  "[    0.067441] SCSI subsystem initialized",
  "[    0.088092] usbcore: registered new interface driver usbfs",
  "[    0.094218] pci 0000:00:02.0: vgaarb: setting as boot VGA device",
  "[    0.112450] Console: switching to colour frame buffer device 240x60",
  "[    0.154210] J.A.R.V.I.S. Neural Bridge link established on port 9001.",
  "Starting systemd initialization...",
  "[  OK  ] Created slice User Slices.",
  "[  OK  ] Started Dispatch Password Requests to Console Directory.",
  "[  OK  ] Reached target Path Units.",
  "[  OK  ] Reached target Basic System.",
  "Starting Jarvis Speech Core Services...",
  "[  OK  ] Started jarvis-speech-core.service.",
  "Starting Telemetry and Network Monitor..."
];

function runBiosBoot(callback) {
  const biosScreen = document.getElementById("bios-boot-screen");
  const consoleEl = document.getElementById("linux-console");
  const bootScreen = document.getElementById("boot-screen");
  
  if (!biosScreen || !consoleEl) {
    if (callback) callback();
    return;
  }
  
  biosScreen.style.display = "block";
  if (bootScreen) bootScreen.style.display = "none";
  consoleEl.innerHTML = "";
  
  let lineIndex = 0;
  
  function printNextLine() {
    if (lineIndex < biosLines.length) {
      const line = document.createElement("div");
      const lineText = biosLines[lineIndex];
      
      if (lineText.includes("[  OK  ]") || lineText.includes("[OK]")) {
        line.innerHTML = lineText.replace("[  OK  ]", "<span style='color: #27c93f; font-weight: bold;'>[  OK  ]</span>")
                                 .replace("[OK]", "<span style='color: #27c93f; font-weight: bold;'>[OK]</span>");
      } else if (lineText.includes("Kernel") || lineText.includes("Starting")) {
        line.innerHTML = `<span style='color: var(--primary); font-weight: bold;'>${lineText}</span>`;
      } else {
        line.textContent = lineText;
      }
      
      consoleEl.appendChild(line);
      consoleEl.scrollTop = consoleEl.scrollHeight;
      
      lineIndex++;
      setTimeout(printNextLine, 35 + Math.random() * 40);
    } else {
      setTimeout(() => {
        biosScreen.style.display = "none";
        if (callback) callback();
      }, 800);
    }
  }
  
  setTimeout(printNextLine, 200);
}

function initBootSequence() {
  const bootScreen = document.getElementById("boot-screen");
  const loginScreen = document.getElementById("login-screen");
  const desktopArea = document.getElementById("desktop-area");
  
  // Start with clean Windows boot loader (only Windows logo and loading dots, no debug text)
  if (bootScreen) {
    bootScreen.style.display = "flex";
    bootScreen.style.opacity = "1";
  }

  // Windows loading screen runs for 3.5 seconds
  setTimeout(() => {
    if (bootScreen) bootScreen.style.opacity = "0";
    
    setTimeout(() => {
      if (bootScreen) bootScreen.style.display = "none";
      
      // Stark BIOS terminal console logs print next
      runBiosBoot(() => {
        // Once terminal boot completes, transition to Login Screen
        if (loginScreen) {
          loginScreen.style.display = "flex";
          loginScreen.style.opacity = "1";
        }
      });
    }, 500);
  }, 3500);

  const loginBtn = document.getElementById("login-signin-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      if (typeof synthSound === "function") {
        synthSound("success");
      }
      loginScreen.style.opacity = "0";
      
      if (desktopArea) {
        desktopArea.style.display = "block";
        setTimeout(() => {
          desktopArea.style.opacity = "1";
          // Open terminal on the left and run boot logs first
          openWindowAt("win-terminal", "40px", "20px", "620px", "82vh");
          triggerTerminalBootLogs();
        }, 50);
      }
      
      setTimeout(() => {
        loginScreen.style.display = "none";
      }, 800);
    });
  }

  window.addEventListener("keydown", (e) => {
    if (loginScreen && loginScreen.style.display === "flex" && e.key === "Enter") {
      if (loginBtn) loginBtn.click();
    }
  });
}


function triggerTerminalBootLogs() {
  const win = document.getElementById("win-terminal");
  if (!win) return;
  
  
  win.style.display = "flex";
  win.style.zIndex = highestZ++;
  
  const historyEl = document.getElementById("term-history");
  if (!historyEl) return;
  
  historyEl.innerHTML = `<div class="terminal-line" style="color: var(--primary);">sujay@robo-pc:~$ ./init_robo_os.sh</div>`;
  
  const initLogs = [
    "[ OK ] INITIALIZING CORE MEMORY SUBSYSTEMS...",
    "[ OK ] DETECTING USER DIRECTORIES...",
    "[ OK ] ACTIVE WORKSPACE: 'My very own WebOS' (.wakatime-project active)",
    "[ OK ] MOUNTING J.A.R.V.I.S. HOLOGRAPHIC AI INTERFACE MODULES...",
    "[ OK ] MAPPING YOUTUBE LAB STREAMS (@roboticengineerwala)",
    "[ OK ] PARSING CERTIFICATES AND AWARDS DATABASE...",
    "[ OK ] REGISTERING DYNAMIC FILESYSTEM EXPLORER...",
    "INIT COMPLETED successfully. SECURE SHELL SESSION SECURED.",
    "READY TO LAUNCH GRAPHICAL WORKSPACE ENVIRONMENT."
  ];

  let logIndex = 0;

  function printLine() {
    if (logIndex < initLogs.length) {
      const line = document.createElement("div");
      line.className = "terminal-line";
      line.textContent = initLogs[logIndex];
      if (initLogs[logIndex].includes("[ OK ]")) {
        line.style.color = "var(--primary)";
      }
      historyEl.appendChild(line);
      historyEl.scrollTop = historyEl.scrollHeight;
      
      if (typeof synthSound === "function") {
        synthSound("click");
      }
      
      logIndex++;
      setTimeout(printLine, 180 + Math.random() * 100);
    } else {
      setTimeout(() => {
        // Hide terminal window and update taskbar indicator
        if (win) win.style.display = "none";
        const indicator = document.getElementById("indicator-win-terminal");
        if (indicator) {
          const dockItem = indicator.parentElement;
          if (dockItem) dockItem.classList.remove("app-open");
        }
        triggerStartupWelcome();
      }, 1000);
    }
  }

  setTimeout(printLine, 400);
}


const showcaseData = [
  {
    src: "showcase ui + image/1.png",
    title: "Robofest Gujarat 3.0 Winner Certificate",
    badge: "Robofest Gujarat 3.0",
    desc: "Recognized as the 1st prize winner for our autonomous maze solving robotics entry."
  },
  {
    src: "showcase ui + image/2.png",
    title: "Robofest Gujarat 3.0 - 1st Prize Winner Trophy",
    badge: "Robofest 3.0 Championship",
    desc: "Trophy awarded by GUJCOST for outstanding engineering and design in robotics."
  },
  {
    src: "showcase ui + image/3.png",
    title: "Swadeshi Parakh Diagnostic Award",
    badge: "HealthTech Innovation",
    desc: "Award certificate acknowledging development contributions for localized diagnostics."
  },
  {
    src: "showcase ui + image/4.png",
    title: "Ciia Nehru Center - National Winner",
    badge: "National Innovation Expo",
    desc: "Creative Ideas & Innovations exhibition certificate representing our national winning project design."
  },
  {
    src: "showcase ui + image/5.png",
    title: "Ciia Nehru Center - Winner Gold Medal",
    badge: "Gold Medal Honors",
    desc: "Gold medal awarded at the Nehru Science Centre for creative ideas and innovations."
  },
  {
    src: "showcase ui + image/6.png",
    title: "Government Polytechnic Ahmedabad - Appreciation Honors",
    badge: "Academic Distinction",
    desc: "Appreciation certificate for leading academic and institutional robotics workshops."
  },
  {
    src: "showcase ui + image/7.png",
    title: "State Level Project Exhibition - Finalist Trophies",
    badge: "Exhibition Highlights",
    desc: "Trophies and shields won at various state-level innovation expos and project displays."
  },
  {
    src: "showcase ui + image/8.png",
    title: "Swadeshi Parakh - Prototype Certificate",
    badge: "Prototype Recognition",
    desc: "Official prototype validation certificate acknowledging excellent functional design."
  }
];

let currentShowcaseIndex = 0;

function initShowcase() {
  const activeImg = document.getElementById("showcase-active-img");
  const titleEl = document.getElementById("showcase-title");
  const badgeEl = document.getElementById("showcase-badge");
  const descEl = document.getElementById("showcase-desc");
  const thumbsTray = document.getElementById("showcase-thumbs-tray");
  
  if (!activeImg || !thumbsTray) return;

  
  thumbsTray.innerHTML = "";
  showcaseData.forEach((item, idx) => {
    const thumb = document.createElement("div");
    thumb.className = `showcase-thumb-item ${idx === 0 ? 'active' : ''}`;
    thumb.innerHTML = `<img src="${item.src}" alt="${item.title}">`;
    thumb.onclick = () => loadShowcaseSlide(idx);
    thumbsTray.appendChild(thumb);
  });
  
  function loadShowcaseSlide(idx) {
    currentShowcaseIndex = idx;
    const item = showcaseData[idx];
    
    
    activeImg.style.opacity = "0.3";
    setTimeout(() => {
      activeImg.src = item.src;
      titleEl.textContent = item.title;
      badgeEl.textContent = item.badge;
      descEl.textContent = item.desc;
      activeImg.style.opacity = "1";
    }, 150);
    
    
    document.querySelectorAll(".showcase-thumb-item").forEach((thumb, tIdx) => {
      if (tIdx === idx) {
        thumb.classList.add("active");
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove("active");
      }
    });
    
    if (typeof synthSound === "function") {
      synthSound("click");
    }
  }
  
  document.getElementById("showcase-prev-btn").onclick = () => {
    let nextIdx = currentShowcaseIndex - 1;
    if (nextIdx < 0) nextIdx = showcaseData.length - 1;
    loadShowcaseSlide(nextIdx);
  };
  
  document.getElementById("showcase-next-btn").onclick = () => {
    let nextIdx = currentShowcaseIndex + 1;
    if (nextIdx >= showcaseData.length) nextIdx = 0;
    loadShowcaseSlide(nextIdx);
  };

  
  document.getElementById("showcase-active-frame").onclick = () => {
    const activeItem = showcaseData[currentShowcaseIndex];
    openLightbox(activeItem.src, activeItem.title);
  };
}


const galleryData = {
  "Designs": {
    path: "gallery/Designs/",
    type: "image",
    files: [
      "IMG-20240328-WA0006.jpg", "IMG-20240328-WA0007.jpg", "IMG-20240425-WA0020.jpg",
      "IMG-20240425-WA0021.jpg", "IMG-20240425-WA0022.jpg", "IMG-20240425-WA0023.jpg",
      "IMG-20240425-WA0024.jpg", "IMG-20240425-WA0025.jpg", "IMG-20240425-WA0026.jpg",
      "IMG-20240425-WA0030.jpg", "IMG-20240425-WA0031.jpg", "IMG-20240425-WA0032.jpg",
      "IMG-20240425-WA0034.jpg", "IMG-20240425-WA0035.jpg", "IMG-20240425-WA0036.jpg",
      "IMG-20240425-WA0037.jpg", "IMG-20240426-WA0002.jpg", "IMG-20240426-WA0003.jpg",
      "IMG-20240426-WA0004.jpg", "IMG-20240426-WA0005.jpg", "IMG-20240426-WA0006.jpg",
      "IMG-20240426-WA0007.jpg", "IMG-20240426-WA0008.jpg", "IMG-20240426-WA0009.jpg",
      "IMG-20240426-WA0010.jpg", "IMG-20240426-WA0011.jpg", "IMG-20240426-WA0012.jpg",
      "IMG-20240426-WA0013.jpg", "IMG-20240426-WA0014.jpg", "IMG-20240426-WA0015.jpg",
      "IMG-20240426-WA0016.jpg", "IMG-20240509-WA0004.jpg", "IMG-20240509-WA0005.jpg",
      "IMG-20240509-WA0006.jpg", "IMG-20240509-WA0007.jpg", "IMG-20240509-WA0008.jpg",
      "IMG-20240509-WA0009.jpg", "IMG-20240509-WA0010.jpg", "IMG-20240509-WA0011.jpg",
      "IMG-20240509-WA0012.jpg", "IMG-20240509-WA0013.jpg", "IMG-20240509-WA0014.jpg",
      "IMG-20240509-WA0015.jpg", "IMG-20240611-WA0026.jpg", "IMG-20240611-WA0027.jpg",
      "IMG-20240611-WA0028.jpg", "IMG-20240611-WA0029.jpg", "IMG-20240611-WA0030.jpg",
      "IMG-20240704-WA0003.jpg", "IMG-20240927-WA0032.jpg", "Screenshot 2024-04-26 123402.png",
      "Screenshot 2024-04-26 123618.png", "Screenshot 2024-04-26 123706.png", "Screenshot 2024-04-26 123911.png",
      "Screenshot 2024-04-26 123952.png", "Screenshot 2024-04-26 124335.png", "Screenshot 2024-04-26 124427.png",
      "Screenshot 2024-04-26 153222.png", "Screenshot 2024-04-26 153309.png", "Screenshot 2024-04-26 153625.png",
      "Screenshot 2024-04-26 153754.png", "Screenshot 2024-04-26 160449.png", "Screenshot 2024-04-26 160526.png",
      "Screenshot 2024-04-26 160611.png", "Screenshot 2024-04-26 160742.png"
    ]
  },
  "Internship 1": {
    path: "gallery/Internship 1/",
    type: "image",
    files: [
      "IMG-20240711-WA0011.jpg", "IMG-20240711-WA0020.jpg", "IMG-20240711-WA0026.jpg"
    ]
  },
  "Newspaper & Media": {
    path: "gallery/Newspaper + Social media/",
    type: "image",
    files: [
      "20241201_114657.jpg", "IMG-20231207-WA0003.jpg", "IMG-20241120-WA0001.jpg",
      "Screenshot_20241114-194617_Instagram.jpg", "Screenshot_20241114-195103_Facebook.jpg",
      "Screenshot_20241126-183232_Gujarat Samachar.jpg", "Screenshot_20241126-183306_Gujarat Samachar.jpg",
      "Screenshot_20241126-183358_Gujarat Samachar.jpg", "WhatsApp Image 2025-03-19 at 15.46.10_24d3fc8c.jpg"
    ]
  },
  "Robofest 4.0 Engineers": {
    path: "gallery/Robofest 4.0 Working Engineers/",
    type: "image",
    files: [
      "20241220_165049.jpg"
    ]
  },
  "Robofest Stage 2 Finals": {
    path: "gallery/Robofest Stage 2 Finals/",
    type: "image",
    files: [
      "20241205_142941.jpg", "20241205_142944.jpg", "20241205_143004.jpg",
      "IMG-20241206-WA0005.jpg", "IMG-20241206-WA0008.jpg", "IMG-20241206-WA0076.jpg"
    ]
  },
  "Robofest Stage 2 Photos": {
    path: "gallery/Robofest stage 2 Photos/",
    type: "image",
    files: [
      "20241025_165245.jpg", "IMG-20241025-WA0030.jpg", "IMG-20241025-WA0032.jpg",
      "IMG-20241025-WA0034.jpg", "IMG-20241025-WA0038.jpg", "IMG-20241025-WA0058.jpg"
    ]
  },
  "News & Fame Highlights": {
    path: "gallery/news + fame/",
    type: "image",
    files: [
      "IMG_20231207_085333_375.jpg", "IMG_20231231_201331_344.jpg", "IMG_20231231_201331_413.jpg",
      "IMG_20240102_121026_212.jpg", "IMG_20240325_120307_648.jpg"
    ]
  },
  "Robofest 3.0 Videos": {
    path: "gallery/robofest 3.0/",
    type: "video",
    files: [
      "VID-20231227-WA0002.mp4", "VID-20240107-WA0002.mp4", "video_20231218_162052.mp4"
    ]
  },
  "3D Printing Videos": {
    path: "gallery/3d print videos/",
    type: "video",
    files: [
      "20250313_152546.mp4", "20250313_152610.mp4", "20250313_170908.mp4",
      "20250318_180651.mp4", "20250318_180708.mp4", "20250318_180732.mp4",
      "WhatsApp Video 2025-03-18 at 14.56.11_674d33db.mp4"
    ]
  }
};

function initGallery() {
  const foldersList = document.getElementById("gallery-folders");
  const itemsGrid = document.getElementById("gallery-items-grid");
  const currentFolderLabel = document.getElementById("gallery-current-folder-label");
  
  if (!foldersList || !itemsGrid) return;

  
  foldersList.innerHTML = "";
  Object.keys(galleryData).forEach((folderName, idx) => {
    const li = document.createElement("li");
    const isActive = idx === 0;
    li.innerHTML = `
      <button class="gallery-folder-btn ${isActive ? 'active' : ''}" data-folder="${folderName}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        ${folderName}
      </button>
    `;
    foldersList.appendChild(li);
    
    if (isActive) {
      loadGalleryFolder(folderName);
    }
  });
  
  
  foldersList.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery-folder-btn");
    if (!btn) return;
    
    document.querySelectorAll(".gallery-folder-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    const folderName = btn.getAttribute("data-folder");
    loadGalleryFolder(folderName);
    if (typeof synthSound === "function") {
      synthSound("click");
    }
  });
  
  function loadGalleryFolder(folderName) {
    currentFolderLabel.textContent = folderName;
    itemsGrid.innerHTML = "";
    
    const folder = galleryData[folderName];
    if (!folder) return;
    
    folder.files.forEach(fileName => {
      const card = document.createElement("div");
      card.className = "gallery-item-card";
      const fileUrl = folder.path + fileName;
      
      if (folder.type === "image") {
        card.innerHTML = `
          <div class="gallery-card-preview">
            <img src="${fileUrl}" alt="${fileName}">
          </div>
          <div class="gallery-card-label">${fileName}</div>
        `;
        card.onclick = () => openLightbox(fileUrl, fileName);
      } else {
        card.innerHTML = `
          <div class="gallery-card-preview video-preview">
            <div style="background: rgba(0,240,255,0.05); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 0 5px var(--primary));"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            </div>
          </div>
          <div class="gallery-card-label">${fileName}</div>
        `;
        card.onclick = () => openVideoModal(fileUrl, fileName);
      }
      
      itemsGrid.appendChild(card);
    });
  }
}


function openLightbox(src, captionText) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  
  if (!modal || !modalImg) return;

  modal.style.display = "flex";
  modalImg.src = src;
  caption.textContent = captionText;
  if (typeof synthSound === "function") {
    synthSound("success");
  }
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) modal.style.display = "none";
}

function openVideoModal(src, title) {
  const modal = document.getElementById("video-playback-modal");
  const player = document.getElementById("gallery-local-player");
  const titleEl = document.getElementById("video-modal-title");
  
  if (!modal || !player) return;

  modal.style.display = "flex";
  player.src = src;
  titleEl.textContent = title;
  if (typeof synthSound === "function") {
    synthSound("success");
  }
}

function closeVideoModal() {
  const modal = document.getElementById("video-playback-modal");
  const player = document.getElementById("gallery-local-player");
  if (player) {
    player.pause();
    player.src = "";
  }
  if (modal) modal.style.display = "none";
}


function initHUDSystem() {
  
  function updateClockWidget() {
    const now = new Date();
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secDeg = (secs / 60) * 360;
    const minDeg = (mins / 60) * 360 + (secs / 60) * 6;
    const hourDeg = (hours / 12) * 360 + (mins / 60) * 30;

    const secHand = document.getElementById("analog-sec");
    const minHand = document.getElementById("analog-min");
    const hourHand = document.getElementById("analog-hour");

    if (secHand) secHand.style.transform = `rotate(${secDeg}deg)`;
    if (minHand) minHand.style.transform = `rotate(${minDeg}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;

    const digitalReadout = document.getElementById("widget-digital-time");
    if (digitalReadout) {
      let ampm = hours >= 12 ? 'PM' : 'AM';
      let dispHour = hours % 12;
      dispHour = dispHour ? dispHour : 12;
      const dispMin = String(mins).padStart(2, '0');
      const dispSec = String(secs).padStart(2, '0');
      digitalReadout.textContent = `${dispHour}:${dispMin}:${dispSec} ${ampm}`;
    }
  }
  setInterval(updateClockWidget, 1000);
  updateClockWidget();

  
  function renderCalendarWidget() {
    const monthYear = document.getElementById("calendar-month-year");
    const datesGrid = document.getElementById("calendar-dates");
    if (!monthYear || !datesGrid) return;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    const monthNames = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];

    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    datesGrid.innerHTML = "";

    
    for (let i = 0; i < firstDayIndex; i++) {
      const blank = document.createElement("div");
      blank.className = "calendar-date blank";
      datesGrid.appendChild(blank);
    }

    
    for (let d = 1; d <= totalDays; d++) {
      const dateEl = document.createElement("div");
      dateEl.className = "calendar-date";
      dateEl.textContent = d;
      if (d === today) {
        dateEl.classList.add("today");
      }
      datesGrid.appendChild(dateEl);
    }
  }
  renderCalendarWidget();

  
  const searchInput = document.getElementById("desktop-search-input");
  const searchResults = document.getElementById("search-results");

  const apps = [
    { name: "J.A.R.V.I.S. AI Co-Pilot", id: "win-jarvis", keywords: ["jarvis", "ai", "speech", "copilot", "voice"] },
    { name: "Robotic Engineer Wala (YouTube Channel)", id: "win-youtube", keywords: ["youtube", "video", "channel", "playlist", "robot", "wala", "robotic"] },
    { name: "Netlify Portfolio", id: "win-portfolio", keywords: ["portfolio", "resume", "work", "cv", "netlify", "me"] },
    { name: "RoboTasks List", id: "win-tasks", keywords: ["tasks", "todo", "schedule", "planner", "organizer"] },
    { name: "RoboTerminal Console", id: "win-terminal", keywords: ["terminal", "shell", "cmd", "neofetch", "cli"] },
    { name: "Trophy Showcase", id: "win-showcase", keywords: ["showcase", "trophy", "awards", "medals", "certificates"] },
    { name: "Gallery Explorer", id: "win-gallery", keywords: ["gallery", "photos", "videos", "media", "designs"] },
    { name: "Socials Hub", id: "win-socials", keywords: ["socials", "instagram", "linkedin", "facebook", "github", "links"] },
    { name: "HUD Diagnostics", id: "win-diagnostics", keywords: ["diagnostics", "cpu", "ram", "memory", "temperature", "temp", "hud"] },
    { name: "System Settings", id: "win-settings", keywords: ["settings", "config", "theme", "wallpaper", "crt"] }
  ];

  if (searchInput && searchResults) {
    
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInput.focus();
        if (typeof synthSound === "function") {
          synthSound("click");
        }
      }
    });

    
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        searchResults.style.display = "none";
        searchInput.blur();
      }
    });

    searchInput.addEventListener("input", () => {
      const val = searchInput.value.trim().toLowerCase();
      if (val === "") {
        searchResults.style.display = "none";
        return;
      }

      const filtered = apps.filter(app => 
        app.name.toLowerCase().includes(val) || 
        app.keywords.some(kw => kw.includes(val))
      );

      if (filtered.length > 0) {
        searchResults.innerHTML = "";
        filtered.forEach(app => {
          const li = document.createElement("li");
          li.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> ${app.name}`;
          li.onclick = () => {
            toggleWindow(app.id);
            searchInput.value = "";
            searchResults.style.display = "none";
            searchInput.blur();
          };
          searchResults.appendChild(li);
        });
        searchResults.style.display = "block";
      } else {
        searchResults.style.display = "none";
      }
    });

    
    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = "none";
      }
    });
  }

  
  const contextMenu = document.getElementById("desktop-context-menu");

  if (contextMenu) {
    document.addEventListener("contextmenu", (e) => {
      
      if (e.target.closest(".window") || e.target.closest(".desktop-dock") || e.target.closest(".top-bar")) {
        return; 
      }
      
      e.preventDefault();
      contextMenu.style.display = "block";
      contextMenu.style.left = e.clientX + "px";
      contextMenu.style.top = e.clientY + "px";
      
      if (typeof synthSound === "function") {
        synthSound("click");
      }
    });

    
    document.addEventListener("click", () => {
      contextMenu.style.display = "none";
    });
  }

  
  setInterval(() => {
    const cpuVal = document.getElementById("diag-cpu-val");
    const cpuBar = document.getElementById("diag-cpu-bar");
    const ramVal = document.getElementById("diag-ram-val");
    const ramBar = document.getElementById("diag-ram-bar");
    const tempVal = document.getElementById("diag-temp-val");
    const tempBar = document.getElementById("diag-temp-bar");

    if (cpuVal && cpuBar) {
      const load = Math.floor(15 + Math.random() * 25);
      cpuVal.textContent = load + "%";
      cpuBar.style.width = load + "%";
    }
    if (ramVal && ramBar) {
      const ram = (3.1 + Math.random() * 0.4).toFixed(1);
      ramVal.textContent = ram + " GB / 8.0 GB";
      ramBar.style.width = ((ram / 8.0) * 100) + "%";
    }
    if (tempVal && tempBar) {
      const temp = Math.floor(43 + Math.random() * 6);
      tempVal.textContent = temp + "°C";
      tempBar.style.width = ((temp / 80) * 100) + "%";
    }
  }, 2000);
}

// --- Weather HUD Logic ---
let defaultCity = "MALIBU, CA";
let defaultLat = 34.02;
let defaultLon = -118.77;

function initWeather() {
  const searchInput = document.getElementById("weather-city-input");
  const searchBtn = document.getElementById("weather-search-btn");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const city = searchInput.value.trim();
      if (city) {
        fetchWeatherByCity(city);
      }
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const city = searchInput.value.trim();
        if (city) {
          fetchWeatherByCity(city);
        }
      }
    });
  }

  // Load default weather
  fetchWeather(defaultLat, defaultLon, defaultCity);
}

function fetchWeatherByCity(cityName) {
  const loader = document.getElementById("weather-loader");
  const results = document.getElementById("weather-results");
  if (loader && results) {
    loader.style.display = "block";
    results.style.display = "none";
  }

  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`)
    .then(res => res.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        const lat = result.latitude;
        const lon = result.longitude;
        const name = `${result.name.toUpperCase()}, ${result.country_code.toUpperCase()}`;
        fetchWeather(lat, lon, name);
      } else {
        alert("City not found. Please try another query.");
        if (loader && results) {
          loader.style.display = "none";
          results.style.display = "block";
        }
      }
    })
    .catch(err => {
      console.error("Geocoding error:", err);
      if (loader && results) {
        loader.style.display = "none";
        results.style.display = "block";
      }
    });
}

function fetchWeather(lat, lon, displayCity) {
  const tempEl = document.getElementById("weather-temp");
  const feelsEl = document.getElementById("weather-feels");
  const windEl = document.getElementById("weather-wind");
  const windDirEl = document.getElementById("weather-wind-dir");
  const humidityEl = document.getElementById("weather-humidity");
  const precipEl = document.getElementById("weather-precip");
  const pressureEl = document.getElementById("weather-pressure");
  const pressureLabelEl = document.getElementById("weather-pressure-label");
  const cityEl = document.getElementById("weather-display-city");
  const coordsEl = document.getElementById("weather-display-coords");
  const statusAlertEl = document.getElementById("weather-status-alert");
  const forecastGrid = document.getElementById("weather-forecast-grid");
  const summaryText = document.getElementById("weather-summary-text");
  
  const tbTemp = document.getElementById("taskbar-weather-temp");
  const tbDesc = document.getElementById("taskbar-weather-desc");

  const loader = document.getElementById("weather-loader");
  const results = document.getElementById("weather-results");

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`)
    .then(res => res.json())
    .then(data => {
      if (loader && results) {
        loader.style.display = "none";
        results.style.display = "block";
      }

      const current = data.current;
      if (!current) return;

      // Update basic fields
      if (cityEl) cityEl.textContent = displayCity;
      if (coordsEl) coordsEl.textContent = `LAT: ${lat.toFixed(2)}° N / LON: ${Math.abs(lon).toFixed(2)}° ${lon >= 0 ? 'E' : 'W'}`;
      if (tempEl) tempEl.textContent = `${current.temperature_2m.toFixed(1)}°C`;
      if (feelsEl) feelsEl.textContent = `FEELS: ${Math.round(current.apparent_temperature)}°C`;
      if (windEl) windEl.textContent = `${current.wind_speed_10m.toFixed(1)} km/h`;
      if (windDirEl) windDirEl.textContent = `BEARING: ${current.wind_direction_10m}°`;
      if (humidityEl) humidityEl.textContent = `${current.relative_humidity_2m}%`;
      if (precipEl) precipEl.textContent = `RAIN: ${current.precipitation.toFixed(1)}mm`;
      if (pressureEl) pressureEl.textContent = `${Math.round(current.pressure_msl)} hPa`;

      // Status labels & alerts
      let condition = "Clear";
      let isOptimal = true;
      const code = current.weather_code;
      if (code === 0) condition = "Clear";
      else if (code <= 3) condition = "Cloudy";
      else if (code === 45 || code === 48) { condition = "Foggy"; isOptimal = false; }
      else if (code <= 55) { condition = "Drizzle"; isOptimal = false; }
      else if (code <= 65) { condition = "Rainy"; isOptimal = false; }
      else if (code <= 75) { condition = "Snowy"; isOptimal = false; }
      else if (code <= 82) { condition = "Showers"; isOptimal = false; }
      else { condition = "Stormy"; isOptimal = false; }

      if (statusAlertEl) {
        statusAlertEl.textContent = isOptimal ? "OPTIMAL" : "WARNING";
        statusAlertEl.style.background = isOptimal ? "rgba(39, 201, 63, 0.15)" : "rgba(255, 47, 142, 0.15)";
        statusAlertEl.style.borderColor = isOptimal ? "#27c93f" : "#ff2f8e";
        statusAlertEl.style.color = isOptimal ? "#27c93f" : "#ff2f8e";
      }

      if (pressureLabelEl) {
        pressureLabelEl.textContent = current.pressure_msl > 1013 ? "HIGH" : "NORMAL";
      }

      if (tbTemp) tbTemp.textContent = `${current.temperature_2m.toFixed(1)}°C`;
      if (tbDesc) tbDesc.textContent = `${displayCity.split(',')[0]} (${condition})`;

      if (summaryText) {
        summaryText.textContent = isOptimal 
          ? `J.A.R.V.I.S. ANALYSIS: Clear flight corridors. Altitude envelope is safe for supersonic repulsor testing.` 
          : `J.A.R.V.I.S. WARNING: Adverse flight telemetry. Precipitation or fog hazard detected. Repulsor flight tests restricted.`;
      }

      // 5-Day Forecast Grid
      if (forecastGrid && data.daily) {
        forecastGrid.innerHTML = "";
        const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const todayIdx = new Date().getDay();
        
        for (let i = 0; i < 5; i++) {
          const maxT = data.daily.temperature_2m_max[i];
          const minT = data.daily.temperature_2m_min[i];
          const dayCode = data.daily.weather_code[i];
          const dayName = weekdays[(todayIdx + i) % 7];
          
          let icon = "☀️";
          if (dayCode > 0 && dayCode <= 3) icon = "⛅";
          else if (dayCode === 45 || dayCode === 48) icon = "🌫️";
          else if (dayCode > 48 && dayCode <= 65) icon = "🌧️";
          else if (dayCode > 65 && dayCode <= 75) icon = "❄️";
          else if (dayCode > 75 && dayCode <= 82) icon = "🌦️";
          else icon = "⛈️";

          const card = document.createElement("div");
          card.style.background = "rgba(255, 255, 255, 0.03)";
          card.style.border = "1px solid rgba(79, 216, 232, 0.1)";
          card.style.borderRadius = "4px";
          card.style.padding = "6px 2px";
          card.style.textAlign = "center";
          card.style.display = "flex";
          card.style.flexDirection = "column";
          card.style.alignItems = "center";
          card.style.justifyContent = "space-between";

          card.innerHTML = `
            <div style="font-family: var(--font-mono); font-size: 7px; color: var(--text-dim);">${dayName}</div>
            <div style="font-size: 14px; margin: 3px 0;">${icon}</div>
            <div style="font-family: var(--font-hud); font-size: 8px; color: #ffffff; font-weight: bold;">${Math.round(maxT)}°/${Math.round(minT)}°</div>
          `;
          forecastGrid.appendChild(card);
        }
      }
    })
    .catch(err => {
      console.error("Error loading weather data:", err);
    });
}

// --- Hackatime Integration Logic ---
let leaderboardEntries = [];
let activeScope = "global";
let myHackatimeStats = null;

function openHackatimeWorkspace() {
  const statsWin = document.getElementById("win-hackatime-stats");
  const lbWin = document.getElementById("win-hackatime-leaderboard");

  if (!statsWin || !lbWin) return;

  const statsClosed = statsWin.style.display === "none" || statsWin.style.display === "";
  const lbClosed = lbWin.style.display === "none" || lbWin.style.display === "";

  if (statsClosed || lbClosed) {
    statsWin.style.display = "flex";
    lbWin.style.display = "flex";
    
    statsWin.style.zIndex = highestZ++;
    lbWin.style.zIndex = highestZ++;
    focusWindow(lbWin);

    const statsInd = document.getElementById("indicator-win-hackatime-stats") || document.getElementById("indicator-workspace-hackatime");
    const lbInd = document.getElementById("indicator-win-hackatime-leaderboard");
    if (statsInd) statsInd.parentElement.classList.add("app-open");
    if (lbInd) lbInd.parentElement.classList.add("app-open");

    if (typeof synthSound === "function") synthSound("success");
  } else {
    statsWin.style.display = "none";
    lbWin.style.display = "none";

    const statsInd = document.getElementById("indicator-win-hackatime-stats") || document.getElementById("indicator-workspace-hackatime");
    const lbInd = document.getElementById("indicator-win-hackatime-leaderboard");
    if (statsInd) statsInd.parentElement.classList.remove("app-open");
    if (lbInd) lbInd.parentElement.classList.remove("app-open");

    if (typeof synthSound === "function") synthSound("click");
  }
}

function fetchHackatimeData() {
  const statsLoader = document.getElementById("hack-stats-loader");
  const statsContent = document.getElementById("hack-stats-content");

  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  const apiBase = isLocal ? "http://localhost:3001/api" : "/.netlify/functions";

  // 1. Fetch Stats
  fetch(`${apiBase}/stats`)
    .then(res => res.json())
    .then(data => {
      myHackatimeStats = data;
      if (statsLoader) statsLoader.style.display = "none";
      if (statsContent) statsContent.style.display = "block";

      const profile = data.profile || {};
      const dashboard = data.dashboard_stats?.filterable_dashboard_data || {};

      // Profile details
      const avatarEl = document.getElementById("hack-avatar");
      if (avatarEl && profile.avatar_url) avatarEl.src = profile.avatar_url;

      const nameEl = document.getElementById("hack-display-name");
      if (nameEl) nameEl.textContent = profile.display_name || "shivar07";

      const streakEl = document.getElementById("hack-streak-days");
      if (streakEl) streakEl.textContent = `${profile.streak_days || 0} days`;

      // KPI dashboard metrics
      const totalTimeEl = document.getElementById("hack-total-time");
      if (totalTimeEl && dashboard.total_time) {
        const hrs = Math.floor(dashboard.total_time / 3600);
        const mins = Math.floor((dashboard.total_time % 3600) / 60);
        totalTimeEl.textContent = `${hrs}h ${mins}m`;
      }

      const topProjectEl = document.getElementById("hack-top-project");
      if (topProjectEl) topProjectEl.textContent = dashboard.top_project || "--";

      const topLangEl = document.getElementById("hack-top-language");
      if (topLangEl) topLangEl.textContent = dashboard.top_language || "--";

      // Today log description
      const todayLogEl = document.getElementById("hack-today-log");
      if (todayLogEl) {
        const todayHrs = Math.floor((dashboard.total_time || 0) / 3600);
        const todayMins = Math.floor(((dashboard.total_time || 0) % 3600) / 60);
        todayLogEl.textContent = `Overall, you've logged ${todayHrs}h ${todayMins}m across HTML, CSS, JavaScript, and Arduino configurations using Antigravity-ide.`;
      }

      // Projects chart bars
      const projectsGrid = document.getElementById("hack-projects-bars");
      if (projectsGrid && dashboard.project_durations) {
        projectsGrid.innerHTML = "";
        const maxSecs = Math.max(...Object.values(dashboard.project_durations), 1);
        
        Object.entries(dashboard.project_durations).forEach(([proj, secs]) => {
          if (secs === 0) return;
          const percentage = (secs / maxSecs) * 100;
          const h = Math.floor(secs / 3600);
          const m = Math.floor((secs % 3600) / 60);

          const barWrapper = document.createElement("div");
          barWrapper.className = "chart-bar-wrapper";
          barWrapper.style.marginBottom = "8px";
          barWrapper.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 8px; font-family: var(--font-mono); color: var(--text-main); margin-bottom: 2px;">
              <span>${proj.toUpperCase()}</span>
              <span>${h}H ${m}M</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow: hidden; border: 1px solid rgba(79, 216, 232, 0.15);">
              <div style="background: linear-gradient(90deg, #4fd8e8, #00f0ff); width: ${percentage}%; height: 100%; box-shadow: 0 0 8px #4fd8e8;"></div>
            </div>
          `;
          projectsGrid.appendChild(barWrapper);
        });
      }

      // Languages chart bars
      const languagesGrid = document.getElementById("hack-languages-bars");
      if (languagesGrid && dashboard.language_stats) {
        languagesGrid.innerHTML = "";
        const maxSecs = Math.max(...Object.values(dashboard.language_stats), 1);
        
        Object.entries(dashboard.language_stats).forEach(([lang, secs]) => {
          if (secs === 0) return;
          const percentage = (secs / maxSecs) * 100;
          const h = Math.floor(secs / 3600);
          const m = Math.floor((secs % 3600) / 60);

          const barWrapper = document.createElement("div");
          barWrapper.className = "chart-bar-wrapper";
          barWrapper.style.marginBottom = "8px";
          barWrapper.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 8px; font-family: var(--font-mono); color: var(--text-main); margin-bottom: 2px;">
              <span>${lang.toUpperCase()}</span>
              <span>${h}H ${m}M</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow: hidden; border: 1px solid rgba(255, 47, 142, 0.15);">
              <div style="background: linear-gradient(90deg, #ff2f8e, #ff007f); width: ${percentage}%; height: 100%; box-shadow: 0 0 8px #ff2f8e;"></div>
            </div>
          `;
          languagesGrid.appendChild(barWrapper);
        });
      }

      // Re-trigger leaderboard rendering to inject correct sorted stats
      if (leaderboardEntries.length > 0) {
        renderLeaderboard();
      }
    })
    .catch(err => {
      console.error("Error loading Hackatime stats:", err);
      if (statsLoader) statsLoader.textContent = "Offline or proxy disconnected.";
    });

  // 2. Fetch Leaderboard
  const lbLoader = document.getElementById("hack-lb-loader");
  const lbTable = document.getElementById("hack-lb-table");

  fetch(`${apiBase}/leaderboard`)
    .then(res => res.json())
    .then(data => {
      if (lbLoader) lbLoader.style.display = "none";
      if (lbTable) lbTable.style.display = "table";

      const entriesData = data.props?.entries?.data || data.props?.entries?.entries || [];
      leaderboardEntries = entriesData;
      renderLeaderboard();
    })
    .catch(err => {
      console.error("Error loading Leaderboard:", err);
      if (lbLoader) lbLoader.textContent = "Offline or proxy disconnected.";
    });
}

function initHackatime() {
  // First load
  fetchHackatimeData();

  // Auto-refresh every 2 minutes
  setInterval(fetchHackatimeData, 120000);

  // Hook filters
  const scopeGlobal = document.getElementById("lb-scope-global");
  const scopeIndia = document.getElementById("lb-scope-india");
  const searchInput = document.getElementById("lb-search-input");

  if (scopeGlobal) {
    scopeGlobal.addEventListener("click", () => {
      scopeGlobal.classList.add("active");
      if (scopeIndia) scopeIndia.classList.remove("active");
      activeScope = "global";
      renderLeaderboard();
    });
  }

  if (scopeIndia) {
    scopeIndia.addEventListener("click", () => {
      scopeIndia.classList.add("active");
      if (scopeGlobal) scopeGlobal.classList.remove("active");
      activeScope = "india";
      renderLeaderboard();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderLeaderboard();
    });
  }
}

function renderLeaderboard() {
  const tbody = document.getElementById("hack-lb-tbody");
  const searchInput = document.getElementById("lb-search-input");
  if (!tbody) return;

  tbody.innerHTML = "";

  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  // 1. Establish true global ranks across the entire dataset first
  let globalList = [...leaderboardEntries];
  
  // Inject myself dynamically if not already in the array
  const meExists = globalList.some(entry => entry.user?.display_name?.toLowerCase() === "shivar07" || entry.user?.display_name?.toLowerCase() === "sujay");
  if (!meExists && myHackatimeStats) {
    const profile = myHackatimeStats.profile || {};
    const dashboard = myHackatimeStats.dashboard_stats?.filterable_dashboard_data || {};
    const myEntry = {
      user: {
        display_name: profile.display_name || "shivar07",
        avatar_url: profile.avatar_url || "image/me.png",
        country_code: profile.country_code || "IN"
      },
      streak_count: profile.streak_days || 2,
      total_seconds: dashboard.total_time || 53280
    };
    globalList.push(myEntry);
  }

  // Sort global list descending by total_seconds to compute true rank
  globalList.sort((a, b) => b.total_seconds - a.total_seconds);
  globalList.forEach((entry, i) => {
    entry.trueRank = i + 1;
  });

  // 2. Filter by scope and search query
  let filtered = globalList;

  if (activeScope === "india") {
    filtered = filtered.filter(entry => entry.user?.country_code === "IN");
  }

  if (query) {
    filtered = filtered.filter(entry => entry.user?.display_name?.toLowerCase().includes(query));
  }

  const displayList = filtered.slice(0, 100);

  if (displayList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-dim); font-size: 10px; font-family: var(--font-mono); padding: 20px;">NO TELEMETRY NODES FOUND</td></tr>`;
    return;
  }

  displayList.forEach((entry) => {
    const isMe = entry.user?.display_name?.toLowerCase() === "shivar07" || entry.user?.display_name?.toLowerCase() === "sujay";
    const userAvatar = entry.user?.avatar_url || "image/me.png";
    const userName = entry.user?.display_name || "Anonymous";
    const country = entry.user?.country_code || "UN";
    const streak = entry.streak_count || 0;
    
    const h = Math.floor(entry.total_seconds / 3600);
    const m = Math.floor((entry.total_seconds % 3600) / 60);
    const timeStr = `${h}h ${m}m`;

    const tr = document.createElement("tr");
    if (isMe) {
      tr.style.background = "rgba(255, 47, 142, 0.16)";
      tr.style.borderLeft = "3px solid #ff2f8e";
      tr.style.boxShadow = "inset 0 0 8px rgba(255, 47, 142, 0.25)";
    }

    const rank = entry.trueRank;
    let rankText = `${rank}`;
    if (rank === 1) rankText = "🥇 1";
    else if (rank === 2) rankText = "🥈 2";
    else if (rank === 3) rankText = "🥉 3";

    tr.innerHTML = `
      <td style="text-align: center; font-weight: bold; font-family: var(--font-hud); color: ${isMe ? 'var(--primary)' : 'inherit'};">${rankText}</td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <img src="${userAvatar}" style="width: 18px; height: 18px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15);" onerror="this.src='image/me.png'">
          <span style="font-weight: 500; font-family: var(--font-ui);">${userName}</span>
          <span style="font-size: 8px; opacity: 0.6; font-family: var(--font-mono);">[${country}]</span>
        </div>
      </td>
      <td style="text-align: center; font-family: var(--font-mono); font-size: 10px;">${streak} 🔥</td>
      <td style="text-align: right; font-family: var(--font-hud); font-weight: bold; font-size: 10px; color: var(--primary);">${timeStr}</td>
    `;
    tbody.appendChild(tr);
  });
}

// --- J.A.R.V.I.S. Welcome Sequence & Audio Decrypter Matrix ---
const musicTracks = [
  { title: "Iron Man", desc: "AC/DC - Iron Man", file: "music/Iron_Man.m4a", img: "https://img.youtube.com/vi/wbjc55JqkGs/0.jpg" },
  { title: "Back In Black", desc: "AC/DC - Back In Black", file: "music/Back_In_Black.m4a", img: "https://img.youtube.com/vi/hbGpqY2cXa4/0.jpg" },
  { title: "Shoot To Thrill", desc: "AC/DC - Shoot To Thrill", file: "music/Shoot_to_Thrill.m4a", img: "https://img.youtube.com/vi/lbC0CCS06VE/0.jpg" },
  { title: "Driving With The Top Down", desc: "Ramin Djawadi - Iron Man OST", file: "music/Driving_With_The_Top_Down.m4a", img: "https://img.youtube.com/vi/lhg9bYNLvOg/0.jpg" },
  { title: "Shape of You", desc: "Ed Sheeran - Shape of You", file: "music/Shape_of_You.m4a", img: "https://img.youtube.com/vi/JGwWNGJdvx8/0.jpg" },
  { title: "One Dance (8D Audio)", desc: "Drake - One Dance", file: "music/One_Dance.m4a", img: "https://img.youtube.com/vi/r2U0_xJLuXQ/0.jpg" },
  { title: "Lose My Mind (F1)", desc: "Don Toliver - Lose My Mind", file: "music/Lose_My_Mind.m4a", img: "https://img.youtube.com/vi/WWEs82u37Mw/0.jpg" },
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
  // Open the Weather HUD window
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
      
      // Arrange 3 windows layout
      // Music window at the top center
      openWindowAt("win-music", "40px", "calc(50% - 305px)", "610px", "350px");
      
      // Design Hub (Gallery) on the right side
      openWindowAt("win-gallery", "40px", "calc(100% - 640px)", "620px", "82vh");

      // J.A.R.V.I.S. Subsystem on the left side
      openWindowAt("win-jarvis", "40px", "20px", "480px", "480px");

      // Start playing music!
      playFirstTrack();
    });
  }

  if (noBtn) {
    noBtn.addEventListener("click", () => {
      if (promptOverlay) promptOverlay.style.display = "none";
      if (typeof synthSound === "function") synthSound("click");
    });
  }
}

function openWindowAt(winId, top, left, width, height) {
  const win = document.getElementById(winId);
  const indicator = document.getElementById(`indicator-${winId}`);
  const dockItem = indicator ? indicator.parentElement : null;

  if (win) {
    win.style.display = "flex";
    win.style.top = top;
    win.style.left = left;
    if (width) win.style.width = width;
    if (height) win.style.height = height;
    
    if (dockItem) dockItem.classList.add("app-open");
    focusWindow(win);
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

  // Render Playlist
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

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      if (progSlider) progSlider.value = pct;
      if (currTimeEl) currTimeEl.textContent = formatTime(audio.currentTime);
    }
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

// --- Google Chrome Simulator Engine ---
function initBrowser() {
  const tabsList = document.getElementById("chrome-tabs-list");
  const viewportsContainer = document.getElementById("chrome-viewports-container");
  const addressInput = document.getElementById("chrome-address-input");
  const goBtn = document.getElementById("chrome-go-btn");
  const backBtn = document.getElementById("chrome-back-btn");
  const forwardBtn = document.getElementById("chrome-forward-btn");
  const reloadBtn = document.getElementById("chrome-reload-btn");
  const homeBtn = document.getElementById("chrome-home-btn");
  const newTabBtn = document.getElementById("chrome-new-tab-btn");
  const extBtn = document.getElementById("chrome-ext-btn");

  if (!tabsList || !viewportsContainer) return;

  let tabs = [];
  let activeTabId = null;
  let nextTabId = 1;

  function createTab(url = "https://www.google.com/webhp?igu=1") {
    const tabId = nextTabId++;
    
    let cleanUrl = url;
    if (!/^https?:\/\//i.test(cleanUrl)) {
      cleanUrl = "https://" + cleanUrl;
    }

    let tabTitle = "Google";
    try {
      if (cleanUrl.includes("google.com")) tabTitle = "Google";
      else if (cleanUrl.includes("wikipedia.org")) tabTitle = "Wikipedia";
      else {
        const host = new URL(cleanUrl).hostname.replace("www.", "");
        tabTitle = host.charAt(0).toUpperCase() + host.slice(1);
      }
    } catch(e) {
      tabTitle = "New Tab";
    }

    const tab = {
      id: tabId,
      url: cleanUrl,
      title: tabTitle
    };

    tabs.push(tab);

    const tabEl = document.createElement("div");
    tabEl.className = "chrome-tab";
    tabEl.id = `tab-${tabId}`;
    tabEl.style.display = "flex";
    tabEl.style.alignItems = "center";
    tabEl.style.background = "#20242c";
    tabEl.style.border = "1px solid #2d3139";
    tabEl.style.borderBottom = "none";
    tabEl.style.borderRadius = "6px 6px 0 0";
    tabEl.style.padding = "2px 10px";
    tabEl.style.height = "28px";
    tabEl.style.cursor = "pointer";
    tabEl.style.fontSize = "11px";
    tabEl.style.color = "#a5adba";
    tabEl.style.maxWidth = "140px";
    tabEl.style.minWidth = "85px";
    tabEl.style.justifyContent = "space-between";
    tabEl.style.boxSizing = "border-box";
    tabEl.style.transition = "background 0.2s";

    tabEl.innerHTML = `
      <span class="tab-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex-grow: 1;">${tabTitle}</span>
      <span class="tab-close" style="font-size: 9px; margin-left: 6px; color: #626b77; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; transition: background 0.15s, color 0.15s;">✕</span>
    `;

    tabEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("tab-close")) {
        e.stopPropagation();
        closeTab(tabId);
      } else {
        activateTab(tabId);
      }
    });

    const closeBtn = tabEl.querySelector(".tab-close");
    closeBtn.addEventListener("mouseenter", () => {
      closeBtn.style.background = "rgba(255,255,255,0.15)";
      closeBtn.style.color = "#ffffff";
    });
    closeBtn.addEventListener("mouseleave", () => {
      closeBtn.style.background = "none";
      closeBtn.style.color = "#626b77";
    });

    tabsList.appendChild(tabEl);

    const iframe = document.createElement("iframe");
    iframe.id = `iframe-${tabId}`;
    iframe.src = cleanUrl;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.display = "none";
    iframe.style.background = "#ffffff";
    
    viewportsContainer.appendChild(iframe);

    activateTab(tabId);
  }

  function activateTab(tabId) {
    activeTabId = tabId;
    const tab = tabs.find(t => t.id === tabId);
    if (!tab) return;

    tabs.forEach(t => {
      const el = document.getElementById(`tab-${t.id}`);
      if (el) {
        if (t.id === tabId) {
          el.style.background = "#181a1f";
          el.style.color = "#ffffff";
          el.style.borderTop = "2px solid var(--primary)";
        } else {
          el.style.background = "#0f1115";
          el.style.color = "#a5adba";
          el.style.borderTop = "none";
        }
      }

      const frame = document.getElementById(`iframe-${t.id}`);
      if (frame) {
        frame.style.display = t.id === tabId ? "block" : "none";
      }
    });

    if (addressInput) {
      addressInput.value = tab.url;
    }
  }

  function closeTab(tabId) {
    const idx = tabs.findIndex(t => t.id === tabId);
    if (idx === -1) return;

    const tabEl = document.getElementById(`tab-${tabId}`);
    if (tabEl) tabEl.remove();

    const iframe = document.getElementById(`iframe-${tabId}`);
    if (iframe) iframe.remove();

    tabs.splice(idx, 1);

    if (tabs.length === 0) {
      createTab();
    } else if (activeTabId === tabId) {
      const newActive = tabs[Math.max(0, idx - 1)];
      activateTab(newActive.id);
    }
  }

  function navigateActiveTab() {
    if (!activeTabId) return;
    const tab = tabs.find(t => t.id === activeTabId);
    if (!tab) return;

    let inputUrl = addressInput.value.trim();
    if (!inputUrl) return;

    // Check if input is a direct URL or a search query
    const isUrl = /^https?:\/\//i.test(inputUrl) || (inputUrl.includes(".") && !inputUrl.includes(" "));

    if (isUrl) {
      if (!/^https?:\/\//i.test(inputUrl)) {
        inputUrl = "https://" + inputUrl;
      }
    } else {
      // Convert search term to Google search query
      inputUrl = "https://www.google.com/search?q=" + encodeURIComponent(inputUrl) + "&igu=1";
    }

    tab.url = inputUrl;
    
    try {
      if (inputUrl.includes("google.com/search")) {
        tab.title = "Google Search";
      } else if (inputUrl.includes("google.com")) {
        tab.title = "Google";
      } else {
        const host = new URL(inputUrl).hostname.replace("www.", "");
        tab.title = host.charAt(0).toUpperCase() + host.slice(1);
      }
      const tabEl = document.getElementById(`tab-${activeTabId}`);
      if (tabEl) {
        const titleEl = tabEl.querySelector(".tab-title");
        if (titleEl) titleEl.textContent = tab.title;
      }
    } catch (e) {
      tab.title = "Web Page";
    }

    const iframe = document.getElementById(`iframe-${activeTabId}`);
    if (iframe) {
      iframe.src = inputUrl;
    }
  }

  if (goBtn) {
    goBtn.addEventListener("click", navigateActiveTab);
  }

  if (addressInput) {
    addressInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") navigateActiveTab();
    });
  }

  if (newTabBtn) {
    newTabBtn.addEventListener("click", () => {
      createTab();
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      if (activeTabId) {
        addressInput.value = "https://www.google.com/webhp?igu=1";
        navigateActiveTab();
      }
    });
  }

  if (reloadBtn) {
    reloadBtn.addEventListener("click", () => {
      const iframe = document.getElementById(`iframe-${activeTabId}`);
      if (iframe) {
        iframe.src = iframe.src;
      }
    });
  }

  if (extBtn) {
    extBtn.addEventListener("click", () => {
      const tab = tabs.find(t => t.id === activeTabId);
      if (tab) {
        window.open(tab.url, "_blank");
      }
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const iframe = document.getElementById(`iframe-${activeTabId}`);
      if (iframe) {
        try {
          iframe.contentWindow.history.back();
        } catch (e) {
          console.warn("CORS blocked history navigation inside iframe");
        }
      }
    });
  }

  if (forwardBtn) {
    forwardBtn.addEventListener("click", () => {
      const iframe = document.getElementById(`iframe-${activeTabId}`);
      if (iframe) {
        try {
          iframe.contentWindow.history.forward();
        } catch (e) {
          console.warn("CORS blocked history navigation inside iframe");
        }
      }
    });
  }

  // Create initial tab
  createTab();
}

// --- Windows 11 Calendar & Quick Settings Flyouts Controller ---
let calCurrentYear = new Date().getFullYear();
let calCurrentMonth = new Date().getMonth();
let focusInterval = null;
let focusTimeRemaining = 0; // in seconds
let isFocusActive = false;

function renderCalendar(year, month) {
  const daysGrid = document.getElementById("cal-days-grid");
  const monthLabel = document.getElementById("cal-current-month");
  if (!daysGrid) return;

  daysGrid.innerHTML = "";

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  if (monthLabel) {
    monthLabel.textContent = `${monthNames[month]} ${year}`;
  }

  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevMonthTotalDays = new Date(year, month, 0).getDate();

  const totalCells = 42; 
  
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const daySpan = document.createElement("span");
    daySpan.className = "cal-day other-month";
    daySpan.textContent = prevMonthTotalDays - i;
    daysGrid.appendChild(daySpan);
  }

  const today = new Date();
  for (let i = 1; i <= totalDays; i++) {
    const daySpan = document.createElement("span");
    daySpan.className = "cal-day";
    daySpan.textContent = i;
    
    if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
      daySpan.classList.add("today");
    }

    daysGrid.appendChild(daySpan);
  }

  const remainingCells = totalCells - (firstDayIndex + totalDays);
  for (let i = 1; i <= remainingCells; i++) {
    const daySpan = document.createElement("span");
    daySpan.className = "cal-day other-month";
    daySpan.textContent = i;
    daysGrid.appendChild(daySpan);
  }
}

function updateFlyoutClock() {
  const timeEl = document.getElementById("cal-flyout-time");
  const dateEl = document.getElementById("cal-flyout-date");
  if (!timeEl && !dateEl) return;

  const now = new Date();
  
  let hrs = now.getHours();
  const ampm = hrs >= 12 ? 'PM' : 'AM';
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  
  if (timeEl) {
    timeEl.textContent = `${hrs}:${mins}:${secs} ${ampm}`;
  }

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  if (dateEl) {
    dateEl.textContent = `${daysOfWeek[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  }
}

function initFlyouts() {
  const qsTrigger = document.getElementById("quick-settings-trigger");
  const qsFlyout = document.getElementById("quick-settings-flyout");
  const clockBtn = document.getElementById("taskbar-clock-btn");
  const calFlyout = document.getElementById("calendar-flyout");

  if (!qsTrigger || !qsFlyout || !clockBtn || !calFlyout) return;

  // Toggle Quick Settings Flyout
  qsTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = qsFlyout.style.display === "flex";
    qsFlyout.style.display = isVisible ? "none" : "flex";
    calFlyout.style.display = "none";
    if (typeof synthSound === "function") synthSound("click");
  });

  // Toggle Calendar Flyout
  clockBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = calFlyout.style.display === "flex";
    calFlyout.style.display = isVisible ? "none" : "flex";
    qsFlyout.style.display = "none";
    if (typeof synthSound === "function") synthSound("click");
    
    calCurrentYear = new Date().getFullYear();
    calCurrentMonth = new Date().getMonth();
    renderCalendar(calCurrentYear, calCurrentMonth);
  });

  qsFlyout.addEventListener("click", (e) => e.stopPropagation());
  calFlyout.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", () => {
    qsFlyout.style.display = "none";
    calFlyout.style.display = "none";
  });

  const prevMonthBtn = document.getElementById("cal-prev-month");
  const nextMonthBtn = document.getElementById("cal-next-month");

  if (prevMonthBtn) {
    prevMonthBtn.addEventListener("click", () => {
      calCurrentMonth--;
      if (calCurrentMonth < 0) {
        calCurrentMonth = 11;
        calCurrentYear--;
      }
      renderCalendar(calCurrentYear, calCurrentMonth);
      if (typeof synthSound === "function") synthSound("click");
    });
  }

  if (nextMonthBtn) {
    nextMonthBtn.addEventListener("click", () => {
      calCurrentMonth++;
      if (calCurrentMonth > 11) {
        calCurrentMonth = 0;
        calCurrentYear++;
      }
      renderCalendar(calCurrentYear, calCurrentMonth);
      if (typeof synthSound === "function") synthSound("click");
    });
  }

  updateFlyoutClock();
  setInterval(updateFlyoutClock, 1000);

  // Focus Session Controls
  const minsValEl = document.getElementById("focus-mins-val");
  const minsMinus = document.getElementById("focus-mins-minus");
  const minsPlus = document.getElementById("focus-mins-plus");
  const playBtn = document.getElementById("focus-play-btn");

  let focusMins = 30;

  if (minsMinus) {
    minsMinus.addEventListener("click", () => {
      if (isFocusActive) return;
      focusMins = Math.max(5, focusMins - 5);
      if (minsValEl) minsValEl.textContent = focusMins;
      if (typeof synthSound === "function") synthSound("click");
    });
  }

  if (minsPlus) {
    minsPlus.addEventListener("click", () => {
      if (isFocusActive) return;
      focusMins = Math.min(240, focusMins + 5);
      if (minsValEl) minsValEl.textContent = focusMins;
      if (typeof synthSound === "function") synthSound("click");
    });
  }

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (isFocusActive) {
        clearInterval(focusInterval);
        isFocusActive = false;
        playBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" style="color: var(--primary);">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg> Focus`;
        playBtn.style.background = "rgba(79, 216, 232, 0.15)";
        if (minsValEl) minsValEl.textContent = focusMins;
        if (typeof synthSound === "function") synthSound("click");
      } else {
        isFocusActive = true;
        focusTimeRemaining = focusMins * 60;
        playBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" style="color: #ff2f8e;">
            <rect x="4" y="4" width="16" height="16" />
          </svg> Stop`;
        playBtn.style.background = "rgba(255, 47, 142, 0.15)";
        if (typeof synthSound === "function") synthSound("success");

        focusInterval = setInterval(() => {
          focusTimeRemaining--;
          const remMins = Math.ceil(focusTimeRemaining / 60);
          if (minsValEl) minsValEl.textContent = remMins;

          if (focusTimeRemaining <= 0) {
            clearInterval(focusInterval);
            isFocusActive = false;
            playBtn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" style="color: var(--primary);">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg> Focus`;
            playBtn.style.background = "rgba(79, 216, 232, 0.15)";
            if (minsValEl) minsValEl.textContent = focusMins;
            if (typeof synthSound === "function") synthSound("success");
            alert("Focus session complete, sir. Outstanding effort.");
          }
        }, 1000);
      }
    });
  }

  // Quick Settings Sliders
  const brightnessSlider = document.getElementById("qs-brightness-slider");
  const dimmerOverlay = document.getElementById("brightness-dimmer-overlay");

  if (brightnessSlider && dimmerOverlay) {
    brightnessSlider.addEventListener("input", () => {
      const val = parseInt(brightnessSlider.value);
      dimmerOverlay.style.opacity = (100 - val) / 100;
    });
  }

  const volumeSlider = document.getElementById("qs-volume-slider");
  const starkAudioPlayer = document.getElementById("stark-audio-player");
  const trayAudioIcon = document.getElementById("audio-icon-tray");

  if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {
      const val = parseFloat(volumeSlider.value);
      if (starkAudioPlayer) starkAudioPlayer.volume = val;
      
      const musicVol = document.getElementById("music-volume-slider");
      if (musicVol) musicVol.value = val;

      if (trayAudioIcon) {
        if (val === 0) {
          trayAudioIcon.style.opacity = "0.4";
        } else {
          trayAudioIcon.style.opacity = "1";
        }
      }
    });
  }

  // Quick Action Pills
  const wifiPill = document.getElementById("qs-wifi");
  const wifiSsid = document.getElementById("qs-wifi-ssid");
  const trayWifiIcon = document.querySelector("#quick-settings-trigger .tray-icon:first-child");

  if (wifiPill) {
    wifiPill.addEventListener("click", () => {
      const isActive = wifiPill.classList.toggle("active");
      if (isActive) {
        if (wifiSsid) wifiSsid.textContent = "Airtel_sujay";
        if (trayWifiIcon) trayWifiIcon.style.opacity = "1";
      } else {
        if (wifiSsid) wifiSsid.textContent = "Disconnected";
        if (trayWifiIcon) trayWifiIcon.style.opacity = "0.4";
      }
      if (typeof synthSound === "function") synthSound("click");
    });
  }

  const btPill = document.getElementById("qs-bluetooth");
  const btStatus = document.getElementById("qs-bluetooth-status");

  if (btPill) {
    btPill.addEventListener("click", () => {
      const isActive = btPill.classList.toggle("active");
      if (btStatus) btStatus.textContent = isActive ? "On" : "Not connected";
      if (typeof synthSound === "function") synthSound("click");
    });
  }

  const airplanePill = document.getElementById("qs-airplane");
  if (airplanePill) {
    airplanePill.addEventListener("click", () => {
      const isActive = airplanePill.classList.toggle("active");
      if (isActive) {
        if (wifiPill && wifiPill.classList.contains("active")) wifiPill.click();
        if (btPill && btPill.classList.contains("active")) btPill.click();
      }
      if (typeof synthSound === "function") synthSound("click");
    });
  }

  const energyPill = document.getElementById("qs-energy");
  if (energyPill) {
    energyPill.addEventListener("click", () => {
      energyPill.classList.toggle("active");
      if (typeof synthSound === "function") synthSound("click");
    });
  }

  const accessPill = document.getElementById("qs-access");
  if (accessPill) {
    accessPill.addEventListener("click", () => {
      accessPill.classList.toggle("active");
      if (typeof synthSound === "function") synthSound("click");
    });
  }

  const captionsPill = document.getElementById("qs-captions");
  if (captionsPill) {
    captionsPill.addEventListener("click", () => {
      captionsPill.classList.toggle("active");
      if (typeof synthSound === "function") synthSound("click");
    });
  }
}
