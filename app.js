// Get references to the HTML elements
const taskForm = document.querySelector('form');
const taskList = document.querySelector('#task-list');

// Add event listener to the form submit button
taskForm.addEventListener('submit', event => {
  event.preventDefault(); // prevent the form from submitting

  // Get the input values
  const title = taskForm.elements.title.value;
  const date = taskForm.elements.date.value;
  const time = taskForm.elements.time.value;

  // Create a new task object
  const task = { title, date, time };

  // Add the task to the task list
  addTask(task);

  // Reset the form
  taskForm.reset();
});

// Function to add a new task to the task list
function addTask(task) {
  // Create a new list item element
  const li = document.createElement('li');

  // Create a new checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create a new span element to display the task title, date, and time
  const span = document.createElement('span');
  span.textContent = `${task.title} - ${task.date} at ${task.time}`;

  // Append the checkbox and span elements to the list item
  li.appendChild(checkbox);
  li.appendChild(span);

  // Append the list item to the task list
  taskList.appendChild(li);
}
