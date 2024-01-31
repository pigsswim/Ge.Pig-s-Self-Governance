const textBox = document.getElementById('text-box')
const enterButton = document.getElementById('enter-button')
enterButton.addEventListener('click',debug)
let i = 0;
let result;
let textArray;
let dictionary = [
    {
        cn: 'ai',
        en: 'I',
        de: 'ei',
        pt: 'ai',
    },

    {
        cn: 'l',
        en: 'l',
        de: 'l',
        pt: 'l',
    },
    
    {
        cn: 'u',
        en: ['o','ou'],
        de: 'a',
        pt: 'a',
    },

    {
        cn: 'w',
        en: ['v', 've'],
        de: 'w',
        pt: 've'
    },

    {
        cn: 'y',
        en: 'y',
        de: 'ie',
        pt: 'i',
    },

    {
        cn: 'ü',
        en: 'ou',
        de: 'ü',
        pt: 'u',
    }
]

let chinese = ['ai','l','a','w','y','ü'];
let english = ['I','l',['o','ou'],['v','ve'],'y'];

function debug () {
    userInput();
}

//control 
// grab user input 

function userInput() {
    let userInput = textBox.value;
    let splitUserInput = userInput.split('')
    console.log(splitUserInput)
    let userInputConcat = [];
    splitUserInput.forEach(() => {
        console.log(Array.of(userInputConcat))
    })
}