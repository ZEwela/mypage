const btnMenu = document.querySelector('#btnMenu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const menu = document.querySelector('.header__menu');
const arrowUp = document.querySelector('#arrow-up')
const rootElement = document.documentElement

btnMenu.addEventListener('click', function(){ 
    console.log('clik open menu');

    if (header.classList.contains('open')) { // Close btnMenu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    } 
    else { // Open btn Menu
        body.classList.add('noscroll');
        header.classList.add('open'); 
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
})

// fade overlay when clicking on header__menu
menu.addEventListener('click', function(){
    console.log('click menu');
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    })
})

const scrollToTop = () => {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

arrowUp.addEventListener("click", scrollToTop)
 



