const COLORS = [
  '#F8C8DC',
  '#E9A6BE',
  '#DCD6F7',
  '#B9AFE8',
  '#C9E7F2',
  '#F6D9C4',
  '#E7C08A',
  '#FFF8F0',
]

let canvas = null
let ctx = null
let particles = []
let rafId = 0
let lastTime = 0
let dpr = 1

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function resizeCanvas() {
  if (!canvas) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.floor(window.innerWidth * dpr)
  canvas.height = Math.floor(window.innerHeight * dpr)
}

function ensureCanvas() {
  if (canvas) return
  canvas = document.createElement('canvas')
  canvas.className = 'confetti-canvas'
  canvas.setAttribute('aria-hidden', 'true')
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: '500',
  })
  ctx = canvas.getContext('2d')
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  document.body.appendChild(canvas)
}

function teardownCanvas() {
  window.removeEventListener('resize', resizeCanvas)
  canvas?.remove()
  canvas = null
  ctx = null
  particles = []
  rafId = 0
}

function drawHeart(context, size, color) {
  const s = size / 16
  context.save()
  context.scale(s, s)
  context.beginPath()
  context.moveTo(0, 5)
  context.bezierCurveTo(-10, -4, -6, -12, 0, -6)
  context.bezierCurveTo(6, -12, 10, -4, 0, 5)
  context.fillStyle = color
  context.fill()
  context.restore()
}

function drawParticle(p) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.rot)
  ctx.globalAlpha = Math.min(1, p.life / 18)
  ctx.fillStyle = p.color

  if (p.shape === 'heart') {
    drawHeart(ctx, p.size * 1.3, p.color)
  } else if (p.shape === 'circle') {
    ctx.beginPath()
    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
    ctx.fill()
  } else if (p.shape === 'coin') {
    ctx.beginPath()
    ctx.ellipse(0, 0, p.size / 2, p.size / 4, 0, 0, Math.PI * 2)
    ctx.fill()
  } else {
    ctx.beginPath()
    ctx.roundRect(-p.size / 2, -p.size / 4, p.size, p.size / 2, 2)
    ctx.fill()
  }
  ctx.restore()
}

function tick(now) {
  if (!ctx) return
  const delta = Math.min((now - lastTime) / 16.67, 3)
  lastTime = now
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.save()
  ctx.scale(dpr, dpr)

  particles = particles.filter((p) => p.life > 0 && p.y < window.innerHeight + 80)
  for (const p of particles) {
    p.vy += p.gravity * delta
    p.vx *= 0.994
    p.vy *= 0.996
    p.x += p.vx * delta
    p.y += p.vy * delta
    p.rot += p.vr * delta
    p.life -= delta
    drawParticle(p)
  }
  ctx.restore()

  if (particles.length > 0) {
    rafId = requestAnimationFrame(tick)
  } else {
    cancelAnimationFrame(rafId)
    rafId = 0
    teardownCanvas()
  }
}

export function confettiBurst({
  x = window.innerWidth / 2,
  y = window.innerHeight * 0.32,
  count = 70,
  spread = 1,
} = {}) {
  if (typeof window === 'undefined' || prefersReducedMotion()) return
  ensureCanvas()

  for (let i = 0; i < count; i += 1) {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.5
    const speed = (4 + Math.random() * 10) * spread
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed * (0.8 + Math.random() * 0.5),
      vy: Math.sin(angle) * speed,
      size: 5 + Math.random() * 7,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: ['rect', 'rect', 'circle', 'heart', 'coin'][
        Math.floor(Math.random() * 5)
      ],
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.24,
      gravity: 0.16 + Math.random() * 0.08,
      life: 90 + Math.random() * 70,
    })
  }

  if (!rafId) {
    lastTime = performance.now()
    rafId = requestAnimationFrame(tick)
  }
}
