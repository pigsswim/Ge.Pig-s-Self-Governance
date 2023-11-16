
function setActive() {
  
  const unorderedList = document.getElementById('top');
  const lists = unorderedList.getElementsByTagName('li');
  const links = unorderedList.getElementsByTagName('a')
  for (i=0; i < links.length; i ++) {
      if (document.location.href.indexOf(links[i].href) >= 0) {
        const actives = document.querySelectorAll('.active');
        actives.forEach((active) =>{
        active.classList.remove('active');
  });
        lists[i].className = 'active';

    } 
  }
}

window.onload = setActive()


//home page 

function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

//difficult  learn more

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

function quad(timeFraction) {
  return Math.pow(timeFraction,2);
}

function animateButton() {
  let rootButton = document.getElementById('root-button');
  let field = document.getElementById('main');
  let height = field.clientHeight - rootButton.clientHeight;
  let width = 500;

  animate({
    duration: 4000,
    timing: makeEaseOut(bounce),
    draw(progress) {
      rootButton.style.top = height * progress + 'px';
    }
  });

  animate ({
    duration: 4000,
    timing:makeEaseOut(quad),
    draw: function(progress) {
      rootButton.style.left = width * progress + 'px';
    }
  })
};

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction)

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

// generate colorful balls 

const colors = [];
for (let i=0; i<10; i++) {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  colors.push(randomColor);
}