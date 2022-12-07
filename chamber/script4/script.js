function toggleMenu() {
document.getElementById('navigation').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;



const date_now = new Date();

const full_date = new Intl.DateTimeFormat ('en-US', {dateStyle: 'full'}).format(date_now);

console.log(full_date);

document.querySelector('.date').textContent = full_date;



let date = new Date();

console.log(date);

let currentdate = document.lastModified;

console.log(currentdate);

document.querySelector('.last').textContent = ('Last Updated: ' + currentdate);

let year = date.getFullYear();

console.log(year);

document.querySelector('.year').textContent = year;
