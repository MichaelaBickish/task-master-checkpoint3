import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

class ListsService {
    deleteList(id){
        if(window.confirm('Are you sure you want to permanently delete this list?')){
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
}
        
    }
  
    addList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList.name, rawList.color)]
  }
}

export const listsService = new ListsService();
