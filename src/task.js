import "./display";
import './dom'
import './todos'

class Task{
  constructor(title, description, dueDate, priority, selectProject){
   this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.selectProject = selectProject
  }

  // static resetFields(){
  //   title.value = ''
  //   description.value =''
  //   dueDate.value =''
  //   priority.value =''
  // }
}

export default Task