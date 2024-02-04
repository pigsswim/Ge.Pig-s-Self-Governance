//home page href 
const one = document.getElementById('nav');
const day = document.getElementById('day');
const night = document.getElementById('night');

  //change theme 

function dayTheme () {
    localStorage.setItem('brightbgcolor','white');
    localStorage.setItem('darkcolor','black');
    document.body.style.backgroundColor = localStorage.brightbgcolor ||'white';
    document.body.style.color = localStorage.darkcolor || 'black';
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.darkcolor || 'black';
    secT2.style.color = localStorage.darkcolor || 'black';
    secT3.style.color = localStorage.darkcolor || 'black';
}

function nightTheme() {
    localStorage.setItem('darkbgcolor','black');
    localStorage.setItem('brightcolor', 'white');
    document.body.style.backgroundColor = localStorage.darkbgcolor || 'black';
    document.body.style.color = localStorage.brightcolor;
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.brightcolor;
    secT2.style.color = localStorage.brightcolor;
    secT3.style.color = localStorage.brightcolor;
}

window.addEventListener('load',() => {
  if (document.body.style.backgroundColor = localStorage.brightbgcolor) {
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.darkcolor || 'black';
    secT2.style.color = localStorage.darkcolor || 'black';
    secT3.style.color = localStorage.darkcolor || 'black';
  }
  else if (document.body.style.backgroundColor = localStorage.darkbgcolor) {
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.brightcolor;
    secT2.style.color = localStorage.brightcolor;
    secT3.style.color = localStorage.brightcolor;
  }
  else {
    return;
  }
})

function navOpacity() {
  const navigation = document.getElementById('nav');
  this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
}

window.addEventListener('scroll',navOpacity, false)
