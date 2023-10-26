function myFunction() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
let healthManagement = [{
  date: '2021-10-04',
  food: 'Ramen',
  calorie: '400',
  talking: '60',
  exercise: '60',
  learning: '8',
  mobileTrash: '60',
  id: 'id1'
}, {
  date: '2021-10-04',
  food: 'Ramen',
  calorie: '400',
  talking: '60',
  exercise: '60',
  learning: '8',
  mobileTrash: '60',
  id: 'id2'
}];

function createRow (date, food, calorie, talking, exercise, learning, mobileTrash,){
  const id = ' ' + new Date().getTime(); 

  healthManagement.push({
    date: date,
    food: food,
    calorie: calorie,
    talking: talking,
    exercise: exercise,
    learning: learning,
    mobileTrash: mobileTrash,
    id: id
  });
}

function removeRow(idToDelete){
  healthManagement = healthManagement.filter (function (weekDay){
    if (weekDay.id === idToDelete){
      return false;
    } else {
      return true;
    }
  });
}

function addRow (){
  const dateCell = document.getElementById('date');
  const date = dateCell.value;
  const foodCell = document.getElementById('food');
  const food = foodCell.value;
  const calorieCell = document.getElementById('calorie');
  const calorie = calorieCell.value;
  const talkingCell = document.getElementById('talking');
  const talking = talkingCell.value;
  const exerciseCell = document.getElementById('exercise');
  const exercise = exerciseCell.value;
  const learningCell = document.getElementById('learning');
  const learning = learningCell.value;
  const mobileTrashCell = document.getElementById('mobile-trash');
  const mobileTrash = mobileTrashCell.value;

  createRow(date, food, calorie, talking, exercise, learning, mobileTrash);
  render();

}

function deleteRow(event){
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
  removeRow(idToDelete);
  render();
  
}

function render(){
  document.getElementById('health-management-week-day').innerHTML ='';
  healthManagement.forEach(function (weekDay){
    const element = document.createElement('div');
    element.innerText = weekDay.date + ' ' + weekDay.food 
    + weekDay.calorie + weekDay.talking + weekDay.exercise + weekDay.learning
    + weekDay.mobileTrash;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = deleteRow;
    deleteButton.id = weekDay.id;
    element.appendChild(deleteButton);

    const healthManagementTable = document.getElementById('health-management-table');
    healthManagementTable.appendChild(weekDay);
  
  })
}