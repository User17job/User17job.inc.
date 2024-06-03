const btn = document.querySelector('.btn-nav');
const menu = document.querySelector('.navbar');
const toUp = document.querySelector('#btnUp');
let chc=1
window.sr = ScrollReveal();

//  SHOW AND HIDDEN MENU ON MOBILE
btn.addEventListener("click", cambio)
function cambio() {
    if (menu.classList.contains('moveDown')) {
        menu.classList.remove('moveDown');
        console.log(2)
    } else {
        // Si no tiene la clase, la agregamos
        menu.classList.add('moveDown');
        console.log(1)
    }
};



// using scroll reveall
sr.reveal("#dosLeft",{
duration:2500,
origin:"left",
distance:"300px"
})
sr.reveal("#left2",{
duration:2500,
origin:"left",
distance:"350px"
})
sr.reveal("#Porpuse",{
    duration:2500,  
    origin:"left",
    distance:"400px"
})
sr.reveal("#Goals",{
    duration:2500,  
    origin:"right",
    distance:"400px"
})
sr.reveal("#projectY",{
    duration:2800,  
    origin:"right",
    distance:"450px"
})
sr.reveal("#projectU",{
    duration:2500,  
    origin:"right",
    distance:"300px"
})



// BACK TO UP
toUp.addEventListener("click", () => {
    window.scrollTo({ top: -500, behavior: "smooth" });
})