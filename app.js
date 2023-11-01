
let records = [];
let moneyCount = 0;
let exerciseCount = 0;
let foodCount = 0;

const sortByDate = (records) => 
  records.sort(({date: a}, {date: b}) => a > b ? -1 : a < b ? 1 : 0)

const savedRecords = JSON.parse(localStorage.getItem('records'));
JSON.parse(localStorage.getItem('moneyCount'));

if (Array.isArray(savedRecords)) {
  records = savedRecords;
} else {
  records = [{
    date: 'none',
    money: 'none',
    exercise: 'none',
    food: 'none',
    weight: 'none',
  }];
}

render();

function createRecord (date,money, exercise,food,weight) {
  const id = '' + new Date().getTime();
  records.push ({
    date: date,
    money: money,
    exercise: exercise,
    food: food,
    weight: weight,
    id: id 
  });

  saveRecord();
  };

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

function moneyCounter(money){
  if (money !== '' && money !== '0'){
    moneyCount ++;
  }else {
    return;
  };
}

function exerciseCounter(exercise) {
  if (Math.floor(exercise) >= 60){
    exerciseCount ++;
  }else {
    return;
  };
}

function foodCounter(food) {
  if (food === 'yes'){
    foodCount ++;
  } else if (food === 'no'){
    return; 
  }else {
    foodCount ++;
  }
}

//if records.money is not null/ empty, moneyCounter ++, return moneyCounter
//if records.money is null/empty, moneyCounter is moneyCounter 


function saveRecord (){
  localStorage.setItem('records',JSON.stringify(records));
  localStorage.setItem('moneyCount',JSON.stringify(moneyCount));
  localStorage.setItem('exerciseCount',JSON.stringify(exerciseCount));
  localStorage.setItem('foodCount',JSON.stringify(foodCount));
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

  const weightPicker = document.getElementById('weight-picker');
  const weight = weightPicker.value;

  moneyCounter(money);
  exerciseCounter(exercise);
  foodCounter(food);
  createRecord(date, money, exercise,food,weight);
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
  document.getElementById('weight-record').innerHTML = '';
  document.getElementById('money-counter').innerHTML = moneyCount;
  document.getElementById('exercise-counter').innerHTML = exerciseCount;
  document.getElementById('food-counter').innerHTML = foodCount;

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

    const weightRow = document.createElement('div');
    weightRow.setAttribute('class','btm-clm-left-btm-row');
    weightRow.innerText = record.weight;
    
    const deleteRow = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.id = record.id;
    deleteButton.onclick = deleteRecord;
    deleteRow.setAttribute('class','btm-clm-left-btm-row');
    deleteButton.style = 'color: white; background-color: purple; height: 50%; font-size: 16px; border-radius: 5px; '
    deleteButton.innerText = 'X';
    deleteRow.appendChild(deleteButton);

    const dateRecords = document.getElementById('date-record');
    dateRecords.appendChild(dateRow);
    const moneyRecords = document.getElementById('money-record');
    moneyRecords.appendChild(moneyRow);
    const exerciseRecords = document.getElementById('exercise-record');
    exerciseRecords.appendChild(exerciseRow);
    const foodRecords = document.getElementById('food-record');
    foodRecords.appendChild(foodRow);
    const weightRecords = document.getElementById('weight-record');
    weightRecords.appendChild(weightRow);
    const deleteRecords = document.getElementById('delete-record');
    deleteRecords.appendChild(deleteRow);
  });
  
}

