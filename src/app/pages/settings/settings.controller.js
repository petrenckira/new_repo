/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
import EventBus from "./../../eventbus";


export default class SettingsController{
  constructor(view, model){
    this.view=view;
    this.model=model;
  }
  setSettings() {
    this.model.getData().then(result=>{
      this.view.render(result);
    });
  }
  changeSettings(){
    this.model.setData(this.view.getSettingsParams());
  }

}
