import { tasksService } from "../Services/TasksService.js";


//Public
export default class TasksController {
    

  addTask(listId) {
    window.event.preventDefault()
    let form = window.event.target
    let rawTask = {
      name: form['name'].value,
      listId: listId
    }
    tasksService.addTask(rawTask)
    // @ts-ignore
    form.reset()
  }

  deleteTask(id) {
    tasksService.deleteTask(id)
  }

  taskCheckBox(){
    let taskNums = 0
    let ckBox = document.getElementById('task-ck-box')
    if (ckBox.checked){
      console.log("Yes checked"); //when checked
    }else{
      console.log("Not checked"); //when not checked
    }
}

}