/**
 * Created by Iryna_Petrenko1 on 7/26/2017.
 */
import template from "./task-list.hbs";
import EventBus from "./../../eventbus";
let eventBus = new EventBus();

export default class TaskListView {
  render(data) {
    eventBus.publish("getUrl", "#task-list");
    const wrapper = document.querySelector("#wrapper");
    const fragment=document.createDocumentFragment();
    const parser = new DOMParser();
    let taskList=template(data);
    let taskListDom = parser.parseFromString(taskList, "text/html").querySelector("main");
    fragment.appendChild(taskListDom);
    const main=document.querySelector("main");
    main?wrapper.replaceChild(fragment, main):wrapper.appendChild(fragment);
  }
}
