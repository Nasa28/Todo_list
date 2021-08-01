import "./assets/css/style.css";
import 'bootstrap'
import  './dom.js'
import Display from "./display";
import Task from './task'
import Store from './storage'
import removeTask from './remove';
import Project from "./project";

const main= document.getElementById('main-form');
const content = document.getElementById('content');
const projectForm = document.getElementById('project-form')
const topic = document.getElementById('proName')

 document.addEventListener('DOMContentLoaded', Display.displayTask(), Display.displayProject())
 
const next = document.getElementById('next')

main.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const task = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
  );
  Display.addTask(task) 
  Store.addTodos(task) 
  window.location.reload(); 

});

content.addEventListener('click', (event) =>{
  removeTask(event.target)
  Store.deleteTodos(event.target.parentElement.previousElementSibling.firstElementChild.textContent)
})

projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
    
    const newTopic = new Project(topic.value);
    Store.addProject(newTopic) 
    Display.addProjects(newTopic) 
    window.location.reload();
});

next.addEventListener('click', (event) =>{
     const value = event.target.textContent;
     content.innerHTML = ''
     const h2 = document.createElement('h2');
     h2.textContent = value
     content.appendChild(h2)  
})



