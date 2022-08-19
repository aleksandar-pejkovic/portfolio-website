let addBtn = document.querySelector('.add-btn')
let resetBtn = document.querySelector('.reset-btn')
let input = document.querySelector('.input-number')
let arrayText = document.querySelector('#array')
let sortedArrayText = document.querySelector('#sortedArray')
let arrayStr = []
let arrayNum = []
let quicksortBtn = document.querySelector('.quicksort-btn')
let sorted = false

input.addEventListener("keypress", event => {

    if (event.key === "Enter") {

        event.preventDefault()

        addBtn.click()
    }
})

input.addEventListener("keydown", event => {

    if (event.key === "Delete") {

        event.preventDefault()

        resetBtn.click()
    }
})

input.addEventListener("keyup", event => {

    if (event.key === " ") {

        event.preventDefault()

        quicksortBtn.click()
    }
})

addBtn.addEventListener('click', () => {

    if (sorted) {
        arrayText.textContent = ''
        sorted = false
    }

    let inputValue = input.value
    if (inputValue < 1000000) {
        arrayText.textContent += inputValue + ' '
        arrayStr.push(inputValue)
        input.value = ''
        array.push
        input.focus()
    } else {
        alert("Number must be smaller than 1.000.000")
        input.value = ''
    }
})

resetBtn.addEventListener('click', () => {
    arrayText.textContent = ''
    arrayStr = []
    sortedArrayText.classList.remove('visible')
    input.focus()
})

quicksortBtn.addEventListener('click', () => {
    if (arrayStr.length === 0) {
        alert('Insert numbers!')
        return
    }
    sortedArrayText.textContent = ''
    arrayNum = []
    arrayStr.forEach(str => {
        arrayNum.push(Number(str))
    })
    console.log(arrayNum)
    quicksort(arrayNum, 0, arrayNum.length - 1)
    console.log(arrayNum)
    sortedArrayText.textContent = arrayNum.toString()
    sortedArrayText.classList.add('visible')
    arrayStr = []
    sorted = true
})

function quicksort(array, lowIndex, highIndex) {

    if (lowIndex >= highIndex) {
        return;
    }


    let pivot = array[highIndex]

    let leftPointer = lowIndex
    let rightPointer = highIndex

    while (leftPointer < rightPointer) {

        while (array[leftPointer] <= pivot && leftPointer < rightPointer) {
            leftPointer++;
        }

        while (array[rightPointer] >= pivot && leftPointer < rightPointer) {
            rightPointer--;
        }

        swap(array, leftPointer, rightPointer);

    }

    swap(array, leftPointer, highIndex);

    quicksort(array, lowIndex, leftPointer - 1);
    quicksort(array, leftPointer + 1, highIndex);

}

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
