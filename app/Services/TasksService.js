import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  deleteTask(id) {
    Swal.fire({
        title: 'Delete this task?',
        text: "You won't be able get this task back!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'This task has been deleted.',
            'success',
            ProxyState.tasks = ProxyState.tasks.filter(i => i.id != id),
            saveState()
          )
        }
      })
  }

  addTask(rawTask) {
    ProxyState.tasks.push(new Task(rawTask.name, rawTask.listId)),
    saveState(),
    ProxyState.tasks = ProxyState.tasks
  }

  taskCheckBox(bool, id){
  ProxyState.tasks.find(i => i.id === id).checked = bool
      saveState()
      ProxyState.tasks = ProxyState.tasks
      //Find the task that matches the id passed through & set 'checked' property equal to bool passed through.
      //save state and alert the listeners.
  }
}

export const tasksService = new TasksService();