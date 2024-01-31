let slideData = [
    {
        src:'./assets/img/img1.jpeg',
        alt:'Billede 1',
        description: 'Billede 1'
    }
    ,
    {
        src:'./assets/img/img2.jpg',
        alt:'Billede 2',
        description: 'Billede 2'
    },
    {
        src:'./assets/img/img3.jpg',
        alt:'Billede 3',
        description: 'Billede 3'
    }
]

const sliderContainer = document.querySelector('.slides');

slideData.forEach((slide) => {
    sliderContainer.innerHTML += `
    <div class="single-slide">    
        <div class="slide-content">
        <h3>${slide.description}</h3>
        </div>
        <img src="${slide.src}" alt="${slide.alt}">
    </div>
    `;
});


const slides = document.querySelectorAll('#slider01 .single-slide');
const nextBtn = document.querySelector('[data-direction=next]');
const previousBtn = document.querySelector('[data-direction=previous]');

let slidesLength = slideData.length - 1; /* Index'et på sidste billede i slideren */
let currentImageIndex = 0;

/* const display = document.querySelector('.display'); */





const setActiveSlide = (index) => { /* Funktionen bestemmer hvilket billede der vises */
    
    slides.forEach( (slide) => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active'); /* får index fra currentImageIndex variablen, og smider 'active' på denne */

    /* display.textContent = `${index + 1} udaf ${slidesLength + 1}`; */
};



const next = () => {

    

    if(currentImageIndex >= slidesLength){
        currentImageIndex = 0;
    } else {
        currentImageIndex += 1;
    }



    setActiveSlide(currentImageIndex); //Skal køres hver gang der trykkes på knapperne, for at registrere at currentImageIndex nu er noget andet, og at slideren skal skifte op eller ned




};

const previous = () => {

    if(currentImageIndex === 0){
        currentImageIndex = slidesLength;
    } else {
        currentImageIndex -= 1;
    }

    /* 
    currentImageIndex = currentImageIndex === 0 ? slidesLength : currentImageIndex -= 1;
    */

    setActiveSlide(currentImageIndex);

};



/* Hvis funktionerne eksisterer */
if(nextBtn && previousBtn) {

    nextBtn.addEventListener('click', next);
    previousBtn.addEventListener('click', previous);

}

/* Skriv denne lige efter setActiveSlide funktionen er skrevet - så vises der et billede med det samme*/
setActiveSlide(currentImageIndex); /* Skal køres, for at vise et billede til at starte med */
