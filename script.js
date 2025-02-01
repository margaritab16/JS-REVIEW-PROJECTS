// ==== Todo CRUD Management ====

// Array to store todos
let todos = [];

// DOM Elements
const todoForm = document.getElementById ('todo-form');
const todoInput = document.getElementById ('todo-input');
const todoList = document.getElementById ('todo-list');

// Function to render todos
function renderTodos() {
    todoList.innerHTML = ''; // Clear the list
    todos.forEach( (todo, index) => {
        const li = document.createElement ('li');
        li.className = 'todo-item';
        li.innerHTML = '
            <span>${todo}</span>
            <><button onclick="editTodo(${index})">Edit</button><button onclick="deleteTodo(${index})">Delete</button></>
        ';
        todoList.appendChild(li);
    });
}