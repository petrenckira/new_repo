/**
 * Created by Iryna_Petrenko1 on 7/26/2017.
 */

let firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
let instance = null;
export  default class Firebase {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.config = {
      apiKey: "AIzaSyAfRG1QGmH82xBZ1UIBOJ2SQmonc4_TKgQ",
      authDomain: "pomodoro-3731c.firebaseapp.com",
      databaseURL: "https://pomodoro-3731c.firebaseio.com",
      projectId: "pomodoro-3731c",
      storageBucket: "",
      messagingSenderId: "506041088386"
    };
    this.init();
  }

  init() {
    firebase.initializeApp(this.config);
    // this.writeTasks(20, "name", "email", "url")
    //   .then((result) => this.getDataFirebase("TaskListGlobal"));
    console.log("init firebase");
  }

  getDataFirebase(name) {
    return new Promise(resolve => {
      firebase.database().ref(name).on('value', result => {
        if (resolve(result)) {
          resolve(result);
        }
      })
    });
    // let dbRefObj = firebase.database().ref(name);
    // return dbRefObj.once("value");

  }

  writeTasks(options) {
    try {
      return firebase.database().ref('TaskListGlobal/').push(options);
    }
    catch (e) {
      console.log(e.message);
    }
  }

  changeSettings(obj) {
    return firebase.database().ref('Settings/').set({
      workTime: obj.workTime,
      workIteration: obj.workIteration,
      shortBreak: obj.shortBreak,
      longBreak: obj.longBreak
    });
  }

  errorData(error) {
    console.log('Error');
    console.log(error);
  }
}

// init() {
//   firebase.initializeApp(this.config);
//   this.writeTasks(19, "name", "email", "url")
//     .then((result) => this.getDataFirebase("TaskListGlobal")
//       .then((result)=> this.writeTasks(20, "name", "email", "url")
//         .then((result)=>this.getDataFirebase(TaskListGlobal)
//         )));
//   console.log("init firebase");
// }
//
// getDataFirebase(name) {
//   let dbRefObj = firebase.database().ref(name);
//   return dbRefObj.on("value", result=>console.log(result.val()));
//
// }
//
// writeTasks(TaskId, name, email, imageUrl) {
//   return firebase.database().ref('TaskListGlobal/' + TaskId).set({
//     username: name,
//     email: email,
//     profile_picture: imageUrl
//   });
// }

// Done: options.Do,
// Global: options,
// category: options,
// date: options,
// headline: options,
// priority: options,
// text:options,
// toDo:options,
// value:options

