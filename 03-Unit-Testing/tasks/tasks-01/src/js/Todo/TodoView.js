(function (app) {

  "use strict";

  const pubSub = app.utils.pubSub;

  const codes = {
    "1": "#pending",
    "2": "#inProgress",
    "3": "#completed"
  };

  class TodoView {
    constructor(options) {
      const defaults = {
        title              : "To Do List",
        revertDuration     : 200,
        $todoContainer     : $("#todo-app"),
        todoForm           : "#todo-form",
        removeTodoContainer: ".remove-todo-container"
      };

      pubSub.applyTo(this);
      this.options = $.extend(defaults, options);
    }

    renderAll() {
      this.options.$todoContainer.html(Mustache.render(this.tplAll, {
        title: this.options.title
      }));
    }

    removeItem(id) {
      $("li[data-todo-id=" + id + "]").remove();
    }

    renderItem($appendTo, todoModel) {
      $appendTo.append(Mustache.render(this.tplItem, todoModel));
    }

    clear() {
      $(".todo-task").remove();
    }

    generateDialog(message) {
      const id           = "response-dialog";
      const title        = "Message";
      let responseDialog = $("#" + responseId);
      let buttonOptions;

      if (!responseDialog.length) {
        responseDialog = $("<div />", {
          title,
          id
        }).appendTo($("body"));
      }

      responseDialog.html(message);

      buttonOptions = {
        "Ok": function () {
          responseDialog.dialog("close");
        }
      };

      responseDialog.dialog({
        draggable    : false,
        autoOpen     : true,
        width        : 400,
        modal        : true,
        closeOnEscape: true,
        buttons      : buttonOptions
      });
    }

    generateElement(todoModel) {
      const parent = $("#" + todoModel.category).find(".todo-data");

      if (!parent) {
        return;
      }

      this.renderItem(parent, todoModel);

      $("li[data-todo-id=" + todoModel.id + "]").draggable({
        start         : () => {
          $(this.options.removeTodoContainer).show();
        },
        stop          : () => {
          $(this.options.removeTodoContainer).hide();
        },
        revert        : "invalid",
        revertDuration: this.options.revertDuration
      });
    }

    todoAdd() {
      const totoForm     = $(this.options.todoForm)[0];
      const errorMessage = "Title can not be empty";
      const title        = totoForm.elements["todo-title"].value;
      const description  = totoForm.elements["todo-description"].value;
      const date         = totoForm.elements["todo-date"].value;
      let tempData;

      if (!title) {
        this.generateDialog(errorMessage);
        return;
      }

      tempData = {
        title      : title,
        date       : date,
        description: description
      };

      pubSub.publish("todoAdded", tempData);

      this.resetForm(totoForm);
    }

    resetForm(totoForm) {
      totoForm.reset();
    }

    generateTodoItems(todoCollection) {
      $.each(todoCollection, (index, todoItem) => {
        this.generateElement(todoItem);
      });
    }

    attachDropOnCategories() {
      $.each(codes, (newCategory, value) => {
        $(value).droppable({
          drop: this.onItemDropped.bind(this, newCategory)
        });
      });
    }

    onItemDropped(newCategory, event, ui) {
      const element = ui.helper;
      const todoId  = String($(element).data("todo-id"));
      // Removing old element
      this.removeItem(todoId);

      pubSub.publish("categoryChanged", todoId, codes[newCategory].slice(1));

      // Hiding Delete Area
      $(this.options.removeTodoContainer).hide();
    }

    attachDropOnItems() {
      $(this.options.removeTodoContainer).droppable({
        drop: (event, ui) => {
          const element = ui.helper;
          const todoId  = String($(element).data("todo-id"));

          // Removing old element
          this.removeItem(todoId);

          // Updating local storage
          pubSub.publish("todoItemDropped", todoId);

          // Hiding Delete Area
          $(this.options.removeTodoContainer).hide();
        }
      })
    }

    initDatePicker() {
      const $datePicker = $("#datepicker");

      $datePicker.datepicker();
      $datePicker.datepicker("option", "dateFormat", "dd/mm/yy");
    }

    initDragAndDrop() {
      $(".task-container").droppable();
      $(".todo-task").draggable({
        revert        : "valid",
        revertDuration: this.options.revertDuration
      });
    }

    init(todoCollection) {
      this.tplAll  = $('#todo-component-tpl').html();
      this.tplItem = $('#todo-item-tpl').html();
      this.renderAll();
      this.initDatePicker();
      this.initDragAndDrop();
      this.generateTodoItems(todoCollection);
      this.attachDropOnCategories();
      this.attachDropOnItems();
      $(".btn-add").on("click", $.proxy(this.todoAdd, this));
      $(".remove-all").on("click", () => {
        this.publish("removeAll");
      });
      $(".loader").hide();
    }
  }

  app.utils.extend(app, 'myApp.modules.Todo')['TodoView'] = TodoView;

}(window.myApp || (window.myApp = {})));
