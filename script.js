// Initialize an empty array to hold todos
let todos = [];

// Select the DOM elements
const todoInput = document.getElementById('todo-input');
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

// Render todos in the list
function renderTodos() {
  todoList.innerHTML = ''; // Clear the list first
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${todo}
      <button class="edit" onclick="editTodo(${index})">Edit</button>
      <button class="delete" onclick="deleteTodo(${index})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

// Add a new todo
function addTodo(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const newTodo = todoInput.value.trim();
  if (newTodo) {
    todos.push(newTodo);
    todoInput.value = ''; // Clear the input field
    renderTodos(); // Re-render the todo list
  }
}

// Edit an existing todo
function editTodo(index) {
  const updatedTodo = prompt('Edit your todo:', todos[index]);
  if (updatedTodo) {
    todos[index] = updatedTodo.trim();
    renderTodos(); // Re-render the todo list
  }
}

// Delete a todo
function deleteTodo(index) {
  if (confirm('Are you sure you want to delete this todo?')) {
    todos.splice(index, 1); // Remove the todo from the array
    renderTodos(); // Re-render the todo list
  }
}

// Event listener for the form submission
todoForm.addEventListener('submit', addTodo);

// Initial render
renderTodos();
