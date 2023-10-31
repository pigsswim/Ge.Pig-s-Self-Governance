
let dateRow;
let contentRow;
let statusRow;

const savedDateRow = JSON.parse(localStorage.getItem('dateRow'));
const savedContentRow = JSON.parse(localStorage.getItem('contentRow'));
const savedStatusRow = JSON.parse(localStorage.getItem('statusRow'));

function addRow(){
    const dateClm = document.getElementById('date-column');
    const datePicker = document.getElementById('date-picker');
    const dateRow = document.createElement('div');
    dateRow.setAttribute('class','btm-clm-row');
    dateRow.innerText = datePicker.value;

    const contentClm = document.getElementById('content-column');
    const contentPicker = document.getElementById('content-picker');
    const contentRow = document.createElement('div');
    contentRow.innerText = contentPicker.value;
    contentRow.setAttribute('class','btm-clm-row');

    const statusClm = document.getElementById('status-column');
    const statusPicker = document.getElementById('status-picker');
    const statusRow = document.createElement('div');
    statusRow.setAttribute('class','btm-clm-row');
    statusRow.innerText = statusPicker.value;


    dateClm.appendChild(dateRow);
    contentClm.appendChild(contentRow);
    statusClm.appendChild(statusRow);   
}

function saveRow (){
    localStorage.setItem('dateRow',JSON.stringify(dateRow));
    localStorage.setItem('contentRow',JSON.stringify(contentRow));
    localStorage.setItem('statusRow',JSON.stringify(statusRow));
}