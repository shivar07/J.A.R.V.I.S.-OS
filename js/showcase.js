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
