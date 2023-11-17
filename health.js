//health 
google.charts.load('current', {'packages':['line','corechart']});
google.charts.setOnLoadCallback(drawChart);

let records = [];
let counters = [];
let moneyCount = 0;
let exerciseCount = 0;
let foodCount = 0;

const sortByDate = (records) => 
  records.sort(({date: a}, {date: b}) => a > b ? -1 : a < b ? 1 : 0)

const savedRecords = JSON.parse(localStorage.getItem('records'));
const savedMoneyCount = JSON.parse(localStorage.getItem('moneyCount'));
const savedExerciseCount = JSON.parse(localStorage.getItem('exerciseCount'));
const savedFoodCount = JSON.parse(localStorage.getItem('foodCount'));

if (Array.isArray(savedRecords)) {
  records = savedRecords;
  moneyCount = savedMoneyCount;
  exerciseCount = savedExerciseCount;
  foodCount = savedFoodCount;
 
} else {
  records = [];
}

render();

function createRecord (date,money,exercise,food,weight) {
  
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
      }else {
        return moneyCount;
      }
    }
  })
  saveRecord();
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
  
  reduceExerciseCount(idToDelete);
  reduceFoodCount(idToDelete);
  reduceMoneyCount(idToDelete);
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
    deleteButton.setAttribute('class','delete-button');
    deleteButton.style.textAlign = 'inline-block';
    deleteButton.onclick = deleteRecord;
    deleteRow.setAttribute('class','btm-clm-left-btm-row');
    deleteButton.innerText = 'x';
    deleteRow.appendChild(deleteButton);

    if (records.indexOf(record)%2 === 1) {
      dateRow.style = 'background-color: #212121';
      moneyRow.style = 'background-color: #212121';
      exerciseRow.style = 'background-color: #212121';
      foodRow.style = 'background-color: #212121';
      weightRow.style = 'background-color: #212121';
      deleteRow.style = 'background-color: #212121';
    }else {
      dateRow.style = 'background-color: #616161';
      moneyRow.style = 'background-color: #616161';
      exerciseRow.style = 'background-color: #616161';
      foodRow.style = 'background-color: #616161';
      weightRow.style = 'background-color: #616161';
      deleteRow.style = 'background-color: #616161';
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

//entire page 

function setActive() {
  
  const unorderedList = document.getElementById('top');
  const lists = unorderedList.getElementsByTagName('li');
  const links = unorderedList.getElementsByTagName('a')
  for (i=0; i < links.length; i ++) {
      if (document.location.href.indexOf(links[i].href) >= 0) {
        const actives = document.querySelectorAll('.active');
        actives.forEach((active) =>{
        active.classList.remove('active');
  });
        lists[i].className = 'active';

    } 
  }
}

window.onload = setActive()

// graph 
function drawChart() {

    var chartDiv = document.getElementById('chart_div');
  
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Month');
    data.addColumn('number', "Average Temperature");
    data.addColumn('number', "Average Hours of Daylight");

    var d = new Date();
  
    data.addRows([
      [new Date(2023, 0),  -.5,  5.7],
      [new Date(2023, 1),   .4,  8.7],
      [new Date(2023, 2),   .5,   12],
      [new Date(2023, 3),  2.9, 15.3],
      [new Date(2023, 4),  6.3, 18.6],
    ]);

    data.addRows([
        [d, 6,8]
    ])
  
    var materialOptions = {
      chart: {
        title: 'Expenditure and Weight Change Throughout a Month'
      },
      width: 900,
      height: 500,
      series: {
        // Gives each series an axis name that matches the Y-axis below.
        0: {axis: 'Weight'},
        1: {axis: 'Money'}
      },
      axes: {
        // Adds labels to each axis; they don't have to match the axis names.
        y: {
          Weight: {label: 'Weight'},
          Money: {label: 'Money'}
        }
      }
    };
  
    function drawMaterialChart() {
      var materialChart = new google.charts.Line(chartDiv);
      materialChart.draw(data, materialOptions);
    }

    drawMaterialChart();
  };
