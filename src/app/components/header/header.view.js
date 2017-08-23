/**
 * Created by Iryna_Petrenko1 on 7/28/2017.
 */
require ('./../../components/tooltip/tooltip');
import template from "./header.hbs";



export  default class HeaderView{
  render(data) {
    const wrapper = document.querySelector("#wrapper");
    if(wrapper){
      wrapper.innerHTML="";
      const fragment=document.createDocumentFragment();
      const parser = new DOMParser();
      let header=template(data);
      let headerDom = parser.parseFromString(header, "text/html").querySelector("header");
      fragment.appendChild(headerDom);
      wrapper.appendChild(fragment);
      $("header").tooltip();
    }

  }
}
