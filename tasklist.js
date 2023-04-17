// Select the task list element
const taskList = document.getElementById("task-list");

// Add event listeners for edit and delete buttons
taskList.addEventListener("click", function(event) {
  const target = event.target;
  
  // Handle delete button clicks
  if (target.classList.contains("delete-task-btn")) {
    const taskItem = target.parentNode;
    taskList.removeChild(taskItem);
  }
  
  // Handle edit button clicks
  if (target.classList.contains("edit-task-btn")) {
    const taskItem = target.parentNode;
    const taskName = taskItem.querySelector(".task-name");
    
    // Prompt the user to enter a new task name
    const newTaskName = prompt("Enter a new task name:", taskName.textContent);
    
    // Update the task name if the user entered a new name
    if (newTaskName !== null && newTaskName.trim() !== "") {
      taskName.textContent = newTaskName;
    }
  }
});
