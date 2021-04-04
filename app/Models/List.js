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
                            <div class="text-light">${this.TasksLeft} / ${this.TotalTasks} remaining</div>
                        </div>
                        <i class="fas fa-times ml-2" onclick="app.listsController.deleteList('${this.id}')" title='delete'></i>
                    </div>
                    <div class="">
                        <ul>
                            ${this.Tasks}
                        </ul>
                    </div>
                    <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
                        <input type="text" name="name" id="name" class="form-control" placeholder="add task..."
                            aria-describedby="helpId" required minlength="3" maxlength="50">
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
    
    //1-Look at the tasks array and return the TOTAL number of tasks that exist. totalTasks
    //2-Filter through the tasks array and return the number of tasks that aren't "completed". tasksLeft
    //3-return these counts --> (injected onto card header)

    get TotalTasks(){
        let totalTasks = ProxyState.tasks.filter(i => i.listId === this.id)
        return totalTasks.length
    }

    get TasksLeft(){
    let tasksLeft = ProxyState.tasks.filter(t => t.listId === this.id && t.checked == false)
    return tasksLeft.length
}
}