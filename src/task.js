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

  static resetFields(){
    title.value = ''
    description.value =''
    dueDate.value =''
    priority.value =''
  }
}

export default Task