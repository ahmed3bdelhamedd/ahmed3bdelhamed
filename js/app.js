/* ==================== INTRO SCREEN (FORCE CLOSE) ==================== */
(function initIntroScreen() {
  const introScreen = document.getElementById('intro-screen');
  const skipBtn = document.getElementById('intro-skip-btn');
  if (!introScreen) return;

  let isHidden = false;
  let autoHideTimer = null;

  function hideIntro() {
    if (isHidden) return;
    isHidden = true;
    if (autoHideTimer) clearTimeout(autoHideTimer);

    introScreen.style.transition = 'opacity 0.25s ease';
    introScreen.style.opacity = '0';
    introScreen.style.visibility = 'hidden';
    introScreen.style.pointerEvents = 'none';

    setTimeout(() => {
      introScreen.style.setProperty('display', 'none', 'important');
    }, 260);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hideIntro();
    });
  }

  autoHideTimer = setTimeout(hideIntro, 1800);
})();

/* ==================== REVEAL ITEMS ON SCROLL & LOAD ==================== */
(function initRevealItems() {
  const items = document.querySelectorAll('.reveal-item');
  if (!items.length) return;

  function showElement(el) {
    el.classList.add('visible', 'revealed', 'is-visible', 'active', 'show');
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.visibility = 'visible';
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    items.forEach((item) => observer.observe(item));
  }

  setTimeout(() => {
    items.forEach(showElement);
  }, 500);
})();

/* ==================== STARRY PARTICLE CANVAS ==================== */
(function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(75, Math.floor((width * height) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.6 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(148, 163, 184, ${p.alpha})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
})();

/* ==================== CUSTOM INTRO VIDEO PLAYER ==================== */
(function initCustomIntroVideo() {
  const VIDEO_ID = 'YUjKYepiFJo';
  const playerHost = document.getElementById('yt-intro-player');
  if (!playerHost) return;

  const surfaceToggle = document.getElementById('video-surface-toggle');
  const centerPlayBtn = document.getElementById('center-play-btn');
  const barPlayBtn = document.getElementById('bar-play-btn');
  const barPlayLabel = document.getElementById('bar-play-label');
  const seekBar = document.getElementById('video-seek-bar');
  const timeDisplay = document.getElementById('video-time-display');
  const muteBtn = document.getElementById('bar-mute-btn');
  const muteLabel = document.getElementById('bar-mute-label');
  const volumeBar = document.getElementById('video-volume-bar');
  const fullscreenBtn = document.getElementById('bar-fullscreen-btn');
  const videoFrame = document.getElementById('intro-video-frame');

  let ytPlayer = null;
  let progressTimer = null;
  let isSeeking = false;

  function formatTime(sec) {
    if (!Number.isFinite(sec) || sec < 0) return '00:00';
    const total = Math.floor(sec);
    const mins = Math.floor(total / 60);
    const rem = total % 60;
    return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  }

  function syncPlayingUI(isPlaying) {
    if (barPlayLabel) barPlayLabel.textContent = isPlaying ? 'Pause' : 'Play';
    if (centerPlayBtn) {
      centerPlayBtn.style.opacity = isPlaying ? '0' : '1';
      centerPlayBtn.style.pointerEvents = isPlaying ? 'none' : 'auto';
    }
  }

  function startProgressLoop() {
    stopProgressLoop();
    progressTimer = setInterval(() => {
      if (!ytPlayer || typeof ytPlayer.getCurrentTime !== 'function') return;
      const current = ytPlayer.getCurrentTime() || 0;
      const duration = ytPlayer.getDuration() || 0;

      if (timeDisplay) {
        timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
      }
      if (seekBar && !isSeeking && duration > 0) {
        seekBar.value = String((current / duration) * 100);
      }
    }, 250);
  }

  function stopProgressLoop() {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  }

  function togglePlayPause() {
    if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function' || !window.YT) return;
    const state = ytPlayer.getPlayerState();
    if (state === window.YT.PlayerState.PLAYING) {
      ytPlayer.pauseVideo();
    } else {
      ytPlayer.playVideo();
    }
  }

  function createPlayer() {
    if (ytPlayer || !window.YT || !window.YT.Player) return;

    const vars = {
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      playsinline: 1,
    };

    if (window.location.protocol.startsWith('http')) {
      vars.origin = window.location.origin;
    }

    ytPlayer = new window.YT.Player('yt-intro-player', {
      videoId: VIDEO_ID,
      width: '100%',
      height: '100%',
      playerVars: vars,
      events: {
        onReady: (event) => {
          const vol = event.target.getVolume ? event.target.getVolume() : 100;
          if (volumeBar) volumeBar.value = String(vol);
          const dur = event.target.getDuration ? event.target.getDuration() : 0;
          if (timeDisplay) timeDisplay.textContent = `00:00 / ${formatTime(dur)}`;
        },
        onStateChange: (event) => {
          const playing = window.YT && event.data === window.YT.PlayerState.PLAYING;
          syncPlayingUI(playing);
          if (playing) {
            startProgressLoop();
          } else {
            stopProgressLoop();
          }
        },
      },
    });
  }

  if (window.YT && window.YT.Player) {
    createPlayer();
  } else {
    const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existingScript) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }
    const prevReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof prevReady === 'function') prevReady();
      createPlayer();
    };
  }

  if (surfaceToggle) {
    surfaceToggle.addEventListener('click', togglePlayPause);
    surfaceToggle.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  if (centerPlayBtn) {
    centerPlayBtn.addEventListener('click', togglePlayPause);
  }
  if (barPlayBtn) {
    barPlayBtn.addEventListener('click', togglePlayPause);
  }

  if (seekBar) {
    seekBar.addEventListener('input', () => {
      isSeeking = true;
    });
    seekBar.addEventListener('change', () => {
      if (ytPlayer && typeof ytPlayer.getDuration === 'function') {
        const duration = ytPlayer.getDuration() || 0;
        const targetSec = (Number(seekBar.value) / 100) * duration;
        ytPlayer.seekTo(targetSec, true);
      }
      isSeeking = false;
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      if (!ytPlayer || typeof ytPlayer.isMuted !== 'function') return;
      if (ytPlayer.isMuted()) {
        ytPlayer.unMute();
        if (muteLabel) muteLabel.textContent = 'Mute';
      } else {
        ytPlayer.mute();
        if (muteLabel) muteLabel.textContent = 'Unmute';
      }
    });
  }

  if (volumeBar) {
    volumeBar.addEventListener('input', () => {
      if (!ytPlayer || typeof ytPlayer.setVolume !== 'function') return;
      const val = Number(volumeBar.value);
      ytPlayer.setVolume(val);
      if (val === 0 && ytPlayer.mute) {
        ytPlayer.mute();
        if (muteLabel) muteLabel.textContent = 'Unmute';
      } else if (ytPlayer.unMute) {
        ytPlayer.unMute();
        if (muteLabel) muteLabel.textContent = 'Mute';
      }
    });
  }

  if (fullscreenBtn && videoFrame) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        videoFrame.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    });
  }
})();

