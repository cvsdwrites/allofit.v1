const taskList = document.getElementById("task-list");

taskList.addEventListener("click", function(event) {
  const target = event.target;
  
  if (target.classList.contains("delete-task-btn")) {
    const taskItem = target.parentNode;
    taskList.removeChild(taskItem);
  }
  
  if (target.classList.contains("edit-task-btn")) {
    const taskItem = target.parentNode;
    const taskName = taskItem.querySelector(".task-name");
    
    const newTaskName = prompt("Enter a new task name:", taskName.textContent);
    
    if (newTaskName !== null && newTaskName.trim() !== "") {
      taskName.textContent = newTaskName;
    }
  }
});
function editTask(index) {
  const task = tasks[index];
  const newLabel = prompt("Edit task:", task.label);
  if (newLabel !== null && newLabel.trim() !== "") {
    task.label = newLabel.trim();
    saveTasks();
    renderTasks();
  }
}
