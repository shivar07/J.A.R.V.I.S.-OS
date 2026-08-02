window.secureComponents = window.secureComponents || {};
window.secureComponents.win_tasks = `
    <div class="window" id="win-tasks" style="width: 420px; height: 480px; top: 15%; left: 35%;">
      <div class="window-header" id="win-tasksheader">
        <div class="window-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
          RoboTasks Scheduler
        </div>
        <div class="window-controls">
          <div class="win-btn win-min" onclick="minimizeWindow('win-tasks')"></div>
          <div class="win-btn win-max" onclick="maximizeWindow('win-tasks')"></div>
          <div class="win-btn win-close" onclick="closeWindow('win-tasks')"></div>
        </div>
      </div>
      <div class="window-content custom-scroll">
        <div class="task-app">
          <h3>TASK PLANNER</h3>
          <div class="task-input-bar">
            <input type="text" id="task-new-input" class="task-input" placeholder="Configure new task..."
              maxlength="60">
            <button id="task-add-btn" class="task-add-btn">ADD</button>
          </div>
          <div class="task-list" id="task-items-container">

          </div>
        </div>
      </div>
    </div>
`;
