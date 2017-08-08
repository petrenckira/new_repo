/**
 * Created by Iryna_Petrenko1 on 7/6/2017.
 */

class Cycle {
  constructor(options) {
    this.workTime = options.workTime;
    this.shortBreak = options.shortBreak;
    this.workIteration = options.workIteration;
    this.longBreak = options.longBreak;
    this.allTime = ((this.workTime + this.shortBreak) * ( this.workIteration - 1) + this.workTime) * 2 + this.longBreak;
    this.workColor = "#ffb200";
    this.shortBreakColor = "#59abe3";
    this.longBreakColor = "#b470d0";
    this.workTimeWigth = this.getPartWidth(this.allTime, this.workTime);
    this.shortBreakWigth = this.getPartWidth(this.allTime, this.shortBreak);
    this.longBreakWigth = this.getPartWidth(this.allTime, this.longBreak);
    this.str = "background-image: linear-gradient( to right, ";
    this.hoarder = 0;
    this.widthTmp = 0;
  }

  getPartWidth(allWidth, part) {
    return (part / allWidth) * 100;
  }

  createPartCss() {
    for (var i = 0; i < this.workIteration; i++) {
      if (i == 0) {
        this.widthTmp = this.hoarder + this.workTimeWigth;
        this.str += this.workColor + " " + this.hoarder + "%, " + this.workColor + " " + this.widthTmp + "%, ";
        this.hoarder = this.widthTmp;
      }
      else {
        this.widthTmp = this.hoarder + this.shortBreakWigth;
        this.str += this.shortBreakColor + " " + this.hoarder + "%, " + this.shortBreakColor + " " + this.widthTmp + "%, ";
        this.hoarder = this.widthTmp;
        this.widthTmp = this.hoarder + this.workTimeWigth;
        this.str += this.workColor + " " + this.hoarder + "%, " + this.workColor + " " + this.widthTmp + "%, ";
        this.hoarder = this.widthTmp;
      }
    }
  }

  createCss() {
    this.createPartCss();
    this.widthTmp = this.hoarder + this.longBreakWigth;
    this.str += this.longBreakColor + " " + this.hoarder + "%, " + this.longBreakColor + " " + this.widthTmp + "%, ";
    this.hoarder = this.widthTmp;
    this.createPartCss();
    let str2 = this.str.slice(0, -2) + ")";
    this.createTimeItemsBottom();
    this.createTimeItemsTop();
    return str2;

  }

  createTimeItemsBottom() {
    let k = 0;
    let width = 0;
    let fragment = document.createDocumentFragment();
    let widthItem = (100 * 30) / this.allTime;
    while (k < this.allTime - 30) {
      width += widthItem;
      let p = document.createElement("p");
      k += 30;
      let tmp = this.convertToHours(k);
      p.innerHTML = tmp;
      p.setAttribute("style", "left: " + (width) + "%");
      fragment.appendChild(p);
    }
    let timeLine = document.querySelector("#time-line");
    timeLine.innerHTML = "";
    console.log(timeLine);
    timeLine.appendChild(fragment);
  }

  createTimeItemsTop() {
    let phaseTime = document.querySelector("#phase-time");
    let fragment = document.createDocumentFragment();
    let start = 0 + "m";
    let end = this.convertToHours(this.allTime);
    let firstCycle = (((this.workTime + this.shortBreak) * (this.workIteration - 1)) + this.workTime) + this.longBreak;
    let position = (100 * firstCycle) / this.allTime;
    firstCycle = "First cycle: " + this.convertToHours(firstCycle);
    let first = document.createElement("p");
    let last = document.createElement("p");
    let cycle = document.createElement("p");
    first.innerHTML = start;
    first.setAttribute("style", "left: " + 0);
    fragment.appendChild(first);
    cycle.innerHTML = firstCycle;
    cycle.setAttribute("style", "left: " + position + "%");
    fragment.appendChild(cycle);
    last.innerHTML = end;
    last.setAttribute("style", "left: " + 100 + "%");
    fragment.appendChild(last);
    phaseTime.innerHTML = "";
    phaseTime.appendChild(fragment);
  }

  convertToHours(k) {
    let str = "";
    if (k >= 60) {
      let hours = Math.floor(k / 60);
      str = hours + "h ";
      if (k % 60 !== 0) {
        let minutes = k - hours * 60;
        str += minutes + "m";
      }
    }
    else {
      str = k + "m";
    }
    console.log(str);
    return str;
  }

}


class SettingsControls {
  changeValue(event) {
    console.log(this);
    let current = event.target;
    if (current.className == "icon-add") {
      let obj = this.setNewValue( "plus", current);
      let value = obj.value;
      let valueBlock = obj.valueBlock;
      valueBlock.innerHTML = value;
    }
    if (current.className == "icon-minus") {
      this.setNewValue("minus", current);
      let obj = this.setNewValue("minus", current);
      let value = obj.value;
      let valueBlock = obj.valueBlock;
      valueBlock.innerHTML = value;
    }
  }

  setNewValue(action, current) {
    let parent = current.parentElement.parentElement;
    let valueBlock = parent.querySelector(".pomodoro-settings-block__value");
    let value = +valueBlock.innerHTML;
    let obj = this.getParams(valueBlock);
    if (action == "plus") {
      if (this.validate(obj, value, action)) {
        value += obj.step;
      }
    }
    if (action == "minus") {
      if (this.validate(obj, value, action)) {
        value = value - obj.step;
      }
    }
    return {
      value: value,
      valueBlock: valueBlock
    }
  }

  validate(obj, value, action) {
    if ((value < obj.max && action == "plus") || (value > obj.min && action == "minus")) {
      return true;
    }
    else {
      return false;
    }
  }

  getParams(value) {
    if (value.id == "work-time") {
      return {
        min: 15,
        max: 25,
        step: 5
      }
    }
    if (value.id == "work-iteration") {
      return {
        min: 2,
        max: 5,
        step: 1
      }
    }
    if (value.id == "short-break") {
      return {
        min: 3,
        max: 5,
        step: 1
      }
    }
    if (value.id == "long-break") {
      return {
        min: 15,
        max: 30,
        step: 5
      }
    }
  }
}

export default class CycleAll {
  constructor() {
    this.settingsControll = new SettingsControls();
    this.div = document.querySelector("#cycle");
    this.settingsBlock = document.querySelector(".pomodoro-settings-bloks");
    this.renderingAll();
    this.drawing();
  }

  renderingAll() {
    if (this.settingsBlock && this.div) {
      this.settingsBlock.addEventListener("click", this.settingsControll.changeValue.bind(this.settingsControll));
      this.settingsBlock.addEventListener("click", this.drawing.bind(this));
      // this.settingsBlock.addEventListener("load", this.drawing.bind(this));
    }
  }

  drawing() {
    const settings = new Cycle(this.getItemsValues());
    this.div.setAttribute("style", settings.createCss());
  }

  getItemsValues() {
    let arr = document.querySelectorAll(".pomodoro-settings-block__value");
    let arrValues = [];
    for (let i = 0; i < arr.length; i++) {
      arrValues[i] = +arr[i].innerHTML;
    }
    return {
      workTime: arrValues[0],
      shortBreak: arrValues[2],
      workIteration: arrValues[1],
      longBreak: arrValues[3]
    }
  }

}




