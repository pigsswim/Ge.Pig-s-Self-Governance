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
        cn:'y',
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


//find Chinese have problems
function findChinese () {
    for (let i=0;i<newText.length;i++) {
        switch (newText[i]) {
            case ' ':
                chinese.push(newText[i]);
                break;
            case ',':
                chinese.push(newText[i]);
                break;
            case '.':
                chinese.push(newText[i]);
                break;
        }
        for (let z=0;z<dictionary.length;z++){
            if (dictionary[z].en == newText[i]) {
                chinese.push(dictionary[z].cn)
                z++;
                console.log(chinese)
            }
            }
    }
    }


//break user input into letter.
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
    //providePronounciation();
    formWords();
}

//render results 
//combine letters into seperated words
function formWords() {
    let cnText;
    for (let i =0;i<chinese.length;i++) {
        cnText = '' + chinese[i];
        console.log(cnText);
    }
}

function renderPronounciation() {
     
}
