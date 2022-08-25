let fizzInput = document.querySelector(".input-fizz")
let buzzInput = document.querySelector(".input-buzz")
let text = document.querySelector(".printingDiv h5")
let instructions = document.querySelector(".instructions")
let printBtn = document.querySelector(".print-btn")
let resetBtn = document.querySelector(".reset-btn")

let fizzNumber = Number(fizzInput.value)
let buzzNumber = Number(buzzInput.value)

document.addEventListener("keypress", event => {

    if (event.key === "Enter") {

        event.preventDefault()

        printBtn.click()
    }
})

document.addEventListener("keydown", event => {

    if (event.key === "Delete") {

        event.preventDefault()

        resetBtn.click()
    }
})

fizzInput.addEventListener('change', () => {
    if (fizzInput.value < 2 || fizzInput.value > 50) {
        alert("Enter number between 2 and 50!")
        fizzInput.value = fizzNumber
        return
    }
    if (fizzInput.value === buzzInput.value) {
        alert("Numbers can't be the same!")
        fizzInput.value = fizzNumber
        return
    }
    fizzNumber = Number(fizzInput.value)
})

buzzInput.addEventListener('change', () => {
    if (buzzInput.value < 2 || buzzInput.value > 50) {
        alert("Enter number between 2 and 50!")
        buzzInput.value = buzzNumber
    }
    if (fizzInput.value === buzzInput.value) {
        alert("Numbers can't be the same!")
        buzzInput.value = buzzNumber
        return
    }
    buzzNumber = Number(buzzInput.value)
})

printBtn.addEventListener('click', () => {
    text.innerHTML = ''
    resetBtn.classList.remove('unvisible')
    text.parentElement.classList.remove('unvisible')
    text.parentElement.classList.add('moveUp')
    instructions.classList.add('disapear')

    for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
            if (i % fizzNumber === 0 && i % buzzNumber === 0) {
                text.innerHTML = `FizzBuzz`
            } else if (i % fizzNumber === 0) {
                text.innerHTML = `Fizz`
            } else if (i % buzzNumber === 0) {
                text.innerHTML = `Buzz`
            } else {
                text.innerHTML = i
            }
        }, i * 500)
    }
})

resetBtn.addEventListener('click', () => {
    text.innerHTML = ''
    resetBtn.classList.add('unvisible')
    text.parentElement.classList.add('unvisible')
    location.reload()
})