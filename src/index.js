import "./assets/css/style.css";
import 'bootstrap'
import  './dom.js'
import Display from "./display";
import Task from './task'
import Store from './storage'
import removeTask from './remove';
import Project from "./project";
// import Project from "./project";
 const main= document.getElementById('main-form');
  const content = document.getElementById('content');
const projectForm = document.getElementById('project-form')
const topic = document.getElementById('proName')
 document.addEventListener('DOMContentLoaded', Display.displayTask())
const next = document.getElementsByClassName('next')
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

projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const newTopic = new Project(topic.value);
    
  Display.addProjects(newTopic) 
  Store.addProject(newTopic) 
  // window.location.reload();
  Project.clearField();   

});

