import { getPixel, setPixel } from './utils/canvas.js' 
import { setImagePosition } from './utils/img.js'
import { allDirections } from './allDirections.js'

let direction = 0
let x = 128
let y = 128
let moveCount = 0

setImagePosition(x, y, direction)

const turnRight = () => {
    direction = direction + 1
    if (direction === 4) {
        direction = 0
    }
}
const turnLeft = () => {
    direction = direction - 1
    if (direction === -1) {
        direction = 3
    }
}
const moveForward = () => {

    if (direction === allDirections.up) {
        y = y - 1
    } else if (direction === allDirections.right) {
        x = x + 1
    } else if (direction === allDirections.bottom) {
        y = y + 1
    } else if (direction === allDirections.left) {
        x = x - 1
    }
}
const move = () => {

    const currentPixel = getPixel(x, y)
    const currentPixelIsWhite = currentPixel === '#ffffff'
    if (currentPixelIsWhite) {
        setPixel(x, y, '#0000ff')
        turnRight()
    } else {
        setPixel(x, y, '#ffffff')
        turnLeft()
    }
    moveForward()
    setImagePosition(x, y, direction)

    moveCount = moveCount + 1
}


export {
    x,
    y,
    direction,
    moveCount,
    move,
    turnRight,
    turnLeft,
}
