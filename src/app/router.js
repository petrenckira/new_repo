export default class Router {
  constructor() {
    this.routers = new Map();
    this.init();
    if (instance) {
      return instance;
    }
    instance=this;
  }

  getHash() {
    const url = location.hash || "/";
    return url;
  }
  navigate(){
    console.log("i am router");
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





