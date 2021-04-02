export default class List {
    constructor(name, color, id = generateId()) {
        this.name = name
        this.color = color
        this.id = id
    }

    get Template() {

        return /*html*/`
        <div class="col-md-4">
                <div class="list-card shadow bg-white">
                    <div class="text-center bg-${this.color} p-2 d-flex justify-content-between">
                        <h3 class="text-center mt-2">${this.name}</h3>
                        <i class="fas fa-times ml-2" onclick=""></i>
                    </div>
                    <div class="p-3">
                        <ul>
                            <input type="checkbox" aria-label="Checkbox for task" class="mr-3">${this.tasks}
                        </ul>
                    </div>
                    <form class="d-flex p-2" onsubmit="app.listsController.addTask('${this.id}')">
                        <input type="text" name="name" id="name" class="form-control" placeholder="add task..."
                            aria-describedby="helpId">
                        <button type="submit" class="btn btn-success ml-1" title='add task'><i
                                class="fas fa-plus"></i></button>
                    </form>
                </div>
            </div>
        `
    }
}