window.addEventListener('scroll',navOpacity, false)

window.addEventListener('load',() => {
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;

   //educator 
   const educatorIntro = document.getElementById('educator-intro');
   educatorIntro.style.backgroundColor =localStorage.wrappercolor;
   educatorIntro.style.color = localStorage.elemcolor;
 
   const educatorSetting = document.getElementById('educator-setting');
   educatorSetting.style.backgroundColor = localStorage.wrappercolor;
   educatorSetting.style.color = localStorage.elemcolor;
 
   const story = document.getElementById('story-wrapper');
   story.style.backgroundColor = localStorage.wrappercolor;
   story.style.color = localStorage.elemcolor;
 
   const questions = document.getElementById('questions');
   questions.style.backgroundColor = localStorage.wrappercolor;
   questions.style.color = localStorage.elemcolor;
})

function dayTheme () {
  localStorage.setItem('bgcolor','white');
  localStorage.setItem('elemcolor','black');
  localStorage.setItem('wrappercolor', '#f8f8f8');
  localStorage.setItem('homeTextColor','black');
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;

   //educator 
   const educatorIntro = document.getElementById('educator-intro');
   educatorIntro.style.backgroundColor =localStorage.wrappercolor;
   educatorIntro.style.color = localStorage.elemcolor;

   const educatorSetting = document.getElementById('educator-setting');
   educatorSetting.style.backgroundColor = localStorage.wrappercolor;
   educatorSetting.style.color = localStorage.elemcolor;

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
  localStorage.setItem('wrappercolor','#0c0c0c');
  localStorage.setItem('homeTextColor','#FBFCF8');
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;

   //educator 
   const educatorIntro = document.getElementById('educator-intro');
   educatorIntro.style.backgroundColor =localStorage.wrappercolor;
   educatorIntro.style.color = localStorage.elemcolor;

   const educatorSetting = document.getElementById('educator-setting');
   educatorSetting.style.backgroundColor = localStorage.wrappercolor;
   educatorSetting.style.color = localStorage.elemcolor;

    const story = document.getElementById('story-wrapper');
    story.style.backgroundColor = localStorage.wrappercolor;
    story.style.color = localStorage.elemcolor;

    const questions = document.getElementById('questions');
    questions.style.backgroundColor = localStorage.wrappercolor;
    questions.style.color = localStorage.elemcolor;
}

function navOpacity() {
  const navigation = document.getElementById('nav');
  this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
}



