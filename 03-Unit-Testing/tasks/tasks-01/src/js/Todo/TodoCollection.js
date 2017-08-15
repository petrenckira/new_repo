(function (app) {

  "use strict";

  const pubSub = app.utils.pubSub;

  class TodoCollection {
    constructor(todoItems) {
      this.model = app.utils.extend(app, 'modules.Todo')['TodoModel'];

      if (todoItems && typeof todoItems !== "object") {
        throw Error("Data must be an object!");
      }

      this._todoCollection = {};

      if (todoItems) {
        this.addTodos(todoItems);
      }
    }

    reset() {
      this._todoCollection = {};
      return null;
    }

    getTodoCollectionItemsCount() {
      return Object.keys(this._todoCollection).length;
    }

    getTodoCollection() {
      return this._todoCollection;
    }

    addNewTodo(todoData) {
      const todoModel                        = new this.model(todoData);
      this.getTodoCollection()[todoModel.id] = todoModel;

      return todoModel;

    }

    addTodos(todoItems) {
      for (let todoItem in todoItems) {
        if (todoItems.hasOwnProperty(todoItem)) {
          this.addNewTodo(todoItems[todoItem]);
        }
      }
    }

    getTodoById(todoId) {
      if (typeof todoId !== "string") {
        throw Error("todo id must be a string");
      }
      return this.getTodoCollection()[todoId];
    }

    removeTodo(id) {
      const todoCollection = this.getTodoCollection();

      if (typeof id !== "string") {
        throw Error("todo id must be a string");
      }

      delete todoCollection[id];

      return todoCollection;
    }
  }

  pubSub.applyTo(TodoCollection.prototype);

  app.utils.extend(app, 'myApp.modules.Todo')['TodoCollection'] = TodoCollection;

}(window.myApp || (window.myApp = {})));

