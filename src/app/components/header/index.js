// example of exporting header component
// export * from './header';


import Header from "./header";
import HeaderModel from "./header.model"
import HeaderView from "./header.view";
import HeaderController from "./header.controller";
export  default class HeaderIndex {
  constructor() {
    this.view = new HeaderView();
    this.model = new HeaderModel();
    this.controller = new HeaderController(this.view, this.model);
    this.view.render();
  }
}

