import '@popperjs/core';
import 'bootstrap';
import './ssm';

const body = document.getElementById('body');
if (body) {
    const date = new Date().getFullYear();
    const year = document.querySelector('.year');
    year.innerHTML = date.toString();
    console.log(new Date())
}
