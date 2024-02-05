//change theme




function dayTheme () {
    localStorage.setItem('brightbgcolor','white');
    localStorage.setItem('darkcolor','black');
    document.body.style.backgroundColor = localStorage.brightbgcolor ||'white';
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.color = localStorage.darkcolor || 'black';
    const goalWeight = document.getElementById('goal-weight');
    goalWeight.style.border = '1px solid black';
    const currentWeight = document.getElementById('current-weight');
    currentWeight.style.border = '1px solid black';
    const goalDays = document.getElementById('goal-days');
    goalDays.style.border = '1px solid black';
  }

  function nightTheme() {
    localStorage.setItem('darkbgcolor','black');
    localStorage.setItem('brightcolor', 'white');
    document.body.style.backgroundColor = localStorage.darkbgcolor || 'black';
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.color = localStorage.brightcolor;
    const goalWeight = document.getElementById('goal-weight');
    goalWeight.style.border = '1px solid black';
    const currentWeight = document.getElementById('current-weight');
    currentWeight.style.border = '1px solid black';
    const goalDays = document.getElementById('goal-days');
    goalDays.style.border = '1px solid black';
  }

  window.addEventListener('load',() => {
    if (document.body.style.backgoundColor === localStorage.brightbgcolor) {
      dayTheme();
      console.log('day')
    }else {
      nightTheme();
      console.log('night')
    }
      
    }
  )

function navOpacity() {
    const navigation = document.getElementById('nav');
    this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
  }
  
window.addEventListener('scroll',navOpacity, false)
