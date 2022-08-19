let addBtn = document.querySelector('.add-btn')
let resetBtn = document.querySelector('.reset-btn')
let input = document.querySelector('.input-number')
let arrayText = document.querySelector('#array')
let arrayStr = []
let arrayNum = []
let quicksortBtn = document.querySelector('.quicksort-btn')

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
})

quicksortBtn.addEventListener('click', () => {
    arrayStr.forEach(str => {
        arrayNum.push(Number(str))
    })
    console.log(arrayNum)
    quicksort(array, 0, array.length - 1)
    console.log(arrayNum)
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
