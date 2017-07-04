// code
//
let getSum = (a, b)=>a + b;

let myFunction = (...rest)=> {
    let str = "";
    let args = [];
    let callback;
    if (typeof rest[0] == "string") {
        str += rest[0];
        if (typeof rest[rest.length - 1] == "function")
            args = rest.slice(1, rest.length - 1);
            callback = rest[rest.length - 1];
    }
    else{
        args = rest.slice(0, rest.length);
    }
    let sum=args.reduce(getSum);
    if(str.length!==0){
        str+=" "+sum;
        callback(str);
    }
};


myFunction('My Result is ', 3, 4, 1, function(yourresult){console.log(yourresult)});