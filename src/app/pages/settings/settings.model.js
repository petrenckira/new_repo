/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
import EventBus from "./../../eventbus";
let eventBus=new EventBus();
// import Firebase from "./../../firebase";
// let firebase = new Firebase();
export default class SettingsModel{
  constructor() {
    this.settings = [];
    this.tabsMap= new Map([["#settings-pomodoros", ["#pomodoro-settings-tab", "#pomodoro-settings-headline"]], ["#settings-categories", ["#category-settings-tab", "#categories-settings-headline"]]]);
    eventBus.publish("addDataTabs", this.tabsMap);
  }
  //
  // addTasks(objTasks) {
  //   for (let key in objTasks) {
  //     this.settings.push(objTasks[key]);
  //   }
  // }
  //
  // getData() {
  //   return new Promise((resolve) => {
  //     if (this.settings.length > 0) {
  //       resolve(this.settings);
  //     } else {
  //
  //       firebase.getDataFirebase("Settings")
  //         .then((snapshot) => {
  //           this.addTasks(snapshot.val());
  //           console.log(snapshot);
  //           resolve(this.settings);
  //         });
  //     }
  //   });
  // }

}
