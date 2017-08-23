/**
 * Created by Iryna_Petrenko1 on 8/8/2017.
 */
import template from "./edit-task.hbs";

export default class EditTaskView {
  render() {
    const wrapper = document.querySelector("#wrapper");
    const fragment=document.createDocumentFragment();
    const parser = new DOMParser();
    let EditTaskTemplate=template();
    let EditTaskDom = parser.parseFromString(EditTaskTemplate, "text/html").querySelector("#add-task");
    fragment.appendChild(EditTaskDom);
    wrapper.appendChild(fragment);
  }
}
