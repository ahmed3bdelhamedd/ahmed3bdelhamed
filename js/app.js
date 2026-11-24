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
    if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function') return;
    const state = ytPlayer.getPlayerState();
    if (state === window.YT.PlayerState.PLAYING) {
      ytPlayer.pauseVideo();
    } else {
      ytPlayer.playVideo();
    }
  }

  // تحميل YouTube IFrame API مرة واحدة
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }

  const prevReady = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = function () {
    if (typeof prevReady === 'function') prevReady();

    ytPlayer = new window.YT.Player('yt-intro-player', {
      videoId: VIDEO_ID,
      width: '100%',
      height: '100%',
      playerVars: {
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        origin: window.location.origin,
      },
      events: {
        onReady: (event) => {
          const vol = event.target.getVolume ? event.target.getVolume() : 100;
          if (volumeBar) volumeBar.value = String(vol);
          const dur = event.target.getDuration ? event.target.getDuration() : 0;
          if (timeDisplay) timeDisplay.textContent = `00:00 / ${formatTime(dur)}`;
        },
        onStateChange: (event) => {
          const playing = event.data === window.YT.PlayerState.PLAYING;
          syncPlayingUI(playing);
          if (playing) {
            startProgressLoop();
          } else {
            stopProgressLoop();
          }
        },
      },
    });
  };

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
