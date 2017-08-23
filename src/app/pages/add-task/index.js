/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */

import Router from "./../../router";

import AddTaskModel from "./add-task.model";
import AddTaskView from "./add-task.view";
import AddTaskController from "./add-task.controller";


const router = new Router();
export  default class AddTask {
  constructor() {
    this.view = new AddTaskView();
    this.model = new AddTaskModel();
    this.controller = new AddTaskController(this.view, this.model);
    // router.addRouter("#add-task", this.view.render);
    router.addRouter("#add-task", this.controller.addTaskData.bind(this));
  }
}
