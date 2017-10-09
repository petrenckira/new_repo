
import {amazingObject, amazingBoolean} from './service.js';

        console.log('amazing-object-method.js was required');

        export default  function () {
            if (amazingBoolean) {
                amazingObject.amazing = true;
            }

            return 'Here the amazing object: ' + JSON.stringify(amazingObject);
        };


