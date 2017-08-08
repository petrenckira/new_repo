/**
 * Created by Iryna_Petrenko1 on 7/26/2017.
 */

let firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

export  default class Firebase {
  constructor() {
    this.config = {
      apiKey: "AIzaSyAfRG1QGmH82xBZ1UIBOJ2SQmonc4_TKgQ",
      authDomain: "pomodoro-3731c.firebaseapp.com",
      databaseURL: "https://pomodoro-3731c.firebaseio.com",
      projectId: "pomodoro-3731c",
      storageBucket: "",
      messagingSenderId: "506041088386"
    };
    this.init();
    if (instance) {
      return instance;
    }
    instance=this;
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

  writeTasks(TaskId, name, email, imageUrl) {
    return firebase.database().ref('TaskListGlobal/' + TaskId).set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
  }

  errorData(error) {
    console.log('Error');
    console.log(error);
  }
}
let instance = null;
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

