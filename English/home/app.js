//home page href 
const one = document.getElementById('nav');
const day = document.getElementById('day');
const night = document.getElementById('night');

  //change theme 

function dayTheme () {
    document.body.style.backgroundColor ='white';
    document.body.style.color ='black';
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = 'black';
    secT2.style.color = 'black';
    secT3.style.color = 'black';
}

function nightTheme() {
    document.body.style.backgroundColor ='black';
    document.body.style.color ='white';
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = 'white';
    secT2.style.color = 'white';
    secT3.style.color = 'white';
}