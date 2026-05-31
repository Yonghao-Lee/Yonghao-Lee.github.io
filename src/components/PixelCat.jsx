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

export default function PixelCat() {
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

  return (
    <div className="pixel-cat" aria-hidden="true">
      <svg
        viewBox={`0 0 ${COLS} ${ROWS}`}
        width="92"
        shapeRendering="crispEdges"
      >
        {pixels}
      </svg>
    </div>
  )
}
