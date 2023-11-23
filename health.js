
//health 
google.charts.load('current', {'packages':['line','corechart']});
google.charts.setOnLoadCallback(drawChart);

let records = [];
let counters = [];
let moneyCount = 0;
let exerciseCount = 0;
let foodCount = 0;
let days = 30;
let moneySpent = 0;
let weightTolose = 0;

const sortByDate = (records) => 
  records.sort(({date: a}, {date: b}) => a > b ? -1 : a < b ? 1 : 0)

const savedRecords = JSON.parse(localStorage.getItem('records'));
const savedMoneyCount = JSON.parse(localStorage.getItem('moneyCount'));
const savedExerciseCount = JSON.parse(localStorage.getItem('exerciseCount'));
const savedFoodCount = JSON.parse(localStorage.getItem('foodCount'));
const savedDays = JSON.parse(localStorage.getItem('days'));
const savedMoneySpent = JSON.parse(localStorage.getItem('moneySpent'));
const savedWeightTolose = JSON.parse(localStorage.getItem('weightTolose'));

if (Array.isArray(savedRecords)) {
  records = savedRecords;
  moneyCount = savedMoneyCount;
  exerciseCount = savedExerciseCount;
  foodCount = savedFoodCount;
  days = savedDays;
  moneySpent = savedMoneySpent;
  weightTolose = savedWeightTolose;
 
} else {
  records = [];
}

render();

function createRecord (date,money,exercise,food,weight,remark) {

  //function to generate Remark 
  if (weight > 45) {
    remark = 'Fat Pig!';
  }else if (weight < 45 && weight > 43) {
    remark = 'Not fat, but needs LOTS of exercise.';
  }else if (weight < 43 && weight > 40) {
    remark = 'Healthy, not fat, exercise everyday.';
  }else if (weight < 40) {
    remark = 'Congratulations, you are about to see Jesus.';
  }
  
  const id = '' + new Date().getTime();
  records.push ({
    date: date,
    money: money,
    exercise: exercise,
    food: food,
    weight: weight,
    remark: remark,
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

function daysCounter () {
  if (days > 0 ) {
    days -= 1
    return days;
  }
  saveRecord();
}

function daysIncrease (idToDelete) {
  records.forEach((record) => {
    if (record.id === idToDelete){
      days += 1;
    }
  })

  saveRecord();
  };

function moneyAccumulator(money) {
    const dailyMoney = Number(money);
    moneySpent += dailyMoney;

    saveRecord();
  }

function moneyDeaccumulator(idToDelete) {
  records.forEach((record) => {
    if (record.id === idToDelete && moneySpent > 0) {
      moneySpent -= Number(record.money);
    }
  })
  saveRecord();
}

function weightTracker(weight) {
  if (weight == 0 || weight == '') {
    return weightTolose;
  }else {
    weightTolose = ((Number(weight))*10 -410)/10;
  }
  saveRecord();
}

//get the weieght of the last index that the weight is no 0 or null
function weightToLose(idToDelete) {
  records.forEach((record) => {
    if (record.id === idToDelete) {
      if (record.weight == 0 || record.weight == null)  {
        return weightTolose;
      } else if (records.length === 1) {
        weightTolose = 0;
      } else {
          let weightHistory = [];
          for (i=0;i<records.length;i++) {
            if (Number(records[i].weight) > 0 && i !== records.indexOf(record)) {
              weightHistory.push(Number(records[i].weight));
              weightHistory.reverse();
              weightTolose = ((weightHistory[0])*10 -410)/10;
           } 
          };
    }}})}


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
  localStorage.setItem('days',JSON.stringify(days));
  localStorage.setItem('moneySpent',JSON.stringify(moneySpent));
  localStorage.setItem('weightTolose',JSON.stringify(weightTolose));
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

  const remark = 0;

  
  moneyAccumulator(money);
  weightTracker(weight);
  moneyCounter(money);
  exerciseCounter(exercise);
  foodCounter(food);
  createRecord(date, money, exercise,food,weight,remark);
  daysCounter();
  render();
}

function deleteRecord (event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
  
  daysIncrease(idToDelete);
  moneyDeaccumulator(idToDelete);
  weightToLose(idToDelete);
  reduceExerciseCount(idToDelete);
  reduceFoodCount(idToDelete);
  reduceMoneyCount(idToDelete);

  //render before remove data;
  render();
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
  document.getElementById('remark-record').innerHTML = '';
  document.getElementById('money-counter').innerHTML = moneyCount;
  document.getElementById('exercise-counter').innerHTML = exerciseCount;
  document.getElementById('food-counter').innerHTML = foodCount;

  records.forEach((record) => {

    const deleteRow = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.id = record.id;
    deleteButton.setAttribute('class','delete-button');
    deleteButton.style.textAlign = 'inline-block';
    deleteButton.onclick = deleteRecord;
    deleteRow.setAttribute('class','btm-clm-left-btm-row');
    deleteButton.innerText = 'x';
    deleteRow.appendChild(deleteButton);
    
    const dateRow = document.createElement('div');
    dateRow.setAttribute('class','btm-clm-left-btm-row')
    dateRow.innerText = record.date;
 
    const moneyRow = document.createElement('div');
    moneyRow.setAttribute('class','btm-clm-left-btm-row');
    moneyRow.innerText = '$'+record.money;
    
    const exerciseRow = document.createElement('div');
    exerciseRow.setAttribute('class','btm-clm-left-btm-row');
    exerciseRow.innerText = record.exercise + ' mins';
    
    const foodRow = document.createElement('div');
    foodRow.setAttribute('class','btm-clm-left-btm-row');
    foodRow.innerText = record.food;

    const weightRow = document.createElement('div');
    weightRow.setAttribute('class','btm-clm-left-btm-row');
    weightRow.innerText = record.weight + ' kg';
    
    const remarkRow = document.createElement('div');
    remarkRow.setAttribute('class','btm-clm-left-btm-row');
    remarkRow.innerText = record.remark;

    if (records.indexOf(record)%2 === 1) {
      dateRow.style = 'background-color: #212121';
      moneyRow.style = 'background-color: #212121';
      exerciseRow.style = 'background-color: #212121';
      foodRow.style = 'background-color: #212121';
      weightRow.style = 'background-color: #212121';
      deleteRow.style = 'background-color: #212121';
      remarkRow.style = 'background-color: #212121';
    }else {
      dateRow.style = 'background-color: #616161';
      moneyRow.style = 'background-color: #616161';
      exerciseRow.style = 'background-color: #616161';
      foodRow.style = 'background-color: #616161';
      weightRow.style = 'background-color: #616161';
      deleteRow.style = 'background-color: #616161';
      remarkRow.style = 'background-color: #616161';
    }

    const daysLeft = document.getElementById('days-left');
    daysLeft.innerText = days;
    const moneyUsed = document.getElementById('money-spent');
    moneyUsed.innerText = '$'+ moneySpent;
    const weightToLose = document.getElementById('weight-tolose');
    weightToLose.innerText = weightTolose + ' kg';
    const deleteRecords = document.getElementById('delete-record');
    deleteRecords.appendChild(deleteRow);
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
    const remarkRecords = document.getElementById('remark-record');
    remarkRecords.appendChild(remarkRow);
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
    data.addColumn('date', 'Day');
    data.addColumn('number', "Average Weight");
    data.addColumn('number', "Average Expenditure");

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