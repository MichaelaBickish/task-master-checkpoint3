import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


//Private
function _draw() {
  let lists = ProxyState.lists;
    let template = ''
  if (lists.length == 0) {
    template += '<div class="col text-center"><p><em>no lists to display</em><p></div>'
  }

//   NOTE quan logic for check box will go here
  
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
}


//Public
export default class ListsController {
  constructor() {
    ProxyState.on("lists", _draw);
    ProxyState.on("tasks", _draw);
    _draw()
  }


  addList(event) {
    window.event.preventDefault()
    let form = window.event.target
    let rawList = {
        name: form['name'].value,
        color: form['color'].value
    }
    listsService.addList(rawList)
    
    form.reset()
  }

  deleteList(id) {
    listsService.deleteList(id)
  }

}