let highestZ = 10;
const originalSizes = {};

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
