/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */

import Router from "./../../router";

import ReportsModel from "./reports.model";
import ReportsView from "./reports.view";
import ReportsController from "./reports.controller";



const router = new Router();
export  default class Report {
  constructor() {
    console.log("i am report constr");
    this.view = new ReportsView();
    this.model = new ReportsModel();
    this.controller = new ReportsController(this.view, this.model);
    router.addRouter("#reports", this.view.render);
  }
}
