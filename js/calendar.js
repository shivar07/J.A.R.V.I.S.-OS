let calCurrentYear = new Date().getFullYear();
let calCurrentMonth = new Date().getMonth();

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
