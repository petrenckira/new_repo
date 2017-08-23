export default class Router {
  constructor() {
    if (instance) {
      return instance;
    }
    instance=this;
    this.routers = new Map();
    this.init();

  }

  getHash() {
    const url = location.hash || "/";
    return url;
  }
  navigate(){
    const url=this.getHash();
    this.routers.get(url)();

  }

  addRouter(hash, controller) {
    this.routers.set(hash, controller);
  }

  init() {
    window.addEventListener("load", this.navigate.bind(this));
    window.addEventListener("hashchange", this.navigate.bind(this));
  }
}
let instance = null;





