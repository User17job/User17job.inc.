const menu = document.querySelector('#nav');
const toUp = document.querySelector('#btnUp');
// using scrollReaveal
window.sr = ScrollReveal();
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
// nav burguer button in action
const checkbox = document.getElementById('burger');
const navItems = document.querySelector('.navbar');
checkbox.addEventListener('change', function() {
    if (this.checked) {
        navItems.style.top = '0vh';
    } else {
        navItems.style.top = '-110vh';
    }
});
const salto = document.getElementsByClassName('salto');
for (let i = 0; i < salto.length; i++) {
    const element = salto[i];
    element.addEventListener("click", mover);
}
function mover(){
    checkbox.checked = false;
    navItems.style.top = '-110vh';
}