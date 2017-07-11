/**
 * Created by Iryna_Petrenko1 on 7/6/2017.
 */

var div = document.querySelector("#cycle");
var SettingsControls = new SettingsControls();
var settingsBlock = document.querySelector(".pomodoro-settings-bloks");
settingsBlock.addEventListener("click", SettingsControls.changeValue);
function drawing() {
  var settings = new Cycle(getItemsValues());
  div.setAttribute("style", settings.getCssRool());
}
settingsBlock.addEventListener("click", drawing);
window.onload = drawing;

function Cycle(options) {
  var workTime = options.workTime;
  var shortBreak = options.shortBreak;
  var workIteration = options.workIteration;
  var longBreak = options.longBreak;
  var allTime = ((workTime + shortBreak) * (workIteration - 1) + workTime) * 2 + longBreak;
  var workColor = "#ffb200";
  var shortBreakColor = "#59abe3";
  var longBreakColor = "#b470d0";
  var workTimeWigth = getPartWidth(allTime, workTime);
  var shortBreakWigth = getPartWidth(allTime, shortBreak);
  var longBreakWigth = getPartWidth(allTime, longBreak);
  var str = "background-image: linear-gradient( to right, ";
  var hoarder = 0;
  var widthTmp = 0;

  function getPartWidth(allWidth, part) {
    return (part / allWidth) * 100;
  }

  function createPartCssRool() {
    for (var i = 0; i < workIteration; i++) {
      if (i == 0) {
        widthTmp = hoarder + workTimeWigth;
        str += workColor + " " + hoarder + "%, " + workColor + " " + widthTmp + "%, ";
        hoarder = widthTmp;
      }
      else {
        widthTmp = hoarder + shortBreakWigth;
        str += shortBreakColor + " " + hoarder + "%, " + shortBreakColor + " " + widthTmp + "%, ";
        hoarder = widthTmp;
        widthTmp = hoarder + workTimeWigth;
        str += workColor + " " + hoarder + "%, " + workColor + " " + widthTmp + "%, ";
        hoarder = widthTmp;
      }
    }
  }

  function createCssRool() {
    createPartCssRool();
    widthTmp = hoarder + longBreakWigth;
    str += longBreakColor + " " + hoarder + "%, " + longBreakColor + " " + widthTmp + "%, ";
    hoarder = widthTmp;
    createPartCssRool();
    var str2 = str.slice(0, -2) + ")";
    createTimeItemsBottom();
    createTimeItemsTop();
    return str2;

  }

  function createTimeItemsBottom() {
    var k = 0;
    var width = 0;
    var fragment = document.createDocumentFragment();
    var widthItem = (100 * 30) / allTime;
    while (k < allTime - 30) {
      width += widthItem;
      var p = document.createElement("p");
      k += 30;
      var tmp = convertToHours(k);
      p.innerHTML = tmp;
      p.setAttribute("style", "left: " + (width) + "%");
      fragment.appendChild(p);
    }
    var timeLine = document.querySelector("#time-line");
    timeLine.innerHTML = "";
    console.log(timeLine);
    timeLine.appendChild(fragment);
  }

  function createTimeItemsTop() {
    var phaseTime = document.querySelector("#phase-time");
    var fragment = document.createDocumentFragment();
    var start = 0 + "m";
    var end = convertToHours(allTime);
    var firstCycle = (((workTime + shortBreak) * (workIteration - 1)) + workTime) + longBreak;
    var position = (100 * firstCycle) / allTime;
    firstCycle = "First cycle: " + convertToHours(firstCycle);
    var first = document.createElement("p");
    var last = document.createElement("p");
    var cycle = document.createElement("p");
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

  function convertToHours(k) {
    var str = "";
    if (k >= 60) {
      var hours = Math.floor(k / 60);
      str = hours + "h ";
      if (k % 60 !== 0) {
        var minutes = k - hours * 60;
        str += minutes + "m";
      }
    }
    else {
      str = k + "m";
    }
    console.log(str);
    return str;
  }

  return {
    getCssRool: function () {
      return createCssRool();
    }
  }
}

function SettingsControls() {

  function changeValue(event) {
    var current = event.target;
    if (current.className == "icon-add") {
      var obj = setNewValue("plus", current);
      var value = obj.value;
      var valueBlock = obj.valueBlock;
      valueBlock.innerHTML = value;
    }
    if (current.className == "icon-minus") {
      setNewValue("minus", current);
      var obj = setNewValue("minus", current);
      var value = obj.value;
      var valueBlock = obj.valueBlock;
      valueBlock.innerHTML = value;
    }
  }

  function setNewValue(action, current) {
    var parent = current.parentElement.parentElement;
    var valueBlock = parent.querySelector(".pomodoro-settings-block__value");
    var value = +valueBlock.innerHTML;
    var obj = getParams(valueBlock);
    if (action == "plus") {
      if (validate(obj, value, action)) {
        value += obj.step;
      }
    }
    if (action == "minus") {
      if (validate(obj, value, action)) {
        value = value - obj.step;
      }
    }
    return {
      value: value,
      valueBlock: valueBlock
    }
  }

  function validate(obj, value, action) {
    if ((value < obj.max && action == "plus") || (value > obj.min && action == "minus")) {
      return true;
    }
    else {
      return false;
    }
  }

  function getParams(value) {
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

  return {
    changeValue: changeValue
  }
}

function getItemsValues() {
  var arr = document.querySelectorAll(".pomodoro-settings-block__value");
  var arrValues = [];
  for (var i = 0; i < arr.length; i++) {
    arrValues[i] = +arr[i].innerHTML;
  }
  return {
    workTime: arrValues[0],
    shortBreak: arrValues[2],
    workIteration: arrValues[1],
    longBreak: arrValues[3]
  }
}



