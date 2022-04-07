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





// const showOnPx = 100;

// const arrowBox = () => {
//   return document.documentElement || document.body;
// };

// document.addEventListener("scroll", () => {
//   if (arrowBox().scrollTop > showOnPx) {
//     arrowUp.classList.remove("hidden")
//   } else {
//     arrowUp.classList.add("hidden")
//   }
// });
//  const goToTop = () => {
//     document.body.scrollIntoView();
//   };
  
//   arrowUp.addEventListener("click", goToTop)