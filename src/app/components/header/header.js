require('./header.less'); // example of including component's styles

export default class Header {
  constructor() {
    this.map = new Map([["#delete-task-item", ""], ["#task-list-item", ""], ["#report-item", ""], ["#settings-item", ""]]);
    this.init();
  }

  scrollHeader() {
    this.body = document.querySelector('body');
    if (window.pageYOffset > 100) {
      this.body.classList.add("body-fixed");
    }
    else {
      this.body.classList.remove("body-fixed");
    }
  }
  getEl(selector) {
    return document.querySelector(selector);
  }

  changeState(e) {
    let current = e.target.id;
    for (let key of this.map.keys()) {
      console.log(this.getEl(key));
      this.getEl(key).classList.remove("active")
    }
    this.getEl("#"+current).classList.add("active");
  }

  init() {
    for (let key of this.map.keys()) {
      this.getEl(key).addEventListener("click", this.changeState.bind(this));
    }
    window.addEventListener("scroll", this.scrollHeader.bind(this));
    console.log("i am Header constructor");

  }
}

window.addEventListener("DOMContentLoaded", function () {
  let header=new Header();
});



