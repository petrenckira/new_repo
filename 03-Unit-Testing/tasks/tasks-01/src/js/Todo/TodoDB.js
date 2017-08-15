(function (app) {
  /**
   * @description - a constructor for creating databases
   * @param db {Object} - some database which then will store in the instance of a constructor
   * @constructor
   */
  const pubSub = app.utils.pubSub;

  function saveToLS(todoCollection) {
    localStorage.setItem("todoData", JSON.stringify(todoCollection));
  }

  function getFromLS() { // Fake Server Request
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(JSON.parse(localStorage.getItem("todoData")));
      }, 3000)
    })
  }

  class TodoDB {
    constructor() {}

    getStructure() {
      return $.extend(true, {}, this._structure);
    }

    updateDB(db) {
      if (typeof db !== "object") {
        throw Error("db must be an object");
      }
      this._structure = db;
      saveToLS(db);

      return db;
    }

    fetchDb() {
      return getFromLS().then(this.updateDB.bind(this));
    }

    resetDB() {
      this._structure = {};
      saveToLS(this._structure);
    }
  }


  pubSub.applyTo(TodoDB.prototype);
  app.utils.extend(app, 'myApp.modules.Todo')['TodoDB'] = TodoDB;

}(window.myApp || (window.myApp = {})));
