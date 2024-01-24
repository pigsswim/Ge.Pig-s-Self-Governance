

let records = [];
let counters = [];
let moneyCount = 0;
let exerciseCount = 0;
let foodCount = 0;
let days;
let moneySpent = 0;
let weightTolose;
let goalWeight;

const savedRecords = JSON.parse(localStorage.getItem('records'));
const savedMoneyCount = JSON.parse(localStorage.getItem('moneyCount'));
const savedExerciseCount = JSON.parse(localStorage.getItem('exerciseCount'));
const savedFoodCount = JSON.parse(localStorage.getItem('foodCount'));
const savedDays = JSON.parse(localStorage.getItem('days'));
const savedMoneySpent = JSON.parse(localStorage.getItem('moneySpent'));
const savedWeightTolose = JSON.parse(localStorage.getItem('weightTolose'));
const setBtn = document.getElementById('setbtn');
  setBtn.addEventListener('click',setGoal);

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

function setGoal () {
  const currentWeight = document.getElementById('current-weight');
  const goalweight = document.getElementById('goal-weight');
  const goalDays = document.getElementById('goal-days');
  if (currentWeight.value == '' || currentWeight.value == 0) {
    return;
  } else if (goalweight.value == ''|| goalweight.value == 0) {
    return;
  } else if (goalDays.value == '' || goalDays.value == 0) {
    return;
  }else {
    weightTolose = ((Number(currentWeight.value))*100 - (Number(goalweight.value))*100)/100;
    days = goalDays.value;
    goalWeight = goalweight.value;
  }

  renderGoal();
}

function createRecord (date,money,exercise,food,weight,remark) {

  //function to generate Remark 
  if (weight > 45) {
    remark = 'Fat Pig!';
  }else if (weight < 45 && weight > 43) {
    remark = '不胖，仲要鍛鍊好長時間。';
  }else if (weight < 43 && weight > 40) {
    remark = '健康，不肥，每日都需要鍛鍊。';
  }else if (weight < 40) {
    remark = '恭喜你，你馬上可以去見上帝了。';
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
  if (days == undefined) {
    days = 0;
    return;
  }else if (days > 0 ) {
    days -= 1
    return days;
  }

  saveRecord();
}

function daysIncrease (idToDelete) {
  if (days == 0 ) {
    return;
  }else {
    records.forEach((record) => {
      if (record.id === idToDelete){
          days += 1;
        }
      })
  }

    saveRecord();
  }

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
  if (weightTolose == undefined) {
    weightTolose = 0;
    return;
  }
  else if (weight == 0 || weight == '') {
    return weightTolose;
  }else {
    weightTolose = ((Number(weight))*10 - goalWeight*10)/10;
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
              weightTolose = ((weightHistory[0])*10 -goalWeight*10)/10;
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
    const deleteSpan = document.createElement('span')
    deleteSpan.innerText = 'x';
    deleteButton.appendChild(deleteSpan)
    deleteButton.id = record.id;
    deleteButton.setAttribute('class','delete-button');
    deleteButton.style.textAlign = 'inline-block';
    deleteButton.onclick = deleteRecord;
    deleteRow.setAttribute('class','btm-clm-left-btm-row');
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
      dateRow.style = 'background-color: white';
      moneyRow.style = 'background-color: white';
      exerciseRow.style = 'background-color: white';
      foodRow.style = 'background-color: white';
      weightRow.style = 'background-color: white';
      deleteRow.style = 'background-color: white';
      remarkRow.style = 'background-color: white';
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

//set goals

function dropdown() {
  const dropdown = document.getElementById('dropdown-content');
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  }else {
    dropdown.style.display = 'none';
  }
    
}

function renderGoal() {
  const daysLeft = document.getElementById('days-left');
  const weightToLose = document.getElementById('weight-tolose');
  daysLeft.innerHTML = days;
  weightToLose.innerHTML = weightTolose;
  const currentWeight = document.getElementById('current-weight');
  const goalWeight = document.getElementById('goal-weight');
  const goalDays = document.getElementById('goal-days');
  currentWeight.value = '';
  goalWeight.value = '';
  goalDays.value = '';
  records = [];
  counters = [];
  moneyCount = 0;
  exerciseCount = 0;
  foodCount = 0;
  moneySpent = 0;
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
}

function dayTheme () {
  document.body.style.backgroundColor ='white';
  const dropdown = document.getElementById('dropdown-content');
  dropdown.style.color = 'black';
  const goalWeight = document.getElementById('goal-weight');
  goalWeight.style.border = '1px solid black';
  const currentWeight = document.getElementById('current-weight');
  currentWeight.style.border = '1px solid black';
  const goalDays = document.getElementById('goal-days');
  goalDays.style.border = '1px solid black';
}

function nightTheme() {
  document.body.style.backgroundColor ='black';
  const dropdown = document.getElementById('dropdown-content');
  dropdown.style.color = 'white';
  const goalWeight = document.getElementById('goal-weight');
  goalWeight.style.border = '1px solid black';
  const currentWeight = document.getElementById('current-weight');
  currentWeight.style.border = '1px solid black';
  const goalDays = document.getElementById('goal-days');
  goalDays.style.border = '1px solid black';
}