const menuIcon = document.querySelector("#icono-menu"),
menu = document.querySelector("#menu");

const push = document.querySelector("#push");

menuIcon.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    push.classList.toggle("push")
    
})

