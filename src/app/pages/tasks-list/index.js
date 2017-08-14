//export { TaskList } from './task-list';

import Router from "./../../router";

import TaskListModel from "./task-list.model";
import TaskListView from "./task-list.view";
import TaskListController from "./task-list.controller";
const router = new Router();
export  default class TaskList {
  constructor() {
    console.log("i am task list");
    this.view = new TaskListView();
    this.model = new TaskListModel();
    this.controller = new TaskListController(this.view, this.model);
    router.addRouter("#task-list", this.controller.setList.bind(this));
    router.addRouter("/", this.controller.setList.bind(this));
  }
}

