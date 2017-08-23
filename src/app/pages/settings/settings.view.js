/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
require ('./../../components/tab/tab');
import template from "./settings.hbs";
import CycleAll from "./../../components/tomato-settings/cycle";
// import SettingTabs from "./settings";
import EventBus from "./../../eventbus";
let eventBus = new EventBus();

export default class SettingsView {
  constructor() {
  }

  render(data) {
    eventBus.publish("getUrl", "#settings");
    console.log("render settings");
    const wrapper = document.querySelector("#wrapper");
    const fragment = document.createDocumentFragment();
    const parser = new DOMParser();
    let settings = template(data);
    let settingsDom = parser.parseFromString(settings, "text/html").querySelector("main");
    fragment.appendChild(settingsDom);
    const main = document.querySelector("main");
    main ? wrapper.replaceChild(fragment, main) : wrapper.appendChild(fragment);
    const cycle = new CycleAll();
    $('body').tabs();

    // const settingsTabs = new SettingTabs();
    this.init();
  }
  getValueEl(selector){
    return document.querySelector(selector).innerHTML;
  }

  getSettingsParams() {
    console.log(("getSettingsParams"));
    let workTime = this.getValueEl("#work-time");
    let workIteration = this.getValueEl("#work-iteration");
    let shortBreak = this.getValueEl("#short-break");
    let longBreak = this.getValueEl("#long-break");
    return {
      workTime: workTime,
      workIteration: workIteration,
      shortBreak: shortBreak,
      longBreak: longBreak
    }
  }
  eventBusChanging(){
    eventBus.publish("changeSettings", this.getSettingsParams());
  }

  init() {
    document.querySelector("#save-settings-p").addEventListener("click", this.eventBusChanging.bind(this));
  }


}
