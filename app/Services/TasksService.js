import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
//import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  deleteTask(id) {
    if(window.confirm('Permanently delete this task?')){
    ProxyState.tasks = ProxyState.tasks.filter(i => i.id != id)
    }
    //saveState()

  }
  addTask(rawTask) {
      console.log('add task', rawTask)
    ProxyState.tasks.push(new Task(rawTask.name, rawTask.listId))
    //saveState()
    ProxyState.tasks = ProxyState.tasks
  }

  
}

export const tasksService = new TasksService();