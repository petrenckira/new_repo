
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function rem(a, b) {
    return a % b;
}
calculations = {
    '+': sum,
    '-': sub,
    '*': mul,
    '/': div,
    '%': rem
};
function calculate(operation, a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'Error, operands should be numbers!';
    }

    if (operation == "+" || operation == "-" || operation == "*" || operation == "/" || operation == "%") {
        return calculations[operation](a, b);

    }
    else {
        return 'Error, unsupported operation!';
    }
}
console.log(calculate('+', 1, 8));