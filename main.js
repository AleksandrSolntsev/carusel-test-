window.addEventListener('load', ()=>{
    //buttons
    const leftBtn = document.querySelector('.leftBtn')
    const rightBtn = document.querySelector('.rightBtn')
    //carusel
    const carusel = document.querySelector('.caruselSlide')
    const images = document.querySelectorAll('.caruselSlide img')
    //counter
    let counter = 0;
    const step = images[0].clientWidth;
    
    //buttons events
    rightBtn.addEventListener('click', ()=>{
        if(counter >= images.length - 1){
            counter=-1;
        }
        carusel.classList.add('animation');
        counter++;
        carusel.style.transform = 'translateX('+`${-step * counter}px)`;
        console.log (counter)
        console.log(carusel.style.transform)
    })
    leftBtn.addEventListener('click', ()=>{
        if(counter <= 0){
            counter=+images.length;
        }
        carusel.classList.add('animation');
        counter--;
        carusel.style.transform = 'translateX('+`${-step * counter}px)`;
    })

})