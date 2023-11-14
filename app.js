
let records = [];
let counters = [];
let moneyArray = [];
let exerciseArray = [];
let data = [];
let layout = {};
let moneyCount = 0;
let exerciseCount = 0;
let foodCount = 0;

const sortByDate = (records) => 
  records.sort(({date: a}, {date: b}) => a > b ? -1 : a < b ? 1 : 0)

const savedRecords = JSON.parse(localStorage.getItem('records'));
const savedMoneyCount = JSON.parse(localStorage.getItem('moneyCount'));
const savedExerciseCount = JSON.parse(localStorage.getItem('exerciseCount'));
const savedFoodCount = JSON.parse(localStorage.getItem('foodCount'));
const savedMoneyArray = JSON.parse(localStorage.getItem('moneyArray'));
const savedExerciseArray = JSON.parse(localStorage.getItem('exerciseArray'));
const savedData = JSON.parse(localStorage.getItem('data'));
const savedLayout = JSON.parse(localStorage.getItem('layout'));

if (Array.isArray(savedRecords)) {
  records = savedRecords;
  moneyCount = savedMoneyCount;
  exerciseCount = savedExerciseCount;
  foodCount = savedFoodCount;
 
} else {
  records = [{
    date: 'none',
    money: 'none',
    exercise: 'none',
    food: 'none',
    weight: 'none',
  }];
}

function createRecord (date,money,exercise,food,weight) {
  moneyArray.push(money);
  exerciseArray.push(exercise);

  data = [{
    x:moneyArray,
    y:exerciseArray,
    mode:"markers"
  }];

    layout = {
    xaxis: {range: [0, 100], title: "Macau patacas"},
    yaxis: {range: [0, 90], title: "Exercise in Minutes"},  
    title: "Exercise vs. Money Spent"
  };
  
  const id = '' + new Date().getTime();
  records.push ({
    date: date,
    money: money,
    exercise: exercise,
    food: food,
    weight: weight,
    id: id 
  });

  //Plotly.newPlot("plot", data, layout);
  saveRecord();
  };

  //if id match, get money, exercise, food, weight, reduce counter
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
    saveRecord();
  }

function reduceMoneyCount(idToDelete) {
  records.forEach ((record) => {
    if (record.id === idToDelete) {
      if (record.money !== '' && moneyCount > 0){
        moneyCount --;
        console.log(moneyCount);
      }else {
        return moneyCount;
      }
    }
  })
  saveRecord();
}

//reduce all counters in one function? learn if else 'return true' why?
function reduceMoneyCounter (idToDelete) {
  records = records.filter((record) => {
    if (record.id === idToDelete) {
      if (record.money !== '' && moneyCount > 0) {
        moneyCount -- ;
      }else {
        return;
      }
    }else{
      return true;
    }
  }
  )
}

function exerciseCounter(exercise) {
  if (Math.floor(exercise) >= 60){
    exerciseCount ++;
  }else {
    return;
  };
  saveRecord();
}

function reduceExerciseCount(idToDelete) {
  records.forEach((record) => {
    if (record.id === idToDelete) {
      if (record.exercise !== '' && exerciseCount > 0 ) {
        exerciseCount --;
        console.log(exerciseCount);
      }else {
        return exerciseCount;
      }
    }
  })
  saveRecord();
}

function foodCounter(food) {
  if (food === 'Yes'){
    foodCount ++;
  } else if (food === 'No'){
    return; 
  }else {
    return
  }
  saveRecord();
}

function reduceFoodCount (idToDelete) {
  records.forEach((record) => {
    if(record.id === idToDelete) {
      if (record.food === 'Yes' && foodCount > 0) {
        foodCount --;
      }else {
        return foodCount;
      }
    }
  })
  saveRecord();
}

function saveRecord (){
  localStorage.setItem('records',JSON.stringify(records));
  localStorage.setItem('moneyCount',JSON.stringify(moneyCount));
  localStorage.setItem('exerciseCount',JSON.stringify(exerciseCount));
  localStorage.setItem('foodCount',JSON.stringify(foodCount));
  localStorage.setItem('moneyArray',JSON.stringify(moneyArray));
  localStorage.setItem('exerciseArray',JSON.stringify(exerciseArray));
  localStorage.setItem('data',JSON.stringify(data));
  localStorage.setItem('layout',JSON.stringify(layout));
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
  
// if index in array is even number give one color
// if index in array is odd number give another color;
// 
    

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

    if (records.indexOf(record)%2 === 1) {
      dateRow.style = 'background-color: lightsalmon';
      moneyRow.style = 'background-color: lightsalmon';
      exerciseRow.style = 'background-color: lightsalmon';
      foodRow.style = 'background-color: lightsalmon';
      weightRow.style = 'background-color: lightsalmon';
      deleteRow.style = 'background-color: lightsalmon';
    }else {
      dateRow.style = 'background-color: darkolivegreen';
      moneyRow.style = 'background-color: darkolivegreen';
      exerciseRow.style = 'background-color: darkolivegreen';
      foodRow.style = 'background-color: darkolivegreen';
      weightRow.style = 'background-color: darkolivegreen';
      deleteRow.style = 'background-color: darkolivegreen';
    }

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


// try plot 


// Define Data
/*const data = [{
  x:xArray,
  y:yArray,
  mode:"markers"
}];

// Define Layout
const layout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},  
  title: "House Prices vs. Size"
};

// Display using Plotly

Plotly.newPlot("plot", data, layout);
*/

//For analysis graphics, practice codes go here. 


// update mouse pointer coordinates

const cognitivity = document.getElementById('cognitivity');
const health = document.getElementById('health');
const main = document.getElementById('main');

function callCognitivity() {
  document.getElementById('main').innerHTML = '';
}

//active page link 


function setActive() {
  const links = document.getElementById('top').getElementsByTagName('a');
  const lists = document.getElementById('top').getElementsByTagName('li');
  for (i=0; i < links.length; i ++) {
    if (document.location.href.indexOf(links[i].href) >= 0) {
      lists[i].className = 'active';
    }
  }
}

window.onload = setActive();
