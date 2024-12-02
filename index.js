const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
 


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.image--home, .aboutText, .card-right`, {origin: 'right'})
sr.reveal(` .about, .card--left `, {origin: 'left'})
 sr.reveal(`.text-top, .latest--title, .card--top, .nav`, {origin: 'top'})
 sr.reveal(`.text-bottom, .card--bottom`, {origin: 'bottom'})