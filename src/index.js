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

const selectProject = document.getElementById('select-project')
 document.addEventListener('DOMContentLoaded', Display.displayTask(), Display.displayProject())
 
const next = document.getElementsByClassName('next')

main.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const task = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    selectProject.value
  );
  Display.addTask(task) 
  Store.addTodos(task) 
   window.location.reload();
  // Task.resetFields();   

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


const option = document.createElement('option')


