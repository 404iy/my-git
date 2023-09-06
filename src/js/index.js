import '@popperjs/core';
import 'bootstrap';
import './ssm';

const body = document.getElementById('body');
if (body) {
    let today = new Date();// Вывод даты
    let year = today.getFullYear();
    let cYear = document.querySelectorAll('.cYear');
    for (let i = 0; i < cYear.length; i++) {
        cYear[i].innerHTML = String(year);
    }
}
