/**
 * Created by Iryna_Petrenko1 on 7/28/2017.
 */

export default class HeaderModel {
  constructor() {
    this.data = {
      "#task-list": "Daily Task List",
      "#settings": "Settings",
      "#reports":"Report"
    };

  }

  getTitle(current){
    return this.data[current];
  }

}
