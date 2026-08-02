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
  
  if (bootScreen) {
    bootScreen.style.display = "flex";
    bootScreen.style.opacity = "1";
  }

  setTimeout(() => {
    if (bootScreen) bootScreen.style.opacity = "0";
    
    setTimeout(() => {
      if (bootScreen) bootScreen.style.display = "none";
      
      runBiosBoot(() => {
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
          // Just pop the weather up
          triggerStartupWelcome();
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
