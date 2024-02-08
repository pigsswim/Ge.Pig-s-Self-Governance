
function dayTheme () {
  localStorage.setItem('bgcolor','white');
  localStorage.setItem('elemcolor','black');
  localStorage.setItem('wrappercolor', '#f8f8f8');
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;
  const diaryBox = document.getElementById('text-box');
  const diaryDate = document.getElementById('date-input');
  const writeDiary = document.getElementById('enter-button');
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
  diaryBox.style.backgroundColor = localStorage.wrappercolor;
  diaryDate.style.backgroundColor = localStorage.wrappercolor;
  writeDiary.style.backgroundColor = localStorage.wrappercolor;

  //homepage

  const cw1 = document.getElementById('content-wrapper1')
  const cw2 = document.getElementById('content-wrapper2')
  const cw3 = document.getElementById('content-wrapper3')
  const cw4 = document.getElementById('content-wrapper4')
  const cw5 = document.getElementById('content-wrapper5')
  const cw6 = document.getElementById('content-wrapper6')
  const cw7 = document.getElementById('content-wrapper7')
  const cw8 = document.getElementById('content-wrapper8')
  const cw9 = document.getElementById('content-wrapper9')
  const cw10 = document.getElementById('content-wrapper10')
  const cw11 = document.getElementById('content-wrapper11')
  cw1.style.backgroundColor = localStorage.wrappercolor;
  cw2.style.backgroundColor = localStorage.wrappercolor;
  cw3.style.backgroundColor = localStorage.wrappercolor;
  cw4.style.backgroundColor = localStorage.wrappercolor;
  cw5.style.backgroundColor = localStorage.wrappercolor;
  cw6.style.backgroundColor = localStorage.wrappercolor;
  cw7.style.backgroundColor = localStorage.wrappercolor;
  cw8.style.backgroundColor = localStorage.wrappercolor;
  cw9.style.backgroundColor = localStorage.wrappercolor;
  cw10.style.backgroundColor = localStorage.wrappercolor;
  cw11.style.backgroundColor = localStorage.wrappercolor;
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
  localStorage.setItem('wrappercolor','#212121');
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;
  const diaryBox = document.getElementById('text-box');
  const diaryDate = document.getElementById('date-input');
  const writeDiary = document.getElementById('enter-button');
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
  const secT1 = document.getElementById('section-span1');
  const secT2 = document.getElementById('section-span2');
  const secT3 = document.getElementById('section-span3');
  secT1.style.color = localStorage.elemcolor;
  secT2.style.color = localStorage.elemcolor;
  secT3.style.color = localStorage.elemcolor;
  diaryBox.style.backgroundColor = localStorage.wrappercolor;
  diaryDate.style.backgroundColor = localStorage.wrappercolor;
  writeDiary.style.backgroundColor = localStorage.wrappercolor;

}

window.addEventListener('load',() => {
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;
  const diaryBox = document.getElementById('text-box');
  const diaryDate = document.getElementById('date-input');
  const writeDiary = document.getElementById('enter-button');
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
  const secT1 = document.getElementById('section-span1');
  const secT2 = document.getElementById('section-span2');
  const secT3 = document.getElementById('section-span3');
  secT1.style.color = localStorage.elemcolor;
  secT2.style.color = localStorage.elemcolor;
  secT3.style.color = localStorage.elemcolor;
  diaryBox.style.backgroundColor = localStorage.wrappercolor;
  diaryDate.style.backgroundColor = localStorage.wrappercolor;
  writeDiary.style.backgroundColor = localStorage.wrappercolor;
  //homepage
})

function navOpacity() {
  const navigation = document.getElementById('nav');
  this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
}

window.addEventListener('scroll',navOpacity, false)
