const btnMenu = document.querySelector('#btnMenu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

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
 


//  Old version
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
const arrowUp = document.querySelector('.arrow-up')
const rootElement = document.documentElement

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

const scrollToTop = () => {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

arrowUp.addEventListener("click", scrollToTop)



