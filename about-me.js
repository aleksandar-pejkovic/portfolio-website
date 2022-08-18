let diploma, work1, work2, work3, work4, work5, rec1, rec2, rec4, rec7, rec8, rec10, rec6
let images = [diploma, work1, work2, work3, work4, work5, rec1, rec2, rec4, rec7, rec8, rec10, rec6]
let imageURLs = [
    "img/personal/diploma.jpg",
    "img/personal/work-1.jpg",
    "img/personal/work-2.jpg",
    "img/personal/work-3.jpg",
    "img/personal/work-4.jpeg",
    "img/personal/work-5.jpeg",
    "img/personal/rec-1.jpg",
    "img/personal/rec-2.jpg",
    "img/personal/rec-4.jpg",
    "img/personal/rec-7.jpg",
    "img/personal/rec-8.jpg",
    "img/personal/rec-10.jpg",
    "img/personal/rec-6.JPG"
]

let imageElements = document.querySelectorAll('.image')

let i = 0

images.forEach(e => {
    e = new Image()
    e.src = imageURLs[i]
    imageElements[i++].src = e.src
})
