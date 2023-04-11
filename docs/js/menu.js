const menu = document.querySelector(".menu");
const OpenMenuBtn = document.querySelector(".open-menu");
const CloseMenuBtn = document.querySelector(".close-menu");

function togglemenu(){
    menu.classList.toggle("menu-opened")
}

OpenMenuBtn.addEventListener("click", togglemenu);
CloseMenuBtn.addEventListener("click", togglemenu);