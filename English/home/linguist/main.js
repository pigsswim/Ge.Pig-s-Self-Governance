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


//form English phonenmes

function debug() {
    let phoeneme = '';
    let newText = [];
    let text = textBox.value;
    let textArray = text.split('');
    let i = 0;
    textArray.forEach((english) => {
            let y = 0;y<english.length;y++;
            if (textArray[i] !== english[y]) {
                y++;
            }else {
                newText.push(textArray[i])
                console.log(newText);
            }
        })
}


//find y, find ou 
//match y with ou, 
//push new word,into new array?
