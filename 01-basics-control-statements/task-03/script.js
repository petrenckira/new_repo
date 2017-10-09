// your code is here
const value = 9;

function isNum(...number) {

    let counter = 0;

    for (let i = 0; i <= arguments.length; i++) {

        if (typeof arguments[i] == 'number') {

            counter++;

        }

    }

    return arguments.length == counter;
}


function multiplyTableToArray(number) {

    if (!isNum(number)) {

        return 'Error, argument is not a number!';

    }

    else {

        let result = [];

        for (let i = 0; i < value; i++) {

            result[i] = number * (i + 1);

        }

        return result;

    }

}

function multiplyTable(firstNumber, secondNumber, size) {

    if (!isNum(firstNumber, secondNumber, size)) {

        return 'Error, one of arguments is not a number!';

    }

    else {

        let result = [];

        for (let i = 0; i <= size; i++) {

            let insideResult = [];

            for (let j = 0; j <= size; j++) {

                if (i == 0 && j == 0) {

                    insideResult[j] = null;

                }

                else if (j == 0) {

                    insideResult[j] = secondNumber + i - 1;

                }

                else if (i == 0) {

                    insideResult[j] = firstNumber + j - 1;

                }

                else {

                    insideResult[j] = result[0][j] * insideResult[0];

                }

            }

            result.push(insideResult);
        }

        return result;
    }


}
function multiplyView(arr) {

    if (!Array.isArray(arr)) {

        return 'Error, argument is not an array!';

    }

    else {

        let rows = arr.length;

        let str = '';

        for (let i = 0; i < rows; i++) {

            str += arr[i].join(' ');

            str += '\n';
        }
        return str.substring(0, str.length - 1);

    }

}