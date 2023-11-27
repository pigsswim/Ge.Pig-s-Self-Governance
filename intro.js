// onload call javascript function 
let pos = 0;
let id = null;
let i = 0;
let curtain = document.getElementById('curtain');
let screen = document.getElementById('screen');
let title = document.createElement('h1');
const grid = document.createElement('div');
grid.className = 'grid';
let screenHeight = screen.offsetHeight;
let screenWidth = screen.offsetWidth;



function intro () {
  screen.onload = setTimeout(typeTitle,1500);
  curtain.appendChild(title);
  setTimeout(curtainUp, 5000);
}

intro();

function drawGrid() {
  

  const gridTop= document.createElement('div');
  gridTop.className = 'gridTop';

  const box1 = document.createElement('div');
  box1.className = 'box1';
  const box2 = document.createElement('div');
  box2.className = 'box2';
  const box3 = document.createElement('div');
  box3.className = 'box3';
  const box3Picture = document.createElement('img');
  box3Picture.src = 'demo.jpg';
  box3.appendChild(box3Picture);
  
  const box4 = document.createElement('div');
  box4.className = 'box4';
  const box5 = document.createElement('div');
  box5.className = 'box5';

  gridTop.appendChild(box1);
  gridTop.appendChild(box2);
  gridTop.appendChild(box3);
  gridTop.appendChild(box4);
  gridTop.appendChild(box5);

  const gridMiddle = document.createElement('div');
  gridMiddle.className = 'gridMiddle';

  const gridBottom = document.createElement('div');
  gridBottom.className = 'gridBottom';

  grid.appendChild(gridTop);
  grid.appendChild(gridMiddle);
  grid.appendChild(gridBottom);

  curtain.appendChild(grid);
}

setTimeout(drawGrid,10000)



function typeTitle () {
  let a = 'The Story of I-Have-No-Idea-Who';
  if (i<a.length){
    title.innerHTML += a.charAt(i);
    i++;
  }
  setTimeout(typeTitle, 60);
}

function curtainUp() {
  id = setInterval(frame, 6);
}

function frame() {
  curtain.innerHTML = '';
  curtain.style.height = '100%';
  curtain.style.backgroundColor = 'black';
  if (pos == 500) {
    clearInterval(id);
  }else {
    pos ++;
    screen.style.height = pos + 'px';
  }
}


//accidentally created effect on title
/*function curtainUp() {
  id = setInterval(drawLine, 6);
}

function showLine () {
  id = setInterval(drawLine,6);
}

setTimeout(showLine,10000);

function drawLine () {
  const line =  document.createElement('div');
  line.style.height = '20%';
  line.style.width = '5%';
  line.style.backgroundColor = 'white';
  line.style.zIndex = '99';
  if (pos == 200) {
    clearInterval(id);
  }else {
    pos++;
    //line.style.height = pos + 'px';
    line.style.width = pos + 'px';
  }
  screen.appendChild(line);
}*/


/*

let colors= [];

function mouseOver() {
     document.getElementById('home-button').style.background = 'pink';
}

function renderButtons() {

    document.getElementById('ball-container2').innerHTML = '';
    document.getElementById('ball-container4').innerHTML = '';
    document.getElementById('ball-container5').innerHTML = '';
    document.getElementById('ball-container6').innerHTML = '';
    document.getElementById('ball-container8').innerHTML = '';

    const homeButton =document.createElement('button');
    homeButton.id = 'home-button';
    homeButton.setAttribute('class','home-button');
    const homeLink = document.createElement('a');
    homeButton.appendChild(homeLink);
    homeLink.innerText = 'Home';
    homeLink.href = 'home.html';
    homeLink.id ='home-link';
    homeLink.setAttribute('class','home-link');
    homeLink.addEventListener('mouseover',mouseOver);

    const healthButton = document.createElement('button');
    healthButton.id = 'health-button';
    healthButton.setAttribute('class','health-button');
    const healthLink = document.createElement('a');
    healthButton.appendChild(healthLink);
    healthLink.innerText = 'Health';
    healthLink.href = 'health.html';
    healthLink.id ='health-link';
    healthLink.setAttribute('class','health-link');

    const financeButton = document.createElement('button');
 
    financeButton.id = 'finance-button';
    financeButton.setAttribute('class','finance-button');
    const financeLink = document.createElement('a');
    financeButton.appendChild(financeLink);
    financeLink.innerText = 'finance';
    financeLink.href = 'finance.html';
    financeLink.id ='finance-link';
    financeLink.setAttribute('class','finance-link');

    const cognitivityButton = document.createElement('button');
    
    cognitivityButton.id = 'cognitivity-button';
    cognitivityButton.setAttribute('class','cognitivity-button');
    const cognitivityLink = document.createElement('a');
    cognitivityButton.appendChild(cognitivityLink);
    cognitivityLink.innerText = 'cognitivity';
    cognitivityLink.href = 'cognitivity.html';
    cognitivityLink.id ='cognitivity-link';
    cognitivityLink.setAttribute('class','cognitivity-link');

    const ballContainer2 = document.getElementById('ball-container2');
    ballContainer2.appendChild(homeButton);
    const ballContainer4 = document.getElementById('ball-container4');
    ballContainer4.appendChild(healthButton);
    const ballContainer6 = document.getElementById('ball-container6');
    ballContainer6.appendChild(financeButton);
    const ballContainer8 = document.getElementById('ball-container8');
    ballContainer8.appendChild(cognitivityButton);
}

function timeLine () {
  let timeLineBox = document.createElement('div');
  timeLineBox.setAttribute('class', 'time-line');
  timeLineBox.id = 'time-line';
  console.log(timeLineBox)

}

timeLine();*/
