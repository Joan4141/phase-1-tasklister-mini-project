document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const  newTask = document.getElementById("tasks");
  
});
function addEventListener (createNewTask) {
  newTaskForm.addEventListener ('submit',createNewTask);
 
}
const createNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};








  


