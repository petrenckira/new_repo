/**
 * Created by Iryna_Petrenko1 on 7/17/2017.
 */
function memoized(passedFunc) {
    var cache = {};
    return function (x) {
        if (x in cache) return cache[x];
        return cache[x] = passedFunc(x);
    };
}


var f = function (s) {
    return s.a
};

var memoized_f = memoized(f);


var obj = {a: 1, b: 2};

console.log(f(obj));// 1
console.log(memoized_f(obj));// 1


obj.a = 3;

console.log(f(obj)); // 3
console.log(memoized_f(obj)); // 1
