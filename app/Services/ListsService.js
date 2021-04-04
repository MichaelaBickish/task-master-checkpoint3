import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
    deleteList(id){
        Swal.fire({
            title: 'Delete this list?',
            text: "You won't be able get this list back!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'This list has been deleted.',
                'success',
                ProxyState.lists = ProxyState.lists.filter(l => l.id != id),
                saveState()
              )
            }
          })
    }
  
    addList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList.name, rawList.color)]
    saveState()
  }
}

export const listsService = new ListsService();
