
 let fitness = [{
  date: 'ramen',
  food: 'ramen',
  calorie:'500',
  exercise: '500',
  study: '500',
  talking: '500',
  phone:'500',
  mood: '-1',
  health: '50kg'
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
  element.style.cssText = `
  color: red;
  `;
  document.body.appendChild(element);
 };

 addRow();

