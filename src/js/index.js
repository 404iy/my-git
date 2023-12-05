import '@popperjs/core';
import 'bootstrap';
import datepicker from 'js-datepicker'
import Swiper from 'swiper/bundle';

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
    const pickerInput = datepicker('#pickerInput', {
        formatter: (input, date,) => {
            const value = date.toLocaleDateString();
            input.value = value;
            return value;
        }
    });
    pickerInput.hide();
    const pickerOutput = datepicker('#pickerOutput', {
        formatter: (input, date,) => {
            const value = date.toLocaleDateString();
            input.value = value;
            return value;
        }
    });
    pickerOutput.hide();
    document.getElementById('dropdownToggle').addEventListener('click', function () {
        let dropdownContent = document.getElementById('dropdownContent');
        dropdownContent.classList.toggle('show');
    });
    document.getElementById('dropdownToggle').addEventListener('click', function () {
        let dropdownContent = document.getElementById('dropdownContent');
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Закрываем выпадающий список, если пользователь кликает вне его области
    window.onclick = function (event) {
        if (!event.target.matches('.header__link')) {
            let dropdownContent = document.getElementById('dropdownContent');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    };
    document.addEventListener("DOMContentLoaded", function () {
        let mySwiper = new Swiper(".rooms__wrapper-mobile", {
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 5000,
            },
            loop: true,
        });
    });

}
