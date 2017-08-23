
/**
 * Created by Iryna_Petrenko1 on 8/22/2017.
 */
import Router from "./../../router";

import TimerModel from "./timer.model";
import TimerView from "./timer.view";
import TimerController from "./timer.controller";
const router = new Router();
export  default class Timer {
  constructor() {
    this.view = new TimerView();
    this.model = new TimerModel();
    this.controller = new TimerController(this.view, this.model);
    // router.addRouter("#task-list", this.controller.setList.bind(this));
    router.addRouter("#timer", this.view.render.bind(this));
  }
}
