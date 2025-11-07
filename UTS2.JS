const bgm = document.getElementById('bgmusic');
const btn = document.getElementById('playbtn');

// Fungsi play / pause
btn.addEventListener('click', () => {
  if (bgm.paused) {
    bgm.play();
    btn.textContent = '⏸ Pause Music';
  } else {
    bgm.pause();
    btn.textContent = '▶ Play Music';
  }
});

// Auto play setelah halaman dimuat
window.addEventListener('load', () => {
  // beberapa browser butuh interaksi dulu, jadi amanin pakai try-catch
  try {
    bgm.volume = 0.5; // volume setengah biar halus
    bgm.play().catch(() => {
      // kalau browser blokir autoplay, tombol tetap aktif
      btn.textContent = '▶ Play Music';
    });
  } catch (e) {
    console.log('Autoplay tidak diizinkan oleh browser:', e);
  }
});