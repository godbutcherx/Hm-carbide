// HM Carbide — Particle Background + Custom Cursor
(function () {

  // ── PARTICLE BACKGROUND ────────────────────────
  const canvas = document.createElement('canvas');
  canvas.id = 'hmc-bg-canvas';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const mouse = { x: -9999, y: -9999 };

  const WAKE_RADIUS = 120;
  const GAP         = 26;
  const FLOAT_SPEED = 0.0005;

  class Particle {
    constructor(x, y) {
      this.ox = x + (Math.random() - 0.5) * 8;
      this.oy = y + (Math.random() - 0.5) * 8;
      this.x  = this.ox;
      this.y  = this.oy;
      this.phase  = Math.random() * Math.PI * 2;
      this.size   = 0.7 + Math.random() * 0.9;
      this.alpha  = 0;
      this.targetA = 0;
      this.vx = 0;
      this.vy = 0;
      const v = 180 + Math.floor(Math.random() * 60);
      this.color = `${v},${v},${v + 6}`;
    }

    update(t) {
      const dx   = mouse.x - this.ox;
      const dy   = mouse.y - this.oy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < WAKE_RADIUS && mouse.x > 0) {
        const ratio = 1 - dist / WAKE_RADIUS;
        this.targetA = 0.14 + ratio * 0.55;
        const angle = Math.atan2(dy, dx);
        const push  = ratio * 2.0;
        this.vx += Math.cos(angle + Math.PI) * push * 0.055;
        this.vy += Math.sin(angle + Math.PI) * push * 0.055;
      } else {
        this.targetA = 0;
      }

      this.vx += (this.ox - this.x) * 0.055;
      this.vy += (this.oy - this.y) * 0.055;
      this.x  += Math.sin(t * FLOAT_SPEED + this.phase) * 0.10;
      this.y  += Math.cos(t * FLOAT_SPEED + this.phase * 1.3) * 0.09;
      this.vx *= 0.83;
      this.vy *= 0.83;
      this.x  += this.vx;
      this.y  += this.vy;
      this.alpha += (this.targetA - this.alpha) * 0.07;
    }

    draw() {
      if (this.alpha < 0.004) return;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha.toFixed(3)})`;
      ctx.fill();
    }
  }

  function init() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    particles = [];
    const cols = Math.ceil(W / GAP) + 1;
    const rows = Math.ceil(H / GAP) + 1;
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++)
        particles.push(new Particle(c * GAP, r * GAP));
  }

  let t = 0;
  function loop() {
    ctx.clearRect(0, 0, W, H);
    t++;
    particles.forEach(p => { p.update(t); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
  window.addEventListener('resize', init);

  init();
  loop();

})();
