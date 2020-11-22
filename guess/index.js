const outputSource = document.querySelector('div.output')
outputSource.remove()

// ici "numberToGuess" doit prendre une valeur aléatoire entre 1 et 100

let numberToGuess = Math.floor(Math.random() * Math.floor(100))

let tryCount = 0

const giveATry = (number) => {
    const clone = outputSource.cloneNode(true)
    document.querySelector('main').append(clone)

    tryCount = tryCount + 1

    // ici doit se trouver un test entre 'number' et 'numberToGuess'
    if (number<numberToGuess) {
      texteRetour = 'trop petit !'
    } else  if (number>numberToGuess) {
      texteRetour = 'trop grand !'
    } else  if (number==numberToGuess){
      texteRetour = 'Bravo !'
    } else  {
      texteRetour = 'erreur !'
    }

    clone.querySelector('span.index').innerHTML = `#${tryCount}`
    clone.querySelector('span.number').innerHTML = number
    clone.querySelector('span.text').innerHTML = texteRetour
}

const input = document.querySelector('input')
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        const number = parseFloat(input.value)
        input.value = ''
        giveATry(number)
    }
})

