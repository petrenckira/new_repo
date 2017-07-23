### Task 1
---
Good webpack.config.
You renamed amazingArray predicted its renaming where it was imported.
1. It works but it's not readable: 


```js
export {makeStringAmazing as anotherNameOfMakeStringAmazing , amazingString,amazingObject, amazingArray as greatArray, amazingBoolean, amazingNumber};
```
=>
```js
export default {
    makeStringAmazing,
    amazingString,
    amazingObject,
    anotherNameOfAmazingArray: amazingArray,
    amazingBoolean,
    amazingNumber
};
```
Same for:
```js
import { amazingString, amazingNumber, greatArray, anotherNameOfMakeStringAmazing} from './service.js';
```

### Task 2
---
1. Unsed *webpackUglifyJsPlugin*
2. Dead code.


```js
// new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.bundle.js')
```
3. Config is broken