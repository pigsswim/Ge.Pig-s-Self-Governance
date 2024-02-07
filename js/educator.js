//change theme

function dayTheme () {
    localStorage.setItem('bgcolor','white');
    localStorage.setItem('elemcolor','black');
    localStorage.setItem('wrappercolor', '#f8f8f8');
    document.body.style.backgroundColor = localStorage.bgcolor;
    //educator 
    const intro = document.getElementById('intro');
    intro.style.backgroundColor = localStorage.wrappercolor;
    intro.style.color = localStorage.elemcolor;

    const setting = document.getElementById('setting');
    setting.style.backgroundColor = localStorage.wrappercolor;
    setting.style.color = localStorage.elemcolor;

    const story = document.getElementById('story-wrapper');
    story.style.backgroundColor = localStorage.wrappercolor;
    story.style.color = localStorage.elemcolor;

    const questions = document.getElementById('questions');
    questions.style.backgroundColor = localStorage.wrappercolor;
    questions.style.color = localStorage.elemcolor;

  }

  function nightTheme() {
    localStorage.setItem('bgcolor','black');
    localStorage.setItem('elemcolor', 'white');
    localStorage.setItem('wrappercolor','#212121');
    document.body.style.backgroundColor = localStorage.bgcolor || 'black';
    

    //educator 
    const intro = document.getElementById('intro');
    intro.style.backgroundColor =localStorage.wrappercolor;
    intro.style.color = localStorage.elemcolor;


    const setting = document.getElementById('setting');
    setting.style.backgroundColor = localStorage.wrappercolor;
    setting.style.color = localStorage.elemcolor;

    const story = document.getElementById('story-wrapper');
    story.style.backgroundColor = localStorage.wrappercolor;
    story.style.color = localStorage.elemcolor;

    const questions = document.getElementById('questions');
    questions.style.backgroundColor = localStorage.wrappercolor;
    questions.style.color = localStorage.elemcolor;
  }

  window.addEventListener('load',() => {
    document.body.style.backgroundColor = localStorage.bgcolor;

    //educator 
    const intro = document.getElementById('intro');
    intro.style.backgroundColor =localStorage.wrappercolor;
    intro.style.color = localStorage.elemcolor;

    const setting = document.getElementById('setting');
    setting.style.backgroundColor = localStorage.wrappercolor;
    setting.style.color = localStorage.elemcolor;

    const story = document.getElementById('story-wrapper');
    story.style.backgroundColor = localStorage.wrappercolor;
    story.style.color = localStorage.elemcolor;

    const questions = document.getElementById('questions');
    questions.style.backgroundColor = localStorage.wrappercolor;
    questions.style.color = localStorage.elemcolor;
  })

function navOpacity() {
    const navigation = document.getElementById('nav');
    this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
  }
  
window.addEventListener('scroll',navOpacity, false)
