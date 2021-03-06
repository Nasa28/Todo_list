import Store from './storage';
import * as dom from './dom';

class Display {
  static displayTask() {
    const todos = Store.getTodos();
    todos.forEach((task) => {
      Display.addTask(task);
    });
  }

  static addTask(task) {
    const div = document.createElement('div');

    div.innerHTML = `
    <div class="card mb-5 border-3" style="width: 30rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${task.title}</li>
        <li class="list-group-item d-none">${task.id}</li>
        <li class="list-group-item">${task.description}</li>
        <li class="list-group-item">${task.dueDate}</li>
        <li class="list-group-item">${task.priority}</li>
        <li class="list-group-item d-none ">${task.project}</li>
        <li > <a href="#" class="edit text-primary text-decoration-none fw-bold" data-bs-toggle="modal" data-bs-target="#edit-task">Edit Task</a></li>
      </ul>
      <div class="card-footer">
        <a href="#" class="delete text-danger text-decoration-none fw-bold">Remove task</a>
      </div>
    </div>
    `;
    dom.content.appendChild(div);
  }

  static displayProject() {
    const projects = Store.getProject();
    projects.forEach((project) => {
      Display.addProjects(project);
    });
  }

  static addProjects(project) {
    const ul = document.getElementById('next');
    const newul = document.createElement('ul');
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.innerHTML = `
   
    <li><a href="#" class="my-project text-success pros text-decoration-none fw-bold">${project.topic}</a></li>
    `;

    newul.appendChild(li);
    ul.appendChild(newul);
  }

  static displayProjectTask() {
    const projects = Store.getProject();
    projects.forEach((project) => {
      Display.addProjectTask(project);
    });
  }

  static addProjectTask(task) {
    const project = document.getElementById('select-project');
    const option = document.createElement('option');
    option.innerHTML = `
  <option>${task.topic}</option>
  `;
    project.add(option);
  }

  static displayEditTask() {
    const projects = Store.getProject();
    projects.forEach((project) => {
      Display.editProjectTask(project);
    });
  }

  static editProjectTask(task) {
    const project = document.getElementById('edit-select-project');
    const option = document.createElement('option');
    option.innerHTML = `<option value="High" id="high" >${task.topic}</option>`;
    project.add(option);
  }
}
export default Display;