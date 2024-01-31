//change theme


function dayTheme () {
    localStorage.setItem('bgcolor','white');
    document.body.style.backgroundColor = localStorage.bgcolor ||'white';
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.color = 'black';
    const goalWeight = document.getElementById('goal-weight');
    goalWeight.style.border = '1px solid black';
    const currentWeight = document.getElementById('current-weight');
    currentWeight.style.border = '1px solid black';
    const goalDays = document.getElementById('goal-days');
    goalDays.style.border = '1px solid black';
  }

    window.addEventListener('load',() => {
        console.log('notok')
        console.log(document.body.style.backgroundColor)

        document.body.style.backgroundColor = localStorage.bgcolor;
    })
  

  function nightTheme() {
    document.body.style.backgroundColor ='black';
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.color = 'white';
    const goalWeight = document.getElementById('goal-weight');
    goalWeight.style.border = '1px solid black';
    const currentWeight = document.getElementById('current-weight');
    currentWeight.style.border = '1px solid black';
    const goalDays = document.getElementById('goal-days');
    goalDays.style.border = '1px solid black';
  }