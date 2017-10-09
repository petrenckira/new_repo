// your code here

function counter() {
    var count = 0;
    function counterNew() {
        return count++;
    }
    counter.add = function () {
        counterNew();
    };
    counter.get = function () {
        console.log(count);
    };
    counter.reset = function () {
        count = 0;
    };
    return counter;
}

var first = counter();
first.add();
first.add();
first.add();
first.get();
first.reset();
first.get();
first.add();
first.add();
const second = counter();
second.add();
second.add();
second.get();
second.reset();
second.get();
