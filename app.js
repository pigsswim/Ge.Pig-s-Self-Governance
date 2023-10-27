
 let fitness = [{
  date: 'ramen',
  food: 'ramen',
  calorie:'500',
  exercise: '500',
  study: '500',
  talking: '500',
  phone:'500',
  mood: '-1',
  health: '50kg',
  id: 'id1'
 }]
 
 function myFunction() {
  var x = document.getElementById("health-management");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

 function addRow(){
  const dateCell = document.getElementById('date-picker');
  const date = dateCell.value;
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
  const element = document.createElement('div');
  element.innerText = date + food + calorie + exercise + study + 
  talking + phone + mood + health;
  const records = document.getElementById('health-management');
  records.appendChild(element);
 };

 addRow();

 /*  
 let records = [{
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