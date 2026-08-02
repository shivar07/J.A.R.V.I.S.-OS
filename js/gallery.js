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
    if (currentFolderLabel) currentFolderLabel.textContent = folderName;
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
  if (caption) caption.textContent = captionText;
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
  if (titleEl) titleEl.textContent = title;
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
