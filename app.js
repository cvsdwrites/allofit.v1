const taskForm = document.querySelector('form');
const taskList = document.querySelector('#task-list');

taskForm.addEventListener('submit', event => {
  event.preventDefault(); // prevent the form from submitting

  const title = taskForm.elements.title.value;
  const date = taskForm.elements.date.value;
  const time = taskForm.elements.time.value;

  const task = { title, date, time };

  addTask(task);

  taskForm.reset();
});

function addTask(task) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = `${task.title} - ${task.date} at ${task.time}`;

  li.appendChild(checkbox);
  li.appendChild(span);

  taskList.appendChild(li);
}
