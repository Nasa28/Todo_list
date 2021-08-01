import "./display";
import './dom'
import './todos'

class Task{
  constructor(title, description, dueDate, priority){
   this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority
  }
}

export default Task