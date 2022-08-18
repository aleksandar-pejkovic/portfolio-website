
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
let openbtn = document.querySelector('.openbtn')
let closebtn = document.querySelector('.closebtn')
let sidebar = document.querySelector('#mySidebar')
let main = document.querySelector('#main')

openbtn.addEventListener('click', () => {
    sidebar.style.width = "250px";
    main.style.display = "none"
})

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */

closebtn.addEventListener('click', () => {
    sidebar.style.width = "0"
    main.style.display = "block"
})

