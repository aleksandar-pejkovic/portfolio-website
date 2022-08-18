let addBtn = document.querySelector('.add-btn')
let resetBtn = document.querySelector('.reset-btn')
let input = document.querySelector('.input-number')
let arrayText = document.querySelector('#array')
let quicksortBtn = document.querySelector('.quicksort-btn')

addBtn.addEventListener('click', () => {
    let inputValue = input.value
    arrayText.textContent += inputValue + ' '
    input.value = ''
    array.push
})

resetBtn.addEventListener('click', () => {
    arrayText.textContent = ''
})

quicksortBtn.addEventListener('click', () => {
})

