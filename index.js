
const colors= [];

function generateColor() {
    for (let i = 0; i < 10; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(randomColor);
}

console.log(colors);
}

function createButton() {

    generateColor()
    render()
}


function render() {
    document.getElementById('ball-container2').innerHTML = '';

    const homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    homeButton.style.backgroundColor = `${colors[2]}`;

    homeButton.style.backgroundImage = `linear-gradient(-180deg, ${colors[2]} 0%, #891515 100%)`;
    
    const ballContainer2 = document.getElementById('ball-container2');
    ballContainer2.appendChild(homeButton);
    ballContainer2.style.backgroundColor = `${colors[2]}`;

    const ballContainer4 = document.getElementById('ball-container4');
    ballContainer4.style.backgroundColor = `${colors[4]}`;
    const ballContainer6 = document.getElementById('ball-container6');
    ballContainer6.style.backgroundColor = `${colors[6]}`;
    const ballContainer8 = document.getElementById('ball-container8');
    ballContainer8.style.backgroundColor = `${colors[8]}`;
}