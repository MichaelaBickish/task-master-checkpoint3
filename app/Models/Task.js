import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(name, listId, id = generateId(), checked = false) {
    this.id = id
    this.name = name
    this.listId = listId
    this.checked = checked
  }

  get Template() {
    return `<div class ="col-12 my-2"><input type="checkbox" aria-label="Task Checkbox" class="mr-2" id="task-ck-box" 
    onclick="app.tasksController.taskCheckBox(this.checked, '${this.id}')" ${this.checked ? 'checked' : ''}>
    ${this.name} <i class="fas fa-times ml-3 text-danger" title='delete'
    onclick="app.tasksController.deleteTask('${this.id}')"></i></div>`
  }
//NOTE If task's checkbox is checked, use a ternary in template ->
//  if a task's "checked" property if true, it injects the 'checked' attribute onto the input element !!!
}
 