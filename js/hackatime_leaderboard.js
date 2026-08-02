function renderLeaderboard() {
  const tbody = document.getElementById("hack-lb-tbody");
  const searchInput = document.getElementById("lb-search-input");
  if (!tbody) return;

  tbody.innerHTML = "";

  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  let globalList = [...leaderboardEntries];
  
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

  globalList.sort((a, b) => b.total_seconds - a.total_seconds);
  globalList.forEach((entry, i) => {
    entry.trueRank = i + 1;
  });

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
