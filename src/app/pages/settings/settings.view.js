/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
import template from "./settings.hbs";
import CycleAll from "./../../components/tomato-settings/cycle";
import SettingTabs from "./settings";
import EventBus from "./../../eventbus";
let eventBus = new EventBus();

export default class SettingsView {
  render() {
    eventBus.publish("getUrl", "#settings");
    console.log("render settings");
    const wrapper = document.querySelector("#wrapper");
    const fragment=document.createDocumentFragment();
    const parser = new DOMParser();
    let settings=template();
    let settingsDom = parser.parseFromString(settings, "text/html").querySelector("main");
    fragment.appendChild(settingsDom);
    const main=document.querySelector("main");
    main?wrapper.replaceChild(fragment, main):wrapper.appendChild(fragment);
    const cycle=new CycleAll();

    const settingsTabs=new SettingTabs();
  }


}
