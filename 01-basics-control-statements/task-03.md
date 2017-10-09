OK

Tips:
1. Do not use extra indents - this complicates readability of the code.

2. isNum
Why you haven't used rest parameters?
It is better to use Array.prototype.every instead.
It should be refactored with something like:

function isAllNumbers(...args) {
    return args.every(arg => typeof arg === 'number');
}

3. multiplyView could be refactored with
	...
	return arr
		.map(row => row.join(' '))
		.join('\n');


Remarks:
multiplyTable:
Avoid huge amount of nested blocks.
You could predefine the first row and the first element of it to avoid extra conditions within the loop. Because it is the only specific row.
Then you could start your loop from the index 1 instead 0.
