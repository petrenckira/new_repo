/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
//  class SettingTabs {
//   constructor() {
//     this.map = new Map([["#settings-pomodoros", ["#pomodoro-settings-tab", "#pomodoro-settings-headline"]], ["#settings-categories", ["#category-settings-tab", "#categories-settings-headline"]]]);
//     this.init();
//   }
//
//   getEl(selector) {
//     return document.querySelector(selector);
//   }
//
//   changeState(e) {
//     let current = e.target.id;
//     for (let key of this.map.keys()) {
//       console.log(this.getEl(key));
//       this.getEl(key).classList.remove("active")
//     }
//     this.getEl("#"+current).classList.add("active");
//
//     for (let value of this.map.values()) {
//       value.forEach((item)=> this.getEl(item).classList.add("hidden"))
//     }
//     this.map.get("#"+current).forEach((item)=> this.getEl(item).classList.remove("hidden"))
//   }
//
//   init() {
//     for (let key of this.map.keys()) {
//       this.getEl(key).addEventListener("click", this.changeState.bind(this));
//     }
//   }
// }
