import Store from './storage';
import Display from './display';
import Task from './task';
import removeTask from './remove';
const content = document.getElementById('content');
const title = document.getElementById('title');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
 const main= document.getElementById('main-form');
const priority = document.getElementById('priority')
 
const h2 = document.createElement('h2');
h2.textContent = "List of Pending todos"

content.appendChild(h2)

document.addEventListener('DOMContentLoaded', Display.displayTask())

main.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const task = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );
  Display.addTask(task) 
  Store.addTodos(task) 
  window.location.reload();
  Task.resetFields();   

});

content.addEventListener('click', (event) =>{
   removeTask(event.target)
   Store.deleteTodos(event.target.parentElement.previousElementSibling.firstElementChild.textContent)
})

 