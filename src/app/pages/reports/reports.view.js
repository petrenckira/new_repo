/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
import template from "./reports.hbs";
import EventBus from "./../../eventbus";
import Chart from "./../../components/chart/chart";
let eventBus = new EventBus();

export default class SettingsView {
  render() {
    eventBus.publish("getUrl", "#reports");
    console.log("render settings");
    const wrapper = document.querySelector("#wrapper");
    const fragment=document.createDocumentFragment();
    const parser = new DOMParser();
    let settings=template();
    let settingsDom = parser.parseFromString(settings, "text/html").querySelector("main");
    fragment.appendChild(settingsDom);
    const main=document.querySelector("main");
    main?wrapper.replaceChild(fragment, main):wrapper.appendChild(fragment);
    const chart=new Chart();
    // const cycle=new CycleAll();
    // const settingsTabs=new SettingTabs();
  }


}
