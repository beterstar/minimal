const slider = document.getElementById('nav-slider');
const berger = document.getElementById('berger');
const exit = document.getElementById('exit');

berger.addEventListener('click',()=>{
    slider.classList.toggle('active');
})
exit.addEventListener('click',()=>{
    slider.classList.toggle('active');
})

slider.addEventListener('mouseleave',()=>{
    slider.classList.remove("active");
})