/**
 * Created by Iryna_Petrenko1 on 8/15/2017.
 */
describe('TodoCollection', function () {

    var TodoCollection = window.myApp.modules.Todo.TodoCollection;
    var collection;

    beforeEach(() => {
        collection = new TodoCollection([
            {id: 1, title: 'test1', description: 'test1', date: 'test1', category: 'inProgress'},
            {id: 2, title: 'test2', description: 'test2', date: 'test2', category: 'inProgress'}
        ]);
    });

    function ModuleForSucsess(args) {
        try {
            return new TodoCollection(args)
        } catch (e) {
            return e.message;
        }
    }

    it('params error ', function () {
        expect(function () {
            new TodoCollection("test");
        }).toThrow();
    });

    it('function reset returns null ', function () {
        expect(ModuleForSucsess([
            {
                id: 1,
                title: 'test1',
                description: 'test1',
                date: 'test1',
                category: 'inProgress'
            },
            {
                id: 2,
                title: 'test2',
                description: 'test2',
                date: 'test2',
                category: 'inProgress'
            }
        ]).reset()).toBeNull();
    });

    it('function getTodoCollectionItemsCount returns 1 ', function () {
        expect(ModuleForSucsess([{
                    id: 1,
                    title: 'test1',
                    description: 'test1',
                    date: 'test1',
                    category: 'inProgress'
                }]).getTodoCollectionItemsCount()).toEqual(1);
    });

    it('function getTodoById error ', function () {
        expect(function () {
            new TodoCollection([{
                id: '1',
                title: 'test1',
                description: 'test1',
                date: 'test1',
                category: 'inProgress'
            }]).getTodoById(1)
        }).toThrow();
    });

    it('function getTodoById returns obj', function () {
        expect(ModuleForSucsess([{
            id: 1,
            title: 'test1',
            description: 'test1',
            date: 'test1',
            category: 'inProgress'
        }]).getTodoById('1')).toBeDefined();
    });

    it('function removeTodo error ', function () {
        expect(function () {
            new TodoCollection([{
                id: 1,
                title: 'test1',
                description: 'test1',
                date: 'test1',
                category: 'inProgress'
            }]).removeTodo(1)
        }).toThrow();
    });

    it('function removeTodo ', function () {
        expect(ModuleForSucsess([{
            id: 1,
            title: 'test1',
            description: 'test1',
            date: 'test1',
            category: 'inProgress'
        }]).removeTodo('1')).toBeDefined();
    });


});
