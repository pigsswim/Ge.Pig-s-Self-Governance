// onload call javascript function 
let pos = 0;
let id = null;
let i = 0;
let curtain = document.getElementById('curtain');
let screen = document.getElementById('screen');
let title = document.createElement('h1');
let screenHeight = screen.offsetHeight;
let screenWidth = screen.offsetWidth;

function introBegin () {
  screen.onload = setTimeout(typeTitle,1500);

  render();
  setTimeout(curtainUp, 5000);
}

introBegin();

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


