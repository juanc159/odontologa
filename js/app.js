window.onscroll = function() {myFunction()};

// Get the navbar
var contenedorMenu = document.getElementById("contenedor-menu");
var navbar = document.getElementById("contenedor-menu"); 
var titulo = document.querySelector('.titulo-logo');
var icono = document.querySelector('.icon-logo');
var menu = document.querySelector('.menu');
var links = document.querySelectorAll('.links-menu');

var logo = document.querySelector('.logo');
var checkbtn = document.querySelector('.checkbtn');
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) { 
    contenedorMenu.classList.add("sticky"),
    titulo.classList.add('menu-fixed'),
    icono.classList.add('menu-fixed'), 
    checkbtn.classList.add('menu-fixed'), 
    links.forEach(function(userItem) {
        userItem.classList.add('menu-fixed')
      });
  } else { 
    contenedorMenu.classList.remove("sticky"),
    titulo.classList.remove('menu-fixed'),
    icono.classList.remove('menu-fixed'),
    checkbtn.classList.add('menu-fixed'), 
    links.forEach(function(userItem) {
        userItem.classList.remove('menu-fixed')
      });
  }
 
 
}