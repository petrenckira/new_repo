/**
 * Created by Iryna_Petrenko1 on 8/11/2017.
 */
class Tabs {

    constructor() {
        this.arr = ["default", "geolocation", "synccalculation", "webworker"];
        this.map = new Map();
        this.getMap();
        this.init();
    }

    getEl(attr, selector) {
        return document.querySelector("[" + attr + "=" + "'" + selector + "'" + "]");
    }

    getMap() {
        for (let i = 0; i < this.arr.length; i++) {
            let key = this.getEl("data-tab", this.arr[i]).querySelector("a").getAttribute("href");
            let value = this.arr[i];
            this.map.set(key, value);
        }
    }

    changeHandler(e) {
        e.preventDefault();

        if (e.target.href) {
            this.changeState(e.target.href, true);
        }

    }

    changeState(path, isChangeState) {

        if (isChangeState) {
            window.history.pushState(null, null, path);
        }
        let current = "/" + path.split("/").pop();
        for (let key of this.map.keys()) {
            this.getEl("href", key).parentNode.classList.remove("active");
        }
        this.getEl("href", current).parentNode.classList.add("active");
        for (let value of this.map.values()) {

            this.getEl("data-content", value).classList.add("hidden");
        }
        this.getEl("data-content", this.map.get(current)).classList.remove("hidden");
    }

    init() {
        let tabs = document.querySelector('.tabs');
        tabs.addEventListener('click', this.changeHandler.bind(this));
        window.addEventListener('popstate', e=> {
            this.changeState.call(this, location.pathname, false);
        });
        window.addEventListener('load', this.changeState.call(this, location.pathname, false));
    }

}
let tabs = new Tabs();







