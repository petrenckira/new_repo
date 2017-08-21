export default (...args) => {
    return args.reduce((result, arg) => result + parseInt(arg, 10), 0);
}