/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */

import Router from "./../../router";
import EventBus from "./../../eventbus";

import SettingsModel from "./settings.model";
import SettingsView from "./settings.view";
import SettingsController from "./settings.controller";


const router = new Router();
let eventBus=new EventBus();
export  default class Settings {
  constructor() {
    console.log("i am settings constr");
    this.view = new SettingsView();
    this.model = new SettingsModel();
    this.controller = new SettingsController(this.view, this.model);
    router.addRouter("#settings", this.controller.setSettings.bind(this));
    eventBus.subscribe("changeSettings", this.controller.changeSettings.bind(this));
  }
}
