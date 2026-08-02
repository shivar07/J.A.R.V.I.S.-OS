let focusInterval = null;
let focusTimeRemaining = 0; // in seconds
let isFocusActive = false;

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
  if (energyPill) {
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
