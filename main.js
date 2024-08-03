let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '80px',
    duration:2500,
    delay : 400,
    reset : true
})

sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.heading',{delay:300,origin:'top'})
sr.reveal('.ride-container .box',{delay:300,origin:'bottom'})
sr.reveal('.services-container .box',{delay:300,origin:'left'})
sr.reveal('.about-container ',{delay:300,origin:'right'})
sr.reveal('.reviews-container ',{delay:300,origin:'left'})
sr.reveal('.news .box',{delay:200,origin:'right'})
