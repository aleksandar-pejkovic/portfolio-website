let moving = true
document.addEventListener('keypress', (e) => {
    if (e.key === "s") {
        let foreground = document.querySelector('.foreground')
        let car = document.querySelector('.car')
        if (moving) {
            foreground.classList.remove('moveForeground')
            car.classList.remove('suspension')
            moving = false
        } else {
            foreground.classList.add('moveForeground')
            car.classList.add('suspension')
            moving = true
        }
    }
})


let textTag = document.querySelector('.section1 h1')
let text
let randomNumber = Math.floor(Math.random() * 11) + 1;

if (screen.width < 990 || screen.height < 800) {
    text = randomNumber = Math.floor(Math.random() * 5) + 1;
}

switch (randomNumber) {
    case 1:
        text = 'Welcome!'
        break;
    case 2:
        text = 'Dobro došli!'
        break;
    case 3:
        text = 'Hej hej!'
        break;
    case 4:
        text = 'Smooth ride . . .'
        break;
    case 5:
        text = 'Hakuna matata!'
        break;
    case 6:
        text = 'Everybody say YES!'
        break;
    case 7:
        text = 'Twinkle twinkle little star . . .!'
        break;
    case 8:
        text = 'Junor Java Developer in progress . . .'
        break;
    case 9:
        text = 'JavaScript is awesome!'
        break;
    case 10:
        text = 'Night sky is beautifull!'
        break;
    case 11:
        text = 'Park it on S'
        break;
    default:
        text = 'Ooops'
}

let splitText = text.split('')

textTag.innerHTML = ''

splitText.forEach(e => {
    if (e === ' ')
        e = '&nbsp;'

    textTag.innerHTML += `<span>${e}</span>`
})

let spans = textTag.querySelectorAll('span')
let k = 0
let color = 'skyblue'

let interval = setInterval(() => {

    let singleSpan = spans[k]

    if (color === '#9f99bb') {
        color = '#b67788'
    } else {
        color = '#9f99bb'
    }

    singleSpan.style.color = color

    singleSpan.classList.add('fadeMove')

    k++

    if (k === spans.length) {
        clearInterval(interval)
    }
}, 70)



let borderLine = document.querySelector('.border-line')

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let animationWidth = 0

window.onscroll = () => {

    if (this.oldScroll > this.scrollY) {
        animationWidth -= 10
    } else {
        animationWidth += 10
    }

    if (animationWidth < 0)
        animationWidth = 0

    if (animationWidth > 100)
        animationWidth = 100

    borderLine.style.width = `${animationWidth}%`

    this.oldScroll = this.scrollY


    imageAnimation()

}

const imageAnimation = () => {

    let sectionForAnimation = document.querySelector('.section2 .images')
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top
    let screenPosition = window.innerHeight


    let leftImage = document.querySelector('.slideFromLeft')
    let rightImage = document.querySelector('.slideFromRight')


    if (sectionPosition < screenPosition) {
        leftImage.classList.add('animated')
        rightImage.classList.add('animated')
    }

    if (sectionPosition > screenPosition) {
        leftImage.classList.remove('animated')
        rightImage.classList.remove('animated')
    }
}