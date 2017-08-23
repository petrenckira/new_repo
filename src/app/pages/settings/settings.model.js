/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
// import EventBus from "./../../eventbus";
import Firebase from "./../../firebase";
// let eventBus = new EventBus();
let firebase = new Firebase();
export default class SettingsModel {
  constructor() {
    this.settings = {};
    // this.tabsMap = new Map([["#settings-pomodoros", ["#pomodoro-settings-tab", "#pomodoro-settings-headline"]], ["#settings-categories", ["#category-settings-tab", "#categories-settings-headline"]]]);
    // eventBus.publish("addDataTabs", this.tabsMap);
  }
  setData(data){
    firebase.changeSettings(data);
  }


  getData() {
    return new Promise((resolve) => {
      if (this.settings.length > 0) {
        resolve(this.settings);
      } else {

        firebase.getDataFirebase("Settings")
          .then((snapshot) => {
            this.settings = snapshot.val();
            resolve(this.settings);
          });
      }
    });
  }

}
