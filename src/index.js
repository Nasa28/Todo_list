import "./assets/css/style.css";
import 'bootstrap'
import  './dom.js'
import Display from "./display";
import Task from './task'
import Store from './storage'
import removeTask from './remove';
 const main= document.getElementById('main-form');
 const content = document.getElementById('content');

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

