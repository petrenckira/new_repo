/**
 * Created by Iryna_Petrenko1 on 7/26/2017.
 */

export default class TaskListController{
  constructor(view, model){
    this.view=view;
    this.model=model;
  }
  setList() {
    console.log("it is render task list");
    this.model.getData().then(result=>{
      this.view.render(result);
    });
  }


}
