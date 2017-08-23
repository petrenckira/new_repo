/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */

import Router from "./../../router";

import EditTaskModel from "./edit-task.model";
import EditTaskView from "./edit-task.view";
import EditTaskController from "./edit-task.controller";


const router = new Router();
export  default class EditTask {
  constructor() {
    console.log("i am report constr");
    this.view = new EditTaskView();
    this.model = new EditTaskModel();
    this.controller = new EditTaskController(this.view, this.model);
    router.addRouter("#add-task", this.view.render);
  }
}
