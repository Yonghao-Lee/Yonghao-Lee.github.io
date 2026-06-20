import { useState } from 'react'

// Pixel-art striding lion in the style of the glazed-brick lions on the
// Processional Way / Ishtar Gate of Babylon — a gold lion on lapis-blue brick.
// Each character in the map is one square "pixel":
//   M = mane   B = body (gold)   H = face highlight   E = eye
//   W = teeth / claws   . / space = empty (shows the blue brick behind)

const ART = [
  '..............................',
  '....MMM................BBB....',
  '...MMMMM.............BBBBB....',
  '...MMMMM...BBBBBBBB..BBBB.....',
  '..MMMMMMM.BBBBBBBBBBBBBBB.....',
  '..MMMMMMMBBBBBBBBBBBBBBBB.....',
  '.MMMHHHMMBBBBBBBBBBBBBBBB.....',
  '.MMHHEHHMBBBBBBBBBBBBBBBB.....',
  'WMHHHHHHMBBBBBBBBBBBBBBBB.....',
  'WWHHHHHHMBBBBBBBBBBBBBBBB.....',
  'WMMHHHMMMBBBBBBBBBBBBBBBB.....',
  '.MMMMMMMMBBBBBBBBBBBBBBBB.....',
  '..MMMMMMBBBBBBBBBBBBBBBB......',
  '..BBB..BBB......BBB...BBB.....',
  '..BBB..BBB......BBB...BBB.....',
  '..BBB..BBB......BBB...BBB.....',
  '..WWW..WWW......WWW...WWW.....',
]

const COLORS = {
  M: '#9a531a', // mane (deep amber)
  B: '#e0a23c', // body (gold glaze)
  H: '#f3cd79', // face highlight
  E: '#231405', // eye
  W: '#f4ecdc', // teeth / claws (cream)
}

const TILE = '#1c4a8c' // lapis-lazuli glazed brick backdrop
const MORTAR = '#2b5ea6' // lighter lines hinting at courses of brick

const COLS = Math.max(...ART.map((r) => r.length))
const ROWS = ART.length

export default function PixelLion({ width = 132 }) {
  const [roar, setRoar] = useState(false)

  const pixels = []
  ART.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const fill = COLORS[row[x]]
      if (fill) {
        pixels.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />)
      }
    }
  })

  // Faint horizontal "mortar" lines to suggest courses of glazed brick.
  const courses = []
  for (let y = 3; y < ROWS; y += 3) {
    courses.push(
      <rect key={`c${y}`} x="0" y={y - 0.06} width={COLS} height="0.12" fill={MORTAR} />,
    )
  }

  const trigger = () => {
    if (roar) return
    setRoar(true)
    setTimeout(() => setRoar(false), 520)
  }

  return (
    <button
      type="button"
      className={`pixel-lion${roar ? ' is-roaring' : ''}`}
      onClick={trigger}
      aria-label="Striding lion from the Ishtar Gate of Babylon — click for a little roar"
    >
      <svg viewBox={`0 0 ${COLS} ${ROWS}`} width={width} shapeRendering="crispEdges" aria-hidden="true">
        <rect x="0" y="0" width={COLS} height={ROWS} fill={TILE} />
        {courses}
        {pixels}
      </svg>
    </button>
  )
}
