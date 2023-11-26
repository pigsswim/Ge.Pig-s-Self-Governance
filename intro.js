// onload call javascript function 
let pos = 0;
let id = null;
let i = 0;
let curtain = document.getElementById('curtain');
let screen = document.getElementById('screen');
let title = document.createElement('h1');
let screenHeight = screen.offsetHeight;
let screenWidth = screen.offsetWidth;

function intro () {
  screen.onload = setTimeout(typeTitle,1500);

  render();
  setTimeout(curtainUp, 5000);
}

intro();

screen.onended()

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
  if (pos == screenHeight) {
    clearInterval(id);
  }else {
    pos ++;
    screen.style.height = pos + 'px';
  }
}

function render() {
  curtain.appendChild(title);
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