import '@popperjs/core';
import 'bootstrap';
import './ssm';

const body = document.getElementById('body');
if (body) {
    let today = new Date();// Вывод даты
    let year = today.getFullYear();
    let cYear = document.querySelectorAll('.cYear');
    cYear.forEach((i) => i.innerHTML = year.toString());
}
