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








// homepage one section in the middle 
// render audio 
//render caption 
//render nav describe website about what 
// render HTML empty, prepare for next section 




//center time line  
//line show up from side and remain until finish 


