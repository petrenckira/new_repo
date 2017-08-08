/**
 * Created by Iryna_Petrenko1 on 7/28/2017.
 */
import EventBus from "./../../eventbus";
let eventBus = new EventBus();
export default class HeaderController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.data = {
      title: ""
    };

    eventBus.subscribe("getUrl", this.setTitle.bind(this))
  }

  setTitle(url) {
    this.data.title = this.model.getTitle(url);
    this.view.render(this.data);
  }

}
