import './dom'

export default class Project{
  constructor(topic){
    this.topic =topic
  }

  static clearField(){
    topic.value = ''
  }
}
