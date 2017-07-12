import { amazingString, amazingNumber, greatArray, anotherNameOfMakeStringAmazing} from './service.js';

    export default function amazingAmountOfStringsInArray() {
            var result = greatArray.slice();

            for(var i = 0; i < amazingNumber; i++) {
                result.push(anotherNameOfMakeStringAmazing(amazingString));
            }

            return 'Here the amazing array: [' + result + ']';
    };

    console.log('amazing-string-method.js was required');


