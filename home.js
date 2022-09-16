
let date = new Date();

console.log(date);

let currentdate = document.lastModified;

console.log(currentdate);

document.querySelector('div').textContent = ('Last Updated: ' + currentdate);

let year = date.getFullYear();

console.log(year);

document.querySelector('.year').textContent = year;