/* ==================== MOBILE DRAWER & SMOOTH SCROLL ==================== */
(function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close-btn');
  const drawer = document.getElementById('mobile-menu-drawer');
  const backdrop = document.getElementById('mobile-backdrop');

  function setDrawerState(open) {
    if (!drawer || !backdrop) return;
    drawer.classList.toggle('is-open', open);
    drawer.classList.toggle('open', open);
    backdrop.classList.toggle('is-visible', open);
    backdrop.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    backdrop.setAttribute('aria-hidden', String(!open));
    if (menuBtn) menuBtn.setAttribute('aria-expanded', String(open));
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => setDrawerState(true));
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => setDrawerState(false));
  }
  if (backdrop) {
    backdrop.addEventListener('click', () => setDrawerState(false));
  }

  document.querySelectorAll('#mobile-menu-drawer a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => setDrawerState(false));
  });

  const floatBtn = document.getElementById('floating-scroll-btn');
  if (floatBtn) {
    floatBtn.addEventListener('click', () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 250;
      window.scrollTo({
        top: nearBottom ? 0 : document.body.scrollHeight,
        behavior: 'smooth',
      });
    });
  }
})();

/* ==================== THEME & LANGUAGE TOGGLES ==================== */
(function initThemeAndLang() {
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
  }

  document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light');
      localStorage.setItem('portfolio_theme', isLight ? 'light' : 'dark');
    });
  });

  let currentLang = localStorage.getItem('portfolio_lang') || 'en';

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-label').forEach((el) => {
      el.textContent = lang === 'ar' ? 'en' : 'ar';
    });

    if (lang === 'ar' && typeof window.TRANSLATIONS !== 'undefined' && window.TRANSLATIONS.ar) {
      const dict = window.TRANSLATIONS.ar;
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const keys = el.getAttribute('data-i18n').split('.');
        let val = dict;
        for (const k of keys) val = val && val[k];
        if (typeof val === 'string') el.textContent = val;
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const keys = el.getAttribute('data-i18n-placeholder').split('.');
        let val = dict;
        for (const k of keys) val = val && val[k];
        if (typeof val === 'string') el.setAttribute('placeholder', val);
      });
    }
  }

  applyTranslations(currentLang);

  document.querySelectorAll('.lang-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      localStorage.setItem('portfolio_lang', nextLang);
      if (nextLang === 'en') {
        window.location.reload();
        return;
      }
      currentLang = nextLang;
      applyTranslations(currentLang);
    });
  });
})();

/* ==================== CERTIFICATES CAROUSEL & MODALS ==================== */
const CERTIFICATES = [
  {
    title: 'Financial Inclusion Session, Banking Operations & Bank Branch Training',
    issuer: 'Certificate of Achievement',
    detail: 'Banking operations, financial inclusion, customer service, and branch compliance.',
    image: 'images/1.jpg',
  },
  {
    title: 'Excel Management Accounting & Financial Analysis',
    issuer: 'Verified Certificate',
    detail: 'Management accounting, financial reporting, SAP FICO workflows, and data validation.',
    image: 'images/2.jpg',
  },
  {
    title: 'Banking Credit Course — Egyptian Banking Institute (EBI)',
    issuer: 'Egyptian Banking Institute',
    detail: 'Credit principles, banking operations, and financial risk fundamentals.',
    image: 'images/3.jpg',
  },
];

let certIndex = 0;

function renderCertificate() {
  const cert = CERTIFICATES[certIndex] || CERTIFICATES[0];
  if (!cert) return;

  const counterEl = document.getElementById('cert-counter');
  const imgEl = document.getElementById('cert-img');
  const titleEl = document.getElementById('cert-title');
  const issuerEl = document.getElementById('cert-issuer');
  const detailEl = document.getElementById('cert-detail');
  const dotsEl = document.getElementById('cert-dots');

  if (counterEl) {
    counterEl.textContent = `${String(certIndex + 1).padStart(2, '0')} / ${String(CERTIFICATES.length).padStart(2, '0')}`;
  }
  if (imgEl) {
    imgEl.src = cert.image;
    imgEl.alt = cert.title;
  }
  if (titleEl) titleEl.textContent = cert.title;
  if (issuerEl) issuerEl.textContent = cert.issuer;
  if (detailEl) detailEl.textContent = cert.detail;

  if (dotsEl) {
    dotsEl.innerHTML = '';
    CERTIFICATES.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.ariaLabel = `Certificate ${idx + 1}`;
      dot.className = `w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
        idx === certIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
      }`;
      dot.addEventListener('click', () => {
        certIndex = idx;
        renderCertificate();
      });
      dotsEl.appendChild(dot);
    });
  }
}

function nextCertificate() {
  certIndex = (certIndex + 1) % CERTIFICATES.length;
  renderCertificate();
}

function prevCertificate() {
  certIndex = (certIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length;
  renderCertificate();
}

function openCertModal() {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('cert-modal-img');
  const cert = CERTIFICATES[certIndex];
  if (modal && modalImg && cert) {
    modalImg.src = cert.image;
    modal.classList.add('active', 'open');
  }
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (modal) {
    modal.classList.remove('active', 'open');
  }
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active', 'open');
  }
}

renderCertificate();
setInterval(nextCertificate, 4000);

/* ==================== CONTACT FORM (TELEGRAM) ==================== */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status-msg');
  if (!form || !statusEl) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    if (!name || !email || !message) {
      statusEl.textContent = 'Please fill in all required fields.';
      return;
    }

    const BOT_TOKEN = '';
    const CHAT_ID = '';

    if (!BOT_TOKEN || !CHAT_ID) {
      statusEl.textContent = 'Message validated. Configure Telegram Bot Token & Chat ID in js/app.js to deliver messages.';
      form.reset();
      return;
    }

    const text = [
      'New Portfolio Message:',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'N/A'}`,
      `Message: ${message}`,
    ].join('\n');

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });

      if (res.ok) {
        statusEl.textContent = 'Message sent successfully.';
        form.reset();
      } else {
        statusEl.textContent = 'Failed to send message. Please try again.';
      }
    } catch {
      statusEl.textContent = 'Network error while sending message.';
    }
  });
})();
