/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
import EventBus from "./../../eventbus";

import Firebase from"./../../firebase";
let firebase=new Firebase();
let eventBus=new EventBus();

export default class AddTaskModel{
  constructor() {
    eventBus.subscribe("addTask", this.sendTaskData.bind(this))
  }

  sendTaskData(obj){
    firebase.writeTasks(obj);
  }
}
