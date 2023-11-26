const clickMe = document.getElementById('click-me');
clickMe.onclick = render;

function render() {

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