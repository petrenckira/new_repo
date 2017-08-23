/**
 * Created by Iryna_Petrenko1 on 8/22/2017.
 */
import template from "./timer.hbs";

export default class TaskListView {
  render() {
    const wrapper = document.querySelector("#wrapper");
    const fragment=document.createDocumentFragment();
    const parser = new DOMParser();
    let timer=template();
    let timerDom = parser.parseFromString(timer, "text/html").querySelector("main");
    fragment.appendChild(timerDom);
    const main=document.querySelector("main");
    main?wrapper.replaceChild(fragment, main):wrapper.appendChild(fragment);
  }
}
