const taskInput = document.querySelector(".task-input");
const addButton = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");

addButton.addEventListener("click", () => {
  const taskValue = taskInput.value.trim();
  if (taskValue) {
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskValue;

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "✔️";
    doneButton.classList.add("done-btn");
    doneButton.addEventListener("click", () => {
      taskSpan.classList.toggle("done");
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "🗑️";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
      listItem.remove();
    });
    listItem.appendChild(taskSpan);
    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});
