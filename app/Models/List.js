import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"

export default class List {
    constructor(name, color, id = generateId()) {
        this.name = name
        this.color = color
        this.id = id
    }

    get Template() {

        return /*html*/`
        <div class="col-md-4 mt-3">
                <div class="list-card shadow bg-white">
                    <div class="${this.color} p-2 d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <h3 class="mt-2 text-light">${this.name}</h3>
                            <div class="text-light"># / # remaining</div>
                        </div>
                        <i class="fas fa-times ml-2" onclick="app.listsController.deleteList('${this.id}')"></i>
                    </div>
                    <div class="">
                        <ul>
                            ${this.Tasks}
                        </ul>
                    </div>
                    <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
                        <input type="text" name="name" id="name" class="form-control" placeholder="add task..."
                            aria-describedby="helpId">
                        <button type="submit" class="btn btn-success ml-1" title='add task'><i
                                class="fas fa-plus"></i></button>
                    </form>
                </div>
            </div>
        `
    }

    get Tasks() {
        let tasks = ProxyState.tasks.filter(i => i.listId === this.id)
        let template = ''
        tasks.forEach(i => template += i.Template)
        return template
      }
}