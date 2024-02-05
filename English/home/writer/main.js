//change theme

function dayTheme () {
    localStorage.setItem('bgcolor','white');
    localStorage.setItem('elemcolor','black');
    document.body.style.backgroundColor = localStorage.bgcolor ||'white';
    const h1 = document.getElementById('h1');
    h1.style.color = localStorage.elemcolor;
    const intro = document.getElementById('intro');
    intro.style.backgroundColor = localStorage.bgcolor;
    const setting = document.getElementById('setting');
    setting.style.backgroundColor = localStorage.bgcolor;
  }

  function nightTheme() {
    localStorage.setItem('bgcolor','black');
    localStorage.setItem('elemcolor', 'white');
    localStorage.setItem('sectioncolor','#212121')
    document.body.style.backgroundColor = localStorage.bgcolor || 'black';
    const h1 = document.getElementById('h1');
    h1.style.color = localStorage.elemcolor;
    const intro = document.getElementById('intro');
    intro.style.backgroundColor = localStorage.sectioncolor;
    const setting = document.getElementById('setting');
    setting.style.backgroundColor = localStorage.sectioncolor;
  }

  window.addEventListener('load',() => {
    document.body.style.backgroundColor = localStorage.bgcolor;
    const h1 = document.getElementById('h1');
    h1.style.color = localStorage.elemcolor;
    const intro = document.getElementById('intro');
    intro.style.backgroundColor = localStorage.sectioncolor;
    const setting = document.getElementById('setting');
    setting.style.backgroundColor = localStorage.sectioncolor;
  })

function navOpacity() {
    const navigation = document.getElementById('nav');
    this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
  }
  
window.addEventListener('scroll',navOpacity, false)
