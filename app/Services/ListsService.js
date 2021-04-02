import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

class ListsService {
    deleteList(){

    }
  
  
    addList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList.name, newList.color)]
  }
}

export const listsService = new ListsService();
