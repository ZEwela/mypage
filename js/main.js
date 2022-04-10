const btnMenu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnMenu.addEventListener('click', function(){ 
    console.log('clik open menu');

    if (header.classList.contains('open')) { // Close btnMenu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } 
    else { // Open btn Menu
        header.classList.add('open'); 
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
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



