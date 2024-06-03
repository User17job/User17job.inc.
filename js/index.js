const btn = document.querySelector('.btn-nav');
const menu = document.querySelector('#nav');
const toUp = document.querySelector('#btnUp');
window.sr = ScrollReveal();

//  SHOW AND HIDDEN MENU ON MOBILE
btn.addEventListener("click", change)

function change() {
 let id = document.getElementsByName("forButton")[0].id
    if(id ==1){
        menu.classList.add("active")
        id = document.getElementsByName("forButton")[0].id=0;
    }else{
        menu.classList.remove("active")
        id = document.getElementsByName("forButton")[0].id=1;
    }
 };

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