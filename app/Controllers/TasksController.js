import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { saveState } from "../Utils/LocalStorage.js";


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

  taskCheckBox(bool, id){
     tasksService.taskCheckBox(bool, id)
    }

}