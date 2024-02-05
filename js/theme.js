//change theme




function dayTheme () {
    localStorage.setItem('bgcolor','white');
    localStorage.setItem('elemcolor','black');
    document.body.style.backgroundColor = localStorage.bgcolor ||'white';
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.color = localStorage.darkcolor || 'black';
    const goalWeight = document.getElementById('goal-weight');
    goalWeight.style.border = `1px solid ${localStorage.elemcolor}`;
    const currentWeight = document.getElementById('current-weight');
    currentWeight.style.border = `1px solid ${localStorage.elemcolor}`;
    const goalDays = document.getElementById('goal-days');
    goalDays.style.border = `1px solid ${localStorage.elemcolor}`;
  }

  function nightTheme() {
    localStorage.setItem('bgcolor','black');
    localStorage.setItem('elemcolor', 'white');
    document.body.style.backgroundColor = localStorage.bgcolor || 'black';
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.color = localStorage.elemcolor;
    const goalWeight = document.getElementById('goal-weight');
    goalWeight.style.border = `1px solid ${localStorage.bgcolor}`;
    const currentWeight = document.getElementById('current-weight');
    currentWeight.style.border = `1px solid ${localStorage.bgcolor}`;
    const goalDays = document.getElementById('goal-days');
    goalDays.style.border = `1px solid ${localStorage.bgcolor}`;
  }

  window.addEventListener('load',() => {
    document.body.style.backgroundColor = localStorage.bgcolor;
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.color = localStorage.elemcolor;
    const goalWeight = document.getElementById('goal-weight');
    goalWeight.style.border = `1px solid black`;
    const currentWeight = document.getElementById('current-weight');
    currentWeight.style.border = `1px solid black`;
    const goalDays = document.getElementById('goal-days');
    goalDays.style.border = `1px solid black`;
  })

function navOpacity() {
    const navigation = document.getElementById('nav');
    this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
  }
  
window.addEventListener('scroll',navOpacity, false)
