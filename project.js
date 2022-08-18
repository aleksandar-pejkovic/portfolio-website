let leftBtn = document.querySelector('.leftBtn')
let rightBtn = document.querySelector('.rightBtn')
let images = document.querySelectorAll('.img')
let k = 0

leftBtn.addEventListener('click', () => {
    images[k--].classList.toggle('show')
    if (k < 0) {
        k = images.length -1
    }
    images[k].classList.toggle('show')
})

rightBtn.addEventListener('click', () => {
    images[k++].classList.toggle('show')
    if (k > images.length -1) {
        k = 0
    }
    images[k].classList.toggle('show')
})