/**
 * Created by Iryna_Petrenko1 on 7/26/2017.
 */
import Firebase from "./../../firebase";
let firebase = new Firebase();
export default class TaskListModel{
  constructor() {
    this.storage = [];
    this.toDo = [];
    this.done = [];
    this.sortedStorage=[];
  }

  addTasks(objTasks) {
    for (let key in objTasks) {
      this.storage.push(objTasks[key]);
    }
  }

  createLists() {
    this.global = this.storage.filter((item)=>item.Global == true);
    this.toDo = this.storage.filter((item)=>item.toDo == true);
    this.done = this.storage.filter((item)=>item.Done == true);
  }
  sertFlobal(){

  }

  getData() {
    return new Promise((resolve) => {
      if (this.storage.length > 0) {
        resolve(this.storage);
      } else {

        firebase.getDataFirebase("TaskListGlobal")
          .then((snapshot) => {
            this.addTasks(snapshot.val());
            console.log(snapshot);
            resolve(this.storage);
          });
      }
    });
  }

}
