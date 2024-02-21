window.addEventListener('scroll',navOpacity, false)


window.addEventListener('load',() => {
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;

//cognitivity page
  const h1 = document.getElementById('h1');
  const h2 = document.getElementById('h2');
  const h3 = document.getElementById('h3');
  const h4 = document.getElementById('h4');
  const h5 = document.getElementById('h5');
  const h6 = document.getElementById('h6');
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const p3 = document.getElementById('p3');
  const p4 = document.getElementById('p4');
  const p5 = document.getElementById('p5');
  const p6 = document.getElementById('p6');
  p1.style.color = localStorage.elemcolor;
  p2.style.color = localStorage.elemcolor;
  p3.style.color = localStorage.elemcolor;
  p4.style.color = localStorage.elemcolor;
  p5.style.color = localStorage.elemcolor;
  p6.style.color = localStorage.elemcolor;
  h1.style.color = localStorage.elemcolor;
  h2.style.color = localStorage.elemcolor;
  h3.style.color = localStorage.elemcolor;
  h4.style.color = localStorage.elemcolor;
  h5.style.color = localStorage.elemcolor;
  h6.style.color = localStorage.elemcolor;


const diaryBox = document.getElementById('text-box');
const diaryDate = document.getElementById('date-input');
const writeDiary = document.getElementById('enter-button');
diaryBox.style.backgroundColor = localStorage.wrappercolor;
diaryDate.style.backgroundColor = localStorage.wrappercolor;
writeDiary.style.backgroundColor = localStorage.wrappercolor;
})

function dayTheme () {
  localStorage.setItem('bgcolor','white');
  localStorage.setItem('elemcolor','black');
  localStorage.setItem('wrappercolor', '#f8f8f8');
  localStorage.setItem('homeTextColor','black');
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;

      //cognitivity page

    const diaryBox = document.getElementById('text-box');
    const diaryDate = document.getElementById('date-input');
    const writeDiary = document.getElementById('enter-button');
    diaryBox.style.backgroundColor = localStorage.wrappercolor;
    diaryDate.style.backgroundColor = localStorage.wrappercolor;
    writeDiary.style.backgroundColor = localStorage.wrappercolor;

    const h1 = document.getElementById('h1');
    const h2 = document.getElementById('h2');
    const h3 = document.getElementById('h3');
    const h4 = document.getElementById('h4');
    const h5 = document.getElementById('h5');
    const h6 = document.getElementById('h6');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const p4 = document.getElementById('p4');
    const p5 = document.getElementById('p5');
    const p6 = document.getElementById('p6');
    p1.style.color = localStorage.elemcolor;
    p2.style.color = localStorage.elemcolor;
    p3.style.color = localStorage.elemcolor;
    p4.style.color = localStorage.elemcolor;
    p5.style.color = localStorage.elemcolor;
    p6.style.color = localStorage.elemcolor;
    h1.style.color = localStorage.elemcolor;
    h2.style.color = localStorage.elemcolor;
    h3.style.color = localStorage.elemcolor;
    h4.style.color = localStorage.elemcolor;
    h5.style.color = localStorage.elemcolor;
    h6.style.color = localStorage.elemcolor;

}

function nightTheme() {
  localStorage.setItem('bgcolor','black');
  localStorage.setItem('elemcolor', 'white');
  localStorage.setItem('wrappercolor','#0c0c0c');
  localStorage.setItem('homeTextColor','#FBFCF8');
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;

  //cognitivity page
  const h1 = document.getElementById('h1');
  const h2 = document.getElementById('h2');
  const h3 = document.getElementById('h3');
  const h4 = document.getElementById('h4');
  const h5 = document.getElementById('h5');
  const h6 = document.getElementById('h6');
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const p3 = document.getElementById('p3');
  const p4 = document.getElementById('p4');
  const p5 = document.getElementById('p5');
  const p6 = document.getElementById('p6');
  p1.style.color = localStorage.elemcolor;
  p2.style.color = localStorage.elemcolor;
  p3.style.color = localStorage.elemcolor;
  p4.style.color = localStorage.elemcolor;
  p5.style.color = localStorage.elemcolor;
  p6.style.color = localStorage.elemcolor;
  h1.style.color = localStorage.elemcolor;
  h2.style.color = localStorage.elemcolor;
  h3.style.color = localStorage.elemcolor;
  h4.style.color = localStorage.elemcolor;
  h5.style.color = localStorage.elemcolor;
  h6.style.color = localStorage.elemcolor;

const diaryBox = document.getElementById('text-box');
const diaryDate = document.getElementById('date-input');
const writeDiary = document.getElementById('enter-button');
diaryBox.style.backgroundColor = localStorage.wrappercolor;
diaryDate.style.backgroundColor = localStorage.wrappercolor;
writeDiary.style.backgroundColor = localStorage.wrappercolor;

}

function navOpacity() {
  const navigation = document.getElementById('nav');
  this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
}

