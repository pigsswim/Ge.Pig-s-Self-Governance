
window.addEventListener('scroll',navOpacity, false)

window.addEventListener('load',() => {
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;
      //health

  const dropdown = document.getElementById('dropdown-content');
  dropdown.style.color = localStorage.elemcolor;
  const goalWeight = document.getElementById('goal-weight');
  goalWeight.style.border = `1px solid black`;
  const currentWeight = document.getElementById('current-weight');
  currentWeight.style.border = `1px solid black`;
  const goalDays = document.getElementById('goal-days');
  goalDays.style.border = `1px solid black`;
})

function dayTheme () {
  localStorage.setItem('bgcolor','white');
  localStorage.setItem('elemcolor','black');
  localStorage.setItem('wrappercolor', '#f8f8f8');
  localStorage.setItem('homeTextColor','black');
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;

  
    //health page
    const dropdown = document.getElementById('dropdown-content');
    const goalWeight = document.getElementById('goal-weight');
    const currentWeight = document.getElementById('current-weight');
    const goalDays = document.getElementById('goal-days');
    dropdown.style.color = localStorage.darkcolor || 'black';
    goalWeight.style.border = `1px solid ${localStorage.elemcolor}`;
    currentWeight.style.border = `1px solid ${localStorage.elemcolor}`;
    goalDays.style.border = `1px solid ${localStorage.elemcolor}`;

}

function nightTheme() {
  localStorage.setItem('bgcolor','black');
  localStorage.setItem('elemcolor', 'white');
  localStorage.setItem('wrappercolor','#0c0c0c');
  localStorage.setItem('homeTextColor','#FBFCF8');
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;

  //health
  const dropdown = document.getElementById('dropdown-content');
  dropdown.style.color = localStorage.elemcolor;
  const goalWeight = document.getElementById('goal-weight');
  goalWeight.style.border = `1px solid ${localStorage.bgcolor}`;
  const currentWeight = document.getElementById('current-weight');
  currentWeight.style.border = `1px solid ${localStorage.bgcolor}`;
  const goalDays = document.getElementById('goal-days');
  goalDays.style.border = `1px solid ${localStorage.bgcolor}`;
}

function navOpacity() {
  const navigation = document.getElementById('nav');
  this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
}
