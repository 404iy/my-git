import '@popperjs/core';
import 'bootstrap';
import datepicker from 'js-datepicker'

const body = document.getElementById('body');
if (body) {
    let today = new Date();// Вывод даты
    let year = today.getFullYear();
    let cYear = document.querySelectorAll('.cYear');
    cYear.forEach(i => i.innerHTML = year.toString());

    let burger = document.querySelector('.header-burger');
    burger.onclick = () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    }
    let menu = document.querySelector('.header__nav');
    menu.onclick = () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    }
    const pickerInput = datepicker('#pickerInput')
    pickerInput.hide()
    const pickerOutput = datepicker('#pickerOutput')
    pickerOutput.hide()
}
