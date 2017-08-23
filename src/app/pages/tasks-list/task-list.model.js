/**
 * Created by Iryna_Petrenko1 on 7/26/2017.
 */
import Firebase from "./../../firebase";
let firebase = new Firebase();
export default class TaskListModel {
  constructor() {
    this.storage = [];
    this.sortedStorage = {
      toDo: [],
      done: [],
      global: []
    }
  }

  addTaskstolocal(objTasks) {
    this.storage = [];
    let arrKeys = Object.keys(objTasks);
    for (let i = 0; i < arrKeys.length; i++) {
      objTasks[arrKeys[i]].id = arrKeys[i];
      this.storage.push(objTasks[arrKeys[i]])
    }
  }

  createLists() {
    this.sortedStorage.global = this.storage.filter((item)=>item.Global == true);
    this.sortedStorage.toDo = this.storage.filter((item)=>item.toDo == true);
    this.sortedStorage.done = this.storage.filter((item)=>item.Done == true);
  }

  getData() {
    return new Promise((resolve) => {
      // if (this.storage.length > 0) {
      //   resolve(this.storage);
      // } else {

      firebase.getDataFirebase("TaskListGlobal")
        .then((snapshot) => {
          this.addTaskstolocal(snapshot.val());
          this.createLists();
          resolve(this.sortedStorage);
        });
      // }
    });
  }

}
