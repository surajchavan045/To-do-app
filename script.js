const addBtn = document.getElementById("add-todo-btn");
const todoInput = document.getElementById("todo-input");
const todosContainer = document.querySelector(".todos-container");

// to store all todos
let todos = [];

addBtn.addEventListener("click", () => {
  todos.push(todoInput.value);

  console.log(todos);

  updateUi();

  todoInput.value = "";
});

function updateUi() {
  todosContainer.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const para = document.createElement("p");
    para.innerHTML = todos[i];
    todosContainer.append(para);
  }
}