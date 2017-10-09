OK

11.	parseInt('09') - depends on a browser 0 or 9 numbers. The trick is that parseInt has the second parameter, and if it is not provided, interpreter tries to guess number notation. Some old browsers can guess it is 8, and as 09 is invalid in this notation return 0. This is an example that we should provide the second parameter
13.	'  -9\n' - 5 - answer is -14. Because of '-' cast to a number, where white characters are missed.
21.	+ '' - number 0. Cast to a number. '' is 0.
22.	+[]  - number 0. Firstly it converts to an empty string by [].toString() then to a number: '' is 0.
