const formValidator = (function () {
    let result = false;
    return{
        getValidator:function (arr1, arr2) {
            let counter = 0;
            let inputs=[...document.querySelectorAll("input[type=text]").value];

            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].length >= arr2[i]) {
                    counter++;
                }
            }
            if (counter == arr1.length) {
                result = true;
            }
            return this;
        },
        setMinLength:function () {
            let arr = [];
            let countOfInp = document.querySelectorAll("input[type=text]").length;
            for (var i = 0; i < countOfInp; i++) {
                arr[i] = minLenght;
            }
            return arr;
        },
        validate:function(){
            (result)? alert("ok"):alert("not ok");
        }
    }
})();

// initialize validator
const fv = formValidator.getValidator(['input1', 'input2'], [4, 7]);


// finds form in DOM
const registerForm = document.getElementById('registerForm');

// attach event for formValidator.validateLength be fired when form is submited
registerForm.onsubmit = fv.validate;
