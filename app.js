let leftArrow = document.querySelector('.leftArrow')
let rightArrow = document.querySelector('.rightArrow')
let character = document.querySelector('.character')
let text = document.querySelector('.text')
let about = document.querySelector('.about')

function left() {  
    character.src = './images/image-john.jpg';
    text.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`
    about.innerHTML = `<p class="name">John Tarkpor</p>
    <p class="career">Junior Front-end Developer</p>`
}
function right(){
    character.src = './images/image-tanya.jpg';
    text.innerHTML = `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`
    about.innerHTML = `<p class="name">Tanya Sinclair</p>
    <p class="career">UX Engineer</p>`
}