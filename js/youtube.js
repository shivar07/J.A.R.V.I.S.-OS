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

function initYouTubeLab() {
  const feedContainer = document.getElementById("yt-feed-container");
  const playerContainer = document.getElementById("yt-player-container");
  const activeTitle = document.getElementById("yt-video-active-title");
  const activeDesc = document.getElementById("yt-video-active-desc");

  if (!feedContainer || !playerContainer) return;

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
