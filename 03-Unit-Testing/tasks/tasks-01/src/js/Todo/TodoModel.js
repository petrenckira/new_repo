(function (app) {

  "use strict";

  const pubSub = app.utils.pubSub;

  function validateParams(params) {

    if (typeof params !== "object" || params === null) {
      throw new Error("Todo params must be object!");
    }
    if (!params.title) {
      throw new Error("Title can`t be empty");
    }

    return (typeof params.title === "string" && typeof params.description === "string"
      && typeof params.date === "string");
  }

  const categories = ["pending", "inProgress", "completed"];

  class TodoModel {
    constructor(params) {
        if (!validateParams(params)) {
        throw Error("Not valid params for new TodoModel!");
      }

      this.id          = params.id || (new Date().getTime()).toString();
      this.title       = params.title;
      this.description = params.description;
      this.date        = params.date;
      this.category    = params.category || "pending";
    }

    changeCategory(newCategoryName) {

      if (categories.includes(newCategoryName)) {
        this.category = newCategoryName;
        return true;
      }

      throw Error("No category found!");
    }
  }

  pubSub.applyTo(TodoModel.prototype);
  app.utils.extend(app, 'myApp.modules.Todo')['TodoModel'] = TodoModel;

}(window.myApp || (window.myApp = {})));
