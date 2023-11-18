
let colors= [];
const clickMe = document.getElementById('click-me');
clickMe.addEventListener('click',createButton);

function generateColor() {
    for (let i = 0; i < 10; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(randomColor);
}
    if (colors.length >10) {
    colors = colors.slice(9,-1);
}
}

function createButton() {
    generateColor()
    render()
}

setInterval(createButton,2000);

function goHome() {
    window.location.href = 'home.html';
}

function render() {
    document.getElementById('ball-container2').innerHTML = '';
    document.getElementById('ball-container4').innerHTML = '';
    document.getElementById('ball-container6').innerHTML = '';
    document.getElementById('ball-container8').innerHTML = '';

    const homeButton = document.createElement('button');
    const homeButtonSpan = document.createElement('span');
    homeButtonSpan.innerText = 'Home';
    homeButtonSpan.style.cssText = `
    color: #f2edd8;
      background-image: linear-gradient(0deg, #d73936 0%, #f2edd8 100%);
      -webkit-background-clip: text;
      background-clip: text;
      filter: drop-shadow(0 2px 2px rgb(80, 9, 12));
      `

    homeButton.appendChild(homeButtonSpan);
    homeButton.style.cssText = `
    background-color: ${colors[2]};
    height: 100px;
    width: 100px;
    font-size: 20px;
    color: #f2edd6;
    cursor: pointer;
    position: relative;
    border-radius: 60px;
    font-weight: 600;
    border: 1px solid ${colors[2]};
    background-image: linear-gradient(-180deg, ${colors[2]} 0%, ${colors[2]} 100%);
    box-shadow: 0 16px 20px 0 rgba(113, 26, 19, 0.5),
                              0 -4px 20px rgb(84, 4, 4) inset,
                              0 12px 8px rgba(98, 23, 23, 0.4) inset,
                              0 4px 8px 0 rgb(141, 39, 44) inset;
    
    `

    const healthButton = document.createElement('button');
    const healthButtonSpan = document.createElement('span');
    healthButtonSpan.innerText = 'Health';
    healthButton.appendChild(healthButtonSpan);
    healthButton.style.cssText = `
    background-color: ${colors[4]};
    height: 100px;
    width: 100px;
    font-size: 20px;
    color: #f2edd6;
    cursor: pointer;
    position: relative;
    border-radius: 60px;
    font-weight: 600;
    border: 1px solid ${colors[4]};
    background-image: linear-gradient(-180deg, ${colors[4]} 0%, ${colors[4]} 100%);
    box-shadow: 0 16px 20px 0 rgba(113, 26, 19, 0.5),
                              0 -4px 20px rgb(84, 4, 4) inset,
                              0 12px 8px rgba(98, 23, 23, 0.4) inset,
                              0 4px 8px 0 rgb(141, 39, 44) inset;
    
    `

    const financeButton = document.createElement('button');
    const financeButtonSpan = document.createElement('span');
    financeButtonSpan.innerText = 'Finance';
    financeButton.appendChild(financeButtonSpan);
    financeButton.style.cssText = `
    background-color: ${colors[6]};
    height: 100px;
    width: 100px;
    font-size: 20px;
    color: #f2edd6;
    cursor: pointer;
    position: relative;
    border-radius: 60px;
    font-weight: 600;
    border: 1px solid ${colors[6]};
    background-image: linear-gradient(-180deg, ${colors[6]} 0%, ${colors[6]} 100%);
    box-shadow: 0 16px 20px 0 rgba(113, 26, 19, 0.5),
                              0 -4px 20px rgb(84, 4, 4) inset,
                              0 12px 8px rgba(98, 23, 23, 0.4) inset,
                              0 4px 8px 0 rgb(141, 39, 44) inset;
    
    `

    const cognitivityButton = document.createElement('button');
    const cognitivityButtonSpan = document.createElement('span');
    cognitivityButtonSpan.innerText = 'Cognitive';
    cognitivityButton.appendChild(cognitivityButtonSpan);
    cognitivityButton.style.cssText = `
    background-color: ${colors[8]};
    height: 100px;
    width: 100px;
    font-size: 20px;
    color: #f2edd6;
    cursor: pointer;
    position: relative;
    border-radius: 60px;
    font-weight: 600;
    border: 1px solid ${colors[8]};
    background-image: linear-gradient(-180deg, ${colors[8]} 0%, ${colors[8]} 100%);
    box-shadow: 0 16px 20px 0 rgba(113, 26, 19, 0.5),
                              0 -4px 20px rgb(84, 4, 4) inset,
                              0 12px 8px rgba(98, 23, 23, 0.4) inset,
                              0 4px 8px 0 rgb(141, 39, 44) inset;
    
    `
    
    const ballContainer2 = document.getElementById('ball-container2');
    ballContainer2.appendChild(homeButton);

    const ballContainer4 = document.getElementById('ball-container4');
    ballContainer4.appendChild(healthButton);

    const ballContainer6 = document.getElementById('ball-container6');
    ballContainer6.appendChild(financeButton);

    const ballContainer8 = document.getElementById('ball-container8');
    ballContainer8.appendChild(cognitivityButton);
}

//homeButton.onclick = window.location.href = 'home.html';
/*

                              */