import sum from './sum';
import concat from './concat';

let form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let a = document.querySelector('#first-number');
    let b = document.querySelector('#second-number');
    let sumRes = sum(a.value, b.value);
    let concatRes = concat(a.value, b.value);

    document.querySelector('#concated-string').innerHTML = "Result string: " + concatRes;
    document.querySelector('#sum').innerHTML = "Sum: " + sumRes;
});

