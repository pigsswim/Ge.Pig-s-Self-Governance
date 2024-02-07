let textBox = document.getElementById('text-box')
const enterButton = document.getElementById('enter-button')
enterButton.addEventListener('click',reorganizeEnglish)
let i = 0;
let result;
let textArray;
let newText = [];
let chinese = [];
let dictionary = [
    {
        en:'y',
        cn:'ü',
    },
    {
        en:'o',
        cn: 'a',
    },
    {
        en:'o',
        cn:'a',
    },
    {
        en:'ou',
        cn:'ü',
    },
    {
        en:'l',
        cn:'l',
    },
    {
        en:'v',
        cn:'w',
    },
    {
        en:'ve',
        cn:'w',
    },
    {
        en:'I',
        cn:"ai",
    }
]


//fin Chinese have problems
function findChinese () {
    for (let i=0;i<newText.length;i++) {
        for (let z=0;z<dictionary.length;z++){
            if (dictionary[z].cn === newText[i]) {
                console.log(dictionary[z].cn)
                z++;
            }else {
                console.log(newText[i])
            }
    }
    }
    

}

function reorganizeEnglish () {
    let input = textBox.value;
    let text = input.split('');
    for (let i=0;i<text.length;i++) {
        if (text[i] === 'v') {
            let placeholder = 'v';
            let compoundword = placeholder + text[i+1];
            if (compoundword === 've') {
                newText.push(compoundword)
                text.splice(i+1,1)
            }
        }else if (text[i] === 'o') {
            let placeholder = 'o';
            let compoundword = placeholder + text[i+1];
            if (compoundword === 'ou') {
                newText.push(compoundword)
                text.splice(i+1,1)
            }else if (compoundword !== 'ou') {
                newText.push(text[i])
            }
        }
        else {
            newText.push(text[i])
        }
    }
    findChinese();
}


//control 
// grab user input 
