
/*function addRow(){
    const datePicker = document.getElementById('date-picker');
    const dateClm = document.getElementById('date-column');
    const dateRow = document.createElement('div');
    dateRow.setAttribute('class','btm-clm-row');
    dateRow.innerText = datePicker.value;

    const contentPicker = document.getElementById('content-picker');
    const contentClm = document.getElementById('content-column');
    const contentRow = document.createElement('div');
    contentRow.setAttribute('class','btm-clm-row');
    contentRow.innerText = contentPicker.value;

    const progressPicker = document.getElementById('progress-picker');
    const progressClm = document.getElementById('progress-column');
    const progressRow = document.createElement('div');
    progressRow.setAttribute('class','btm-clm-row');
    progressRow.innerText = progressPicker.value;;

    dateClm.appendChild(dateRow);
    contentClm.appendChild(contentRow);
    progressClm.appendChild(progressRow);    
}*/

let records;

const savedRecords = JSON.parse(localStorage.getItem('records'));
records = savedRecords;

function createRecord (date,content,progress){
    const id = '' + new Date().getTime();
    records.push ({
        date: date,
        content: content,
        progress: progress,
        id: id
    });
    saveRecord();
}

function removeRecord (idToDelete){
    records = records.filter (function (record){
        if (record.id === idToDelete) {
            return false;
        } else {
            return true;
        };
    });
    saveRecord();
}

function saveRecord (){
    localStorage.setItem('records',JSON.stringify(records));
}

function addRecord (){
    const datePicker = document.getElementById('date-picker');
    const date = datePicker.value;

    const contentPicker = document.getElementById('content-picker');
    const content = contentPicker.value;

    const progressPicker = document.getElementById('progress-picker');
    const progress = progressPicker.value;

    createRecord (date, content, progress);
    render();
}

function deleteRecord(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    
    removeRecord(idToDelete);
    render();
}

function render (){

    document.getElementById('date-btm-clm-row-btm').innerHTML = '';
    document.getElementById('content-btm-clm-row-btm').innerHTML = '';
    document.getElementById('progress-btm-clm-row-btm').innerHTML = '';
    document.getElementById('delete-btm-clm-row-btm').innerHTML = '';

    records.forEach ((record) =>{
        
        const dateRow = document.createElement('div');
        dateRow.setAttribute('class','btm-clm-row');
        dateRow.innerText = record.date;
        
        const contentRow = document.createElement('div');
        contentRow.setAttribute('class','btm-clm-row');
        contentRow.innerText = record.content;
        
        const progressRow = document.createElement('div');
        progressRow.setAttribute('class','btm-clm-row');
        progressRow.innerText = record.progress;
        
        const deleteRow = document.createElement('div');
        const deleteButton = document.createElement('button');
        deleteButton.id = record.id;
        deleteButton.onclick = deleteRecord;
        deleteRow.setAttribute('class','btm-clm-row');
        deleteButton.innerText = 'Delete';
        deleteRow.appendChild(deleteButton);

        const dateClm = document.getElementById('date-btm-clm-row-btm');
        dateClm.appendChild(dateRow);
        const contentClm = document.getElementById('content-btm-clm-row-btm');
        contentClm.appendChild(contentRow);
        const progressClm = document.getElementById('progress-btm-clm-row-btm');
        progressClm.appendChild(progressRow);
        const deleteClm = document.getElementById('delete-btm-clm-row-btm');
        deleteClm.appendChild(deleteRow);
    })
}

