/**
 * Created by Iryna_Petrenko1 on 8/15/2017.
 */

describe('TodoDB', function () {

    var TodoDB = window.myApp.modules.Todo.TodoDB;
    var todoDB;

    beforeEach(() => {
        todoDB = new TodoDB();
    });

    function ModuleForSucsess() {
        try {
            return new TodoDB()
        } catch (e) {
            return e.message;
        }
    }

    it('function updateDB error ', function () {
        expect(function () {
            new TodoDB().updateDB("obj");
        }).toThrow();
    });

    it('function updateDB returns obj ', function () {
        expect(function () {
            new TodoDB().updateDB({});
        }).toBeDefined();
    });

});
