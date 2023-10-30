let records;

const savedRecords = JSON.parse(localStorage.getItem('records'));

if (Array.isArray(savedRecords)) {
  records = savedRecords;
} else {
  records = [{
  dates: 'ramen',
  food: 'ramen',
  calorie:'500',
  exercise: '500',
  study: '500',
  talking: '500',
  phone:'500',
  mood: '-1',
  health: '50kg',
  id: 'id1'
  },{
  dates: 'ramen',
  food: 'ramen',
  calorie:'500',
  exercise: '500',
  study: '500',
  talking: '500',
  phone:'500',
  mood: '-1',
  health: '50kg',
  id: 'id1'
 }];
}

function myHealthManagement() {
  var x = document.getElementById('page-bottom');
  if (x.style.display === "none") {
    x.style.display = 'block';
  } else {
    x.style.display = "none";
  }
};

function createRecord (dates, food, calorie, exercise, study, talking, phone, mood, health) {
  const id = '' + new Date().getTime();

  records.push ({
    dates: dates,
    food: food,
    calorie: calorie,
    exercise: exercise,
    study: study,
    talking: talking,
    phone: phone,
    mood: mood,
    health: health,
    id: id,
  });

  saveRecords();
}
  function removeRecord(idToDelete) {
    records = records.filter (function (record) {
      if (record.id === idToDelete) {
        return false;
      } else {
        return true;
      }
    });

    saveRecords();
  }

  function saveRecords(){
    localStorage.setItem('records', JSON.stringify(records));
  }

 function addRecord(){
  const datesCell = document.getElementById('dates');
  const dates = datesCell.value;
  
  const foodCell = document.getElementById('food');
  const food = foodCell.value;

  const calorieCell = document.getElementById('calorie');
  const calorie = calorieCell.value;

  const exerciseCell = document.getElementById('exercise');
  const exercise = exerciseCell.value;

  const studyCell = document.getElementById('study');
  const study = studyCell.value;

  const talkingCell = document.getElementById('talking');
  const talking = talkingCell.value;

  const phoneCell = document.getElementById('phone');
  const phone = phoneCell.value;

  const moodCell = document.getElementById('mood');
  const mood = moodCell.value;

  const healthCell = document.getElementById('health');
  const health = healthCell.value;

  createRecord (dates, food, calorie, exercise, study, talking, phone, mood, health);
  render();
 };

 /*  
 let todos = [{
  date: '2010-10-10',
  food: 'ramen',
  id: 'id1',
 },{
  date: '2010-10-10',
  food: 'ramen',
  id: 'id1',
 }]

 function createTodo(title,dueDate) {
    const id = '' + new date().getTime();

    todos.push ({
      date: date,
      food: food,
      id: id
    });
 }

 function removeTodo(idToDelete) {
  todos = todos.filter (function (todo) {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
 }

 function addTodo() {
  const textbox = document.getElementById('todo-title);
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker);
  const dueDate = datePicker.value;

  createTodo(title, dueDate); 
  render ();
 }

function deleteTodo (event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
   
  removeTodo();
  render();
}

function render (){
  document.getElementBy('todo-list').innerHTML = '';
  todos.forEach (function (todo){
    const element = document.createElement ('div');
    element.innerText = todo.title + '' + todo.dueDate;

    const deleteButton = document.createElement ('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 12px;';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild (deleteButton);

    const todoList = document.getElementById ('todo-list');
    todoList.appendChild(element);
  })

} */
function deleteRecord (event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
   
  removeRecord(idToDelete);
  render();
}

function render () {
  document.getElementById('dates-column-bottom').innerHTML = '';
  document.getElementById('food-column-bottom').innerHTML = '';
  document.getElementById('calorie-column-bottom').innerHTML = '';
  document.getElementById('exercise-column-bottom').innerHTML = '';
  document.getElementById('study-column-bottom').innerHTML = '';
  document.getElementById('talking-column-bottom').innerHTML = '';
  document.getElementById('phone-column-bottom').innerHTML = '';
  document.getElementById('mood-column-bottom').innerHTML = '';
  document.getElementById('health-column-bottom').innerHTML = '';
  document.getElementById('delete-column-bottom').innerHTML = '';

  records.forEach(function (record){
    const elementDates = document.createElement('div');
    elementDates.setAttribute('class','record-column-row');
    elementDates.innerText = record.dates;

    const elementFood = document.createElement('div');
    elementFood.setAttribute('class','record-column-row');
    elementFood.innerText = record.food;

    const elementCalorie = document.createElement('div');
    elementCalorie.setAttribute('class','record-column-row');
    elementCalorie.innerText = record.calorie;

    const elementExercise = document.createElement('div');
    elementExercise.setAttribute('class','record-column-row');
    elementExercise.innerText = record.exercise;

    const elementStudy = document.createElement('div');
    elementStudy.setAttribute('class','record-column-row');
    elementStudy.innerText = record.study;

    const elementTalking = document.createElement('div');
    elementTalking.setAttribute('class','record-column-row');
    elementTalking.innerText = record.talking;

    const elementPhone = document.createElement('div');
    elementPhone.setAttribute('class','record-column-row');
    elementPhone.innerText = record.phone;

    const elementMood = document.createElement('div');
    elementMood .setAttribute('class','record-column-row');
    elementMood .innerText = record.mood;

    const elementHealth = document.createElement('div');
    elementHealth.setAttribute('class','record-column-row');
    elementHealth.innerText = record.health;
    
    const deleteButton = document.createElement ('button');
    const deleteColumnRow = document.createElement('div');
    deleteColumnRow.setAttribute('class','record-column-row');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 12px;';
    deleteButton.onclick = deleteRecord;
    deleteButton.id = record.id;
    
    const deleteColumn = document.getElementById('delete-column-bottom');
    const datesColumn = document.getElementById('dates-column-bottom');
    const foodColumn = document.getElementById('food-column-bottom');
    const calorieColumn = document.getElementById('calorie-column-bottom');
    const exerciseColumn = document.getElementById('exercise-column-bottom');
    const studyColumn = document.getElementById('study-column-bottom');
    const talkingColumn = document.getElementById('talking-column-bottom');
    const phoneColumn = document.getElementById('phone-column-bottom');
    const moodColumn = document.getElementById('mood-column-bottom');
    const healthColumn = document.getElementById('health-column-bottom');

    deleteColumnRow.appendChild(deleteButton);
    deleteColumn.appendChild(deleteColumnRow);
    
    datesColumn.appendChild(elementDates);
    foodColumn.appendChild(elementFood);
    calorieColumn.appendChild(elementCalorie);
    exerciseColumn.appendChild(elementExercise);
    studyColumn.appendChild(elementStudy);
    talkingColumn.appendChild(elementTalking);
    phoneColumn.appendChild(elementPhone);
    moodColumn.appendChild(elementMood);
    healthColumn.appendChild(elementHealth);
  });
}

let food = 'Ramen';

function addFood (){
  const foodCell = document.getElementById('food');
  const record = foodCell.value;
  document.body.appendChild(record)
}

addFood(food);