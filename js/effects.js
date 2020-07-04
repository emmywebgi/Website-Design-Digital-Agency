const btnmenu = document.querySelector(".btnmenu");
const menu = document.querySelector("ul");
const linea1 = document.querySelector(".l1");
const linea2 = document.querySelector(".l2");
const linea3 = document.querySelector(".l3");
const nav = document.querySelector(".nav");

btnmenu.onclick = function(){
    menu.classList.toggle("mostrar");
    linea1.classList.toggle("rotatel1");
    linea2.classList.toggle("scalel2");
    linea3.classList.toggle("rotatel3");
    nav.classList.toggle("m-nav");
}