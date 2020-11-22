import * as ant from './langtonAnt.js'

let paused = true
let speed = 1
let speed10 = speed + 10

const loop = () => {
    requestAnimationFrame(loop)

    if (paused === false) {
        for (let i = 0; i < speed; i++) {
            ant.move()
        }
        document.querySelector('#moveCount').innerHTML = ant.moveCount
    }
    if (speed10 === true) {
        for (let i = 0; i < speed; i++) {
            ant.speed10()
        }
        document.querySelector('#moveCount').innerHTML = ant.moveCount
    }

}


loop()




document.querySelector('#move').onclick = () => {
    ant.move()
    document.querySelector('#moveCount').innerHTML = ant.moveCount
}

document.querySelector('#right').onclick = () => {
    ant.turnRight()
}

document.querySelector('#left').onclick = () => {
    ant.turnLeft()
}

document.querySelector('#play').onclick = () => {
    paused = false
}

document.querySelector('#pause').onclick = () => {
    paused = true
}

document.querySelector('#speed1').onclick = () => {
    speed = 1
}

document.querySelector('#speed10').onclick = () => {
    speed = 10
}

document.querySelector('#speed100').onclick = () => {
    speed = 100
}
