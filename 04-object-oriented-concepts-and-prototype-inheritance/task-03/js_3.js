/**
 * Created by Iryna_Petrenko1 on 7/11/2017.
 */
function newOperator(someClass, args) {
    var thisValue = Object.create(someClass.prototype);
    var result = someClass.apply(thisValue, args);
    if (typeof result === 'object' && result !== null) {
        return result;
    }
    return thisValue;
}
