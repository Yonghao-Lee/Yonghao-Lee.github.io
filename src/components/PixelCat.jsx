import { useState } from 'react'

// A small pixel-art cat mascot, drawn from an ASCII map so it's easy to tweak.
// Each character becomes one square "pixel":
//   B = body   E = eye   P = nose   . / space = empty
// It sits fixed in the bottom-left corner with a gentle idle bob.

const ART = [
  '..B........B..',
  '..BB......BB..',
  '..BBBB..BBBB..',
  '..BBBBBBBBBB..',
  '.BBBBBBBBBBBB.',
  '.BBEBBBBBBEBB.',
  '.BBBBBBBBBBBB.',
  '.BBBBBPPBBBBB.',
  '.BBBBBBBBBBBB.',
  '..BBBBBBBBBB..',
  '..BBBBBBBBBBB.',
  '..BBBBBBBBBBBB',
  '..BB...BB..BB.',
  '..BB...BB.....',
]

const COLORS = {
  B: '#ffb04d', // orange tabby body
  E: '#5be37a', // glowing green eyes
  P: '#ff5d9e', // pink nose
}

const COLS = ART[0].length
const ROWS = ART.length

// variant: 'corner' (small mascot, bottom-left) or 'center' (large faint
// background watermark). width: rendered size in px.
export default function PixelCat({ variant = 'corner', width = 92 }) {
  const [pouncing, setPouncing] = useState(false)
  const interactive = variant === 'corner'

  const pixels = []
  ART.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x]
      const fill = COLORS[ch]
      if (fill) {
        pixels.push(
          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />,
        )
      }
    }
  })

  // A quick playful hop when the corner mascot is clicked.
  const pounce = () => {
    if (!interactive || pouncing) return
    setPouncing(true)
    setTimeout(() => setPouncing(false), 520)
  }

  return (
    <div
      className={`pixel-cat pixel-cat--${variant}${pouncing ? ' is-pouncing' : ''}`}
      aria-hidden="true"
      onClick={pounce}
    >
      <svg
        viewBox={`0 0 ${COLS} ${ROWS}`}
        width={width}
        shapeRendering="crispEdges"
      >
        {pixels}
      </svg>
    </div>
  )
}
