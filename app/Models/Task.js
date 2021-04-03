import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(name, listId, id = generateId()) {
    this.id = id
    this.name = name
    this.listId = listId
  }

  get Template() {
    return `<input type="checkbox" aria-label="Task Checkbox" class="mr-2" id="task-ck-box" onchange="app.tasksController.taskCheckBox()">
    ${this.name} <i class="fas fa-times ml-3 text-danger" 
    onclick="app.tasksController.deleteTask('${this.id}')"></i>`
  }
}
 