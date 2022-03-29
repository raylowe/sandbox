let knightPosition = [0, 0]
let observer = null

function emitChange() {
    observer(knightPosition)
}
function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.')
    }

    observer = o
    emitChange()
}

function moveKnight(toX, toY) {
    knightPosition = [toX, toY]
    emitChange()
}

function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y
  
    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
  }
export const gameService = {
    observe,
    moveKnight,
    canMoveKnight
}