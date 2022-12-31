const menuIcon = document.querySelector("#icono-menu"),
menu = document.querySelector("#menu");

const push = document.querySelector("#push");
const body = document.body
const bar1 = document.getElementById("bar-1")
const bar2 = document.getElementById("bar-2")
const bar3 = document.getElementById("bar-3")

menuIcon.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    push.classList.toggle("push")
    
})

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    bar1.classList.toggle("skills-animation-1", window.scrollY > 894 )
    bar2.classList.toggle("skills-animation-2", window.scrollY > 894 )
    bar3.classList.toggle("skills-animation-3", window.scrollY > 894 )
})
