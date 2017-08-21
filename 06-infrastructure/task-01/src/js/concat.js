export default (...args) => {
    return args.reduce((result, arg) => result + arg, '');
}