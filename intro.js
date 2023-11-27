// onload call javascript function 
let timer =0;
let speed = 1000;
let i = 0;
let curtain = document.getElementById('curtain');
let screen = document.getElementById('screen');
let title = document.createElement('h1');

function intro () {
  const curtain = document.createElement('div');
  curtain.id = 'curtain';
  curtain.className ='curtain';
  document.body.appendChild(curtain)
  screen.onload = setTimeout(typeTitle,1000);
  curtain.appendChild(title);
}

intro();

function typeTitle () {
  let a = 'The Story of I-Have-No-Idea-Who';
  if (i<a.length){
    title.innerHTML += a.charAt(i);
    i++;
  }
  setTimeout(typeTitle, 60);
}

function renderBackground() {
  document.body.innerHTML = '';
}

setTimeout(renderBackground,speed*10);


function firstLine() {
  if (timer == 150) {
    clearInterval(firstLine);
  }else {
    timer ++;
    let line = 'ok' +`${timer}`;
    console.log(line);
    c.beginPath();
    c.lineWidth = '0.5';
    c.strokeStyle = 'white';
    c.moveTo(0,20);
    c.lineTo(timer,20);
    c.stroke();

  }
  setTimeout(firstLine, 5);
}

setTimeout(firstLine,speed*11)








