import { useEffect, useRef, useState } from 'react'
import './RunnerGame.css'

// A small endless-runner (Chrome-dino style) starring the site's pixel cat.
// Drawn on a <canvas> at a fixed 600x180 logical resolution and scaled by CSS,
// so gameplay is identical everywhere. Colours come from the site's CSS theme
// tokens, so it follows the light/dark toggle. Every 100 points the scene flips
// between day (colourful) and night (inverted), like the original.

const W = 600
const H = 180
const GROUND_Y = 150
const HI_KEY = 'chicory-runner-hi'

export default function RunnerGame() {
  const canvasRef = useRef(null)
  const [phase, setPhase] = useState('idle') // idle | playing | over (for a11y text)
  const phaseRef = useRef('idle')

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = false

    // ---- palette (re-read when the site theme toggles) ----------------------
    const palette = {}
    const readPalette = () => {
      const cs = getComputedStyle(document.documentElement)
      const get = (n, f) => cs.getPropertyValue(n).trim() || f
      palette.bg = get('--bg', '#181425')
      palette.fg = get('--text', '#f4f4f4')
      palette.accent = get('--green', '#5be37a')
      palette.accent2 = get('--pink', '#ff5d9e')
      palette.muted = get('--muted', '#a59fd6')
    }
    readPalette()
    const themeObs = new MutationObserver(readPalette)
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    // Fixed star field for night (positions stable across frames).
    const stars = Array.from({ length: 16 }, () => ({
      x: Math.random() * W,
      y: 10 + Math.random() * 80,
    }))

    // ---- game state ---------------------------------------------------------
    let hi = Number(localStorage.getItem(HI_KEY) || 0)

    function freshState() {
      return {
        catY: 0,
        vy: 0,
        speed: 5,
        score: 0,
        obstacles: [],
        clouds: [
          { x: 480, y: 40 },
          { x: 180, y: 28 },
        ],
        nextSpawn: 320,
        legFrame: 0,
        legTimer: 0,
      }
    }
    let g = freshState()

    const setPhaseBoth = (p) => {
      phaseRef.current = p
      setPhase(p)
    }
    function start() {
      g = freshState()
      setPhaseBoth('playing')
    }
    function action() {
      const p = phaseRef.current
      if (p === 'idle' || p === 'over') start()
      else if (p === 'playing' && g.catY === 0) g.vy = -10.5
    }

    function spawnObstacle() {
      const kind = Math.random()
      let w, h
      if (kind < 0.5) { w = 16; h = 28 }
      else if (kind < 0.8) { w = 26; h = 38 }
      else { w = 40; h = 30 }
      g.obstacles.push({ x: W + 10, w, h })
    }

    // ---- drawing helpers ----------------------------------------------------
    function px(x, y, w, h, color) {
      ctx.fillStyle = color
      ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h))
    }

    function drawCat(x, y, frame, body, eye) {
      px(x - 6, y + 6, 5, 5, body) // tail
      px(x - 8, y + 1, 5, 5, body)
      px(x, y + 6, 30, 14, body) // body
      px(x + 2, y + 3, 26, 6, body)
      px(x + 26, y - 2, 12, 12, body) // head
      px(x + 27, y - 7, 4, 5, body) // ears
      px(x + 34, y - 7, 4, 5, body)
      px(x + 33, y + 2, 3, 3, eye) // eye notch
      if (frame === 0) {
        px(x + 3, y + 20, 5, 7, body)
        px(x + 20, y + 20, 5, 5, body)
      } else {
        px(x + 3, y + 20, 5, 5, body)
        px(x + 20, y + 20, 5, 7, body)
      }
    }

    function drawCactus(o, color) {
      px(o.x, GROUND_Y - o.h, o.w, o.h, color)
      if (o.w <= 26) {
        px(o.x - 5, GROUND_Y - o.h + 8, 5, 4, color)
        px(o.x + o.w, GROUND_Y - o.h + 14, 5, 4, color)
      }
    }

    function drawText(s, x, y, color, size = 12, align = 'left') {
      ctx.fillStyle = color
      ctx.font = `${size}px "Press Start 2P", monospace`
      ctx.textAlign = align
      ctx.textBaseline = 'top'
      ctx.fillText(s, x, y)
    }

    // ---- main loop ----------------------------------------------------------
    let raf = 0
    let last = performance.now()
    let running = true

    function frame(now) {
      if (!running) return
      let dt = (now - last) / 16.667
      if (dt > 3) dt = 3
      last = now

      // Day/night flips every 100 points; night inverts paper/ink.
      const night = Math.floor(g.score / 100) % 2 === 1
      const paper = night ? palette.fg : palette.bg
      const ink = night ? palette.bg : palette.fg
      const catColor = night ? ink : palette.accent
      const cactusColor = night ? ink : palette.accent2
      const dim = night ? ink : palette.muted

      px(0, 0, W, H, paper)

      // sky: clouds by day, moon + stars by night
      if (night) {
        for (const s of stars) px(s.x, s.y, 2, 2, ink)
        px(508, 24, 16, 16, ink) // moon
        px(512, 24, 8, 16, paper) // crescent bite
      } else {
        for (const cl of g.clouds) {
          cl.x -= (phaseRef.current === 'playing' ? 0.4 : 0.15) * dt
          if (cl.x < -40) { cl.x = W + 20; cl.y = 20 + Math.random() * 45 }
          px(cl.x, cl.y, 22, 6, palette.muted)
          px(cl.x + 6, cl.y - 4, 12, 5, palette.muted)
        }
      }

      // ground
      px(0, GROUND_Y + 1, W, 2, ink)
      const dashOffset = (g.score * 2) % 24
      for (let i = -1; i < W / 24 + 1; i++) px(i * 24 - dashOffset, GROUND_Y + 6, 10, 2, dim)

      if (phaseRef.current === 'playing') {
        g.vy += 0.6 * dt
        g.catY += g.vy * dt
        if (g.catY > 0) { g.catY = 0; g.vy = 0 }

        g.speed += 0.0016 * dt
        g.score += g.speed * 0.18 * dt

        g.nextSpawn -= g.speed * dt
        if (g.nextSpawn <= 0) {
          spawnObstacle()
          const gap = 260 + Math.random() * 220 - Math.min(g.speed * 8, 120)
          g.nextSpawn = Math.max(170, gap)
        }

        const catX = 60
        const catTop = GROUND_Y - 30 + g.catY
        const catBox = { x: catX + 2, y: catTop - 8, w: 34, h: 38 }
        for (const o of g.obstacles) o.x -= g.speed * dt
        g.obstacles = g.obstacles.filter((o) => o.x + o.w > -10)
        for (const o of g.obstacles) {
          const ob = { x: o.x + 2, y: GROUND_Y - o.h, w: o.w - 4, h: o.h }
          if (
            catBox.x < ob.x + ob.w &&
            catBox.x + catBox.w > ob.x &&
            catBox.y < ob.y + ob.h &&
            catBox.y + catBox.h > ob.y
          ) {
            if (g.score > hi) {
              hi = Math.floor(g.score)
              localStorage.setItem(HI_KEY, String(hi))
            }
            setPhaseBoth('over')
          }
        }

        g.legTimer += dt
        if (g.legTimer > 4) { g.legTimer = 0; g.legFrame ^= 1 }
      }

      for (const o of g.obstacles) drawCactus(o, cactusColor)
      const onGround = g.catY === 0 && phaseRef.current === 'playing'
      drawCat(60, GROUND_Y - 30 + g.catY, onGround ? g.legFrame : 0, catColor, paper)

      drawText(`HI ${String(Math.floor(hi)).padStart(5, '0')}`, W - 12, 12, dim, 10, 'right')
      drawText(`${String(Math.floor(g.score)).padStart(5, '0')}`, W - 12, 28, ink, 10, 'right')

      if (phaseRef.current === 'idle') {
        drawText('CHICORY RUN', W / 2, 56, night ? ink : palette.accent, 14, 'center')
        drawText('press space or tap to play', W / 2, 84, dim, 9, 'center')
        drawText('jump the cacti', W / 2, 104, dim, 9, 'center')
      } else if (phaseRef.current === 'over') {
        drawText('GAME OVER', W / 2, 60, night ? ink : palette.accent2, 14, 'center')
        drawText('press space or tap to retry', W / 2, 88, dim, 9, 'center')
      }

      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    // ---- input --------------------------------------------------------------
    const container = canvas.parentElement
    function onKey(e) {
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault()
        action()
      }
    }
    function onPointer(e) {
      e.preventDefault()
      container.focus()
      action()
    }
    container.addEventListener('keydown', onKey)
    canvas.addEventListener('pointerdown', onPointer)

    function onVisibility() {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!running) {
        running = true
        last = performance.now()
        raf = requestAnimationFrame(frame)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      themeObs.disconnect()
      container.removeEventListener('keydown', onKey)
      canvas.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('visibilitychange', onVisibility)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="runner">
      <div
        className="runner__screen"
        tabIndex={0}
        role="application"
        aria-label="Chicory Run — a small jumping game. Focus and press space or tap to play."
      >
        <canvas ref={canvasRef} width={W} height={H} className="runner__canvas" />
      </div>
      <p className="runner__hint" aria-live="polite">
        {phase === 'playing'
          ? 'Jump the cacti — space / ↑ / tap. The world flips to night every 100 points.'
          : phase === 'over'
            ? 'Game over. Press space or tap to try again.'
            : 'Click the screen, then press space (or tap) to play.'}
      </p>
    </div>
  )
}
