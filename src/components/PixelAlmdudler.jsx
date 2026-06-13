import { useState } from 'react'

// A small pixel-art Almdudler bottle — Yonghao's freeCodeCamp handle and
// favourite Austrian herbal soda. Each character in the map is one square
// "pixel":
//   K/C = gold cap   N = neck   G = amber soda   H = glass shine
//   o = bubble   L = label   R = red band   E = green accent   D = base
//   . / space = empty
// It sits fixed in the bottom-right corner with a gentle idle bob; click to fizz.

const ART = [
  '....KKK....',
  '....CCC....',
  '....NNN....',
  '....NNN....',
  '...GGGGG...',
  '..HGGGGGG..',
  '..HGGGGGG..',
  '..HGGoGGG..',
  '..HGGGGGG..',
  '..HGGGGGG..',
  '..LLLLLLL..',
  '..RRRRRRR..',
  '..LLEELLL..',
  '..LLLLLLL..',
  '..HGGGGGG..',
  '..HGGoGGG..',
  '..HGGGGGG..',
  '..HGGGGoG..',
  '..HGGGGGG..',
  '..HGGGGGG..',
  '...GGGGG...',
  '...DDDDD...',
]

const COLORS = {
  K: '#f4c542', // cap highlight (gold)
  C: '#d9a521', // cap
  N: '#e6a23c', // neck (amber glass)
  G: '#cf7f24', // amber soda
  H: '#f0c980', // glass shine
  o: '#f6dca6', // rising bubble
  L: '#f6f1e7', // label cream
  R: '#c43d2e', // label red band
  E: '#3f9e5a', // label green accent
  D: '#9a5b16', // base shadow
}

const COLS = ART[0].length
const ROWS = ART.length

export default function PixelAlmdudler({ width = 64 }) {
  const [fizzing, setFizzing] = useState(false)

  const pixels = []
  ART.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const fill = COLORS[row[x]]
      if (fill) {
        pixels.push(
          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />,
        )
      }
    }
  })

  // A quick playful fizz when clicked.
  const fizz = () => {
    if (fizzing) return
    setFizzing(true)
    setTimeout(() => setFizzing(false), 520)
  }

  return (
    <div
      className={`pixel-almdudler${fizzing ? ' is-fizzing' : ''}`}
      aria-hidden="true"
      onClick={fizz}
    >
      <svg viewBox={`0 0 ${COLS} ${ROWS}`} width={width} shapeRendering="crispEdges">
        {pixels}
      </svg>
    </div>
  )
}
