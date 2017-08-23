/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
export default class AddTaskController{
  constructor(view, model){
    this.view=view;
    this.model=model;
  }
  addTaskData() {
    this.view.render();

    // this.model.sendTaskData(this.view.getDataTask());
  }

}
