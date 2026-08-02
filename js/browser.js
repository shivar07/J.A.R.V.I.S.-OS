const chromeStartPageHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {
    margin: 0;
    padding: 36px 20px;
    background: #0f1117;
    color: #e5e9f0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    text-align: center;
    box-sizing: border-box;
  }
  .header {
    font-size: 26px;
    font-weight: 800;
    background: linear-gradient(135deg, #00f0ff, #ff2f8e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 6px;
    letter-spacing: 1px;
  }
  .sub {
    font-size: 11px;
    color: #8892b0;
    margin-bottom: 26px;
    font-family: monospace;
  }
  .search-box {
    display: flex;
    max-width: 460px;
    margin: 0 auto 28px auto;
    background: #1a1d26;
    border: 1px solid #2e3444;
    border-radius: 20px;
    padding: 4px 6px 4px 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  }
  .search-box input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: #fff;
    font-size: 13px;
  }
  .search-box button {
    background: #00f0ff;
    border: none;
    color: #0f1117;
    border-radius: 14px;
    padding: 6px 16px;
    font-size: 11px;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.15s;
  }
  .search-box button:hover {
    opacity: 0.9;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 14px;
    max-width: 560px;
    margin: 0 auto;
  }
  .card {
    background: #161922;
    border: 1px solid #262c3d;
    border-radius: 10px;
    padding: 16px 10px;
    text-decoration: none;
    color: #e5e9f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s, border-color 0.2s, background 0.2s;
  }
  .card:hover {
    transform: translateY(-3px);
    border-color: #00f0ff;
    background: #1f2433;
  }
  .icon {
    font-size: 24px;
    margin-bottom: 6px;
  }
  .title {
    font-size: 11px;
    font-weight: 600;
  }
</style>
</head>
<body>
  <div class="header">Chrome Web Gateway</div>
  <div class="sub">Verified Iframe-Compatible Web Telemetry Portal</div>
  
  <form class="search-box" onsubmit="event.preventDefault(); var q = document.getElementById('q').value; if(q) window.location.href = 'https://en.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(q);">
    <input type="text" id="q" placeholder="Search Wikipedia encyclopedia..." required>
    <button type="submit">Search</button>
  </form>

  <div class="grid">
    <a class="card" href="https://en.wikipedia.org/wiki/Main_Page">
      <div class="icon">🌐</div>
      <div class="title">Wikipedia</div>
    </a>
    <a class="card" href="https://hackclub.com">
      <div class="icon">🚀</div>
      <div class="title">Hack Club</div>
    </a>
    <a class="card" href="https://archive.org">
      <div class="icon">📜</div>
      <div class="title">Internet Archive</div>
    </a>
    <a class="card" href="https://openlibrary.org">
      <div class="icon">📚</div>
      <div class="title">Open Library</div>
    </a>
  </div>
</body>
</html>`;

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

  function createTab(url = "chrome://newtab") {
    const tabId = nextTabId++;
    
    let isNewTab = url === "chrome://newtab";
    let cleanUrl = isNewTab ? "chrome://newtab" : url;
    if (!isNewTab && !/^https?:\/\//i.test(cleanUrl)) {
      cleanUrl = "https://" + cleanUrl;
    }

    let tabTitle = isNewTab ? "New Tab" : "Web Page";
    try {
      if (isNewTab) tabTitle = "New Tab";
      else if (cleanUrl.includes("wikipedia.org")) tabTitle = "Wikipedia";
      else if (cleanUrl.includes("hackclub.com")) tabTitle = "Hack Club";
      else if (cleanUrl.includes("archive.org")) tabTitle = "Archive";
      else if (cleanUrl.includes("openlibrary.org")) tabTitle = "Open Library";
      else if (cleanUrl.includes("w3schools.com")) tabTitle = "W3Schools";
      else if (cleanUrl.includes("github.com")) tabTitle = "GitHub";
      else {
        const host = new URL(cleanUrl).hostname.replace("www.", "");
        tabTitle = host.charAt(0).toUpperCase() + host.slice(1);
      }
    } catch(e) {
      tabTitle = "Web Page";
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
    if (isNewTab) {
      iframe.srcdoc = chromeStartPageHtml;
    } else {
      iframe.src = cleanUrl;
    }
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

    tab.url = inputUrl;
    
    try {
      if (inputUrl === "chrome://newtab") {
        tab.title = "New Tab";
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
      if (inputUrl === "chrome://newtab") {
        iframe.srcdoc = chromeStartPageHtml;
      } else {
        iframe.src = inputUrl;
      }
    }
  }

  if (newTabBtn) {
    newTabBtn.addEventListener("click", () => {
      createTab("chrome://newtab");
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      if (activeTabId) {
        addressInput.value = "chrome://newtab";
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

  createTab();
}
