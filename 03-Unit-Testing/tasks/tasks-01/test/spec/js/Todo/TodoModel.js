/**
 * Created by Iryna_Petrenko1 on 8/15/2017.
 */
describe('TodoModel', function () {

    var TodoModel = window.myApp.modules.Todo.TodoModel;
    var model;

    beforeEach(() => {
        model = new TodoModel({title: 'test1', description: 'test1', date: 'test1'})
    });

    function ModuleForSucsess(args) {
        try {
            return new TodoModel(args)
        } catch (e) {
            return e.message;
        }
    }

    it('params error ', function () {
        expect(function () {
                new TodoModel(null);
            }).toThrow();
    });

    it('title error', function () {
        expect(function () {
                new TodoModel({title:null});
            }).toThrow();
    });

    it('changing category', function () {
        expect(
            ModuleForSucsess({title: 'test1', description: 'test1', date: 'test1'}).changeCategory('pending')
        ).toEqual(true)

    });

    it('changing category error', function () {
        expect(
            function () {
                new TodoModel({title: 'test1', description: 'test1', date: 'test1'}).changeCategory('test');
            }
        ).toThrow()

    });

    it('adding not valid data  error', function () {
        expect(
            function () {
                new TodoModel({title: 1, description: 1, date: 1});
            }
        ).toThrow()

    });
});