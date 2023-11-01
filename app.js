
let records;

const sortByDate = (records) => 
  records.sort(({date: a}, {date: b}) => a > b ? -1 : a < b ? 1 : 0)

const savedRecords = JSON.parse(localStorage.getItem('records'));

if (Array.isArray(savedRecords)) {
  records = savedRecords;
} else {
  records = [{
    date: 'none',
    money: 'none',
    exercise: 'none',
    food: 'none',
  }];
}

render();

function createRecord (date,money, exercise, food) {
  const id = '' + new Date().getTime();
  records.push ({
    date: date,
    money: money,
    exercise: exercise,
    food: food,
    id: id 
  });
  
  sortByDate(records);
  saveRecord();
}



function removeRecord (idToDelete){
  records = records.filter (function(record) {
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
  
  const moneyPicker = document.getElementById('money-picker');
  const money = moneyPicker.value;

  const exercisePicker = document.getElementById('exercise-picker');
  const exercise = exercisePicker.value;

  const foodPicker = document.getElementById('food-picker');
  const food = foodPicker.value;

  createRecord(date, money, exercise,food);
  render();
}

function deleteRecord (event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
  
  removeRecord(idToDelete);
  render();
}

function render() {
  document.getElementById('date-record').innerHTML = '';
  document.getElementById('money-record').innerHTML = '';
  document.getElementById('exercise-record').innerHTML = '';
  document.getElementById('food-record').innerHTML = '';
  document.getElementById('delete-record').innerHTML = '';

  records.forEach((record) => {
    
    const dateRow = document.createElement('div');
    dateRow.setAttribute('class','btm-clm-left-btm-row')
    dateRow.innerText = record.date;
    
    const moneyRow = document.createElement('div');
    moneyRow.setAttribute('class','btm-clm-left-btm-row');
    moneyRow.innerText = record.money;
    
    const exerciseRow = document.createElement('div');
    exerciseRow.setAttribute('class','btm-clm-left-btm-row');
    exerciseRow.innerText = record.exercise;
    
    const foodRow = document.createElement('div');
    foodRow.setAttribute('class','btm-clm-left-btm-row');
    foodRow.innerText = record.food;

    const deleteRow = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.id = record.id;
    deleteButton.onclick = deleteRecord;
    deleteRow.setAttribute('class','btm-clm-left-btm-row');
    deleteButton.innerText = 'Delete';
    deleteRow.appendChild(deleteButton);

    const dateRecords = document.getElementById('date-record');
    dateRecords.appendChild(dateRow);
    const moneyRecords = document.getElementById('money-record');
    moneyRecords.appendChild(moneyRow);
    const exerciseRecords = document.getElementById('exercise-record');
    exerciseRecords.appendChild(exerciseRow);
    const foodRecords = document.getElementById('food-record');
    foodRecords.appendChild(foodRow);
    const deleteRecords = document.getElementById('delete-record');
    deleteRecords.appendChild(deleteRow);
    
  })
}

