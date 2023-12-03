//home page href 
const healthSection = document.getElementById('home-section-two');
const educationSection = document.getElementById('home-section-three');
const financeSection = document.getElementById('home-section-four');
//healthSection.style.opacity = '0';
//educationSection.style.opacity = '0';
//financeSection.style.opacity = '0';
let pos = 0;


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
// hide nav bar
function hideNav () {
  const nav = document.getElementById('nav');
  nav.style.display = 'none';
}

//hideNav();

//hide unneeded sections
function hideHomeSection () {
 
}

function showHealthSection () {
  healthSection.style.opacity = "1";
  healthSection.style.animationName = 'homeSectionAppear';
  healthSection.style.animationDuration = '2s';
}

//setTimeout(showHealthSection, 6000);

function scrollScreen () {
  if (pos == 1000) {
    clearInterval(scrollScreen);
  }else {
    pos++;
    window.scrollBy(0,pos/700);
  }
}

function scrollToHealth () {
  setInterval(scrollScreen,1);
}

//setTimeout(scrollToHealth, 5000);

//color animation 

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ok2animate = true;

function Drop() {
    this.x = Math.random() * (canvas.width - 20);
    this.y = -Math.random() * 180;
    this.fallRate = Math.random()*.5+.5;
}
//
Drop.prototype.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x - 5, this.y);
    ctx.lineTo(this.x, this.y - 7);
    ctx.lineTo(this.x + 5, this.y);
    ctx.arc(this.x, this.y, 5, 0, Math.PI);
    ctx.closePath();
    ctx.fill();
    return (this);
}
//
Drop.prototype.fall = function () {
    this.y += this.fallRate;
    return (this);
}

function animate() {

    // request another animation frame
    if (ok2animate) {
        requestAnimationFrame(animate);
    }

    // fill the canvas with the orange background
        ctx.fillStyle="black";
        ctx.fillRect(0,0,canvas.width,canvas.height)
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    // make all drops fall and then redraw them
    ctx.fillStyle = "white";
    for (var i = 0; i < drops.length; i++) {
        drops[i].fall().draw();
    }

}

// an array of objects each representing 1 drop
var drops = [];

// add some test drops
for (var i = 0; i < 50; i++) {
    drops.push(new Drop());
}

requestAnimationFrame(animate);

//sunshine

// homepage one section in the middle 
// render audio 
//render caption 
//render nav describe website about what 
// render HTML empty, prepare for next section 




//center time line  
//line show up from side and remain until finish 


