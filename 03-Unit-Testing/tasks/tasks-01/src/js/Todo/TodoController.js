(function (app) {
  const Todo = window.myApp.modules.Todo;

  class TodoController {
    constructor() {
      this.todoDb         = new Todo.TodoDB();
      this.todoCollection = new Todo.TodoCollection();
      this.todoView       = new Todo.TodoView();
      this.attachEvents();
    }

    init() {
      this.todoDb.fetchDb().then(items => {
        this.todoCollection.addTodos(items);
        this.todoView.init(this.todoCollection.getTodoCollection());
      })
    }

    attachEvents() {
      this.todoView.subscribe("removeAll", this.removeAll.bind(this));

      this.todoDb.subscribe("todoCollectionUpdated", this.todoDb.updateDB);

      this.todoCollection.subscribe("todoAdded", this.todoAdded.bind(this));

      this.todoCollection.subscribe("categoryChanged", this.categoryChanged.bind(this));

      this.todoCollection.subscribe("todoItemDropped", this.todoItemDroped.bind(this));
    }

    removeAll() {
      this.todoView.clear();
      this.todoCollection.reset();
      this.todoDb.resetDB();
    }

    todoAdded(todoData) {
      const newTodo = this.todoCollection.addNewTodo(todoData);
      this.todoView.generateElement(newTodo);
      this.todoDb.updateDB(this.todoCollection.getTodoCollection());
    }

    categoryChanged(id, newCategory) {
      const todoModel = this.todoCollection.getTodoById(id);
      todoModel.changeCategory(newCategory);
      this.todoView.generateElement(todoModel);
      this.todoDb.updateDB(this.todoCollection.getTodoCollection());
    }

    todoItemDroped(id) {
        this.todoCollection.removeTodo(id);
        this.todoDb.updateDB(this.todoCollection.getTodoCollection());
    }
  }

  app.utils.extend(app, 'myApp.modules.Todo')['TodoController'] = TodoController;

}(window.myApp || (window.myApp = {})));
