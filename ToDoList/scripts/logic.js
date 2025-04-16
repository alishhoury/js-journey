const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

addButton.addEventListener('click', () => {
    const taskValue = taskInput.value;
    if (taskValue) {
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;
        taskList.appendChild(listItem);
        taskInput.value = '';
      }
    });