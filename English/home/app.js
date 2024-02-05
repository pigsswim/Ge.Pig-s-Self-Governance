//home page href 
const one = document.getElementById('nav');
const day = document.getElementById('day');
const night = document.getElementById('night');

  //change theme 

  function dayTheme () {
    localStorage.setItem('bgcolor','white');
    localStorage.setItem('elemcolor','black');
    document.body.style.backgroundColor = localStorage.bgcolor;
    document.body.style.color = localStorage.elemcolor;
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.elemcolor;
    secT2.style.color = localStorage.elemcolor;
    secT3.style.color = localStorage.elemcolor;
}

  function nightTheme() {
    localStorage.setItem('bgcolor','black');
    localStorage.setItem('elemcolor', 'white');
    document.body.style.backgroundColor = localStorage.bgcolor;
    document.body.style.color = localStorage.elemcolor;
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.elemcolor;
    secT2.style.color = localStorage.elemcolor;
    secT3.style.color = localStorage.elemcolor;
}

window.addEventListener('load',() => {
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.elemcolor;
    secT2.style.color = localStorage.elemcolor;
    secT3.style.color = localStorage.elemcolor;

})

function navOpacity() {
  const navigation = document.getElementById('nav');
  this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
}

window.addEventListener('scroll',navOpacity, false)



