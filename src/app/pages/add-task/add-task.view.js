/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
import template from "./add-task.hbs";
import EventBus from "./../../eventbus";
let eventBus=new EventBus();

export default class AddTaskView {
  render() {
    const wrapper = document.querySelector("#wrapper");
    const fragment = document.createDocumentFragment();
    const parser = new DOMParser();
    let addTaskTemplate = template();
    let addTaskDom = parser.parseFromString(addTaskTemplate, "text/html").querySelector("#add-task");
    fragment.appendChild(addTaskDom);
    wrapper.appendChild(fragment);
    this.init();

  }

  getDataTask() {
    return {
      Done: false,
      Global: true,
      category: "work",
      date: "today",
      headline: document.querySelector("#title").value || "lala",
      priority: "low",
      text: document.querySelector("#description").value || "lalala",
      toDo: false,
      value: 3
    };
  }

  init() {
    document.querySelector("#save-task").addEventListener("click", ()=>{
      eventBus.publish("addTask",this.getDataTask());
      console.log("adding task");
    });
  }
}
