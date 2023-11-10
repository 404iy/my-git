import '@popperjs/core';
import 'bootstrap';
import './ssm';
import Swiper from 'swiper/bundle';

const body = document.getElementById('body');
if (body) {
    let today = new Date();// Вывод даты
    let year = today.getFullYear();
    let cYear = document.querySelectorAll('.cYear');
    for (let i = 0; i < cYear.length; i++) {
        cYear[i].innerHTML = String(year);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-dots'
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {

            1300: {
                slidesPerView: 3,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
    const slider = document.querySelector('.slider1');
    const slider2 = document.querySelector('.slider2');
    const slider3 = document.querySelector('.slider3');

    const valueDisplay = document.querySelector('.value');
    const valueDisplay2 = document.querySelector('.value2');
    const valueDisplay3 = document.querySelector('.value3');

    function updateSliderValue(newValue, thisSlider, valueShow) {
        thisSlider.value = newValue;
        valueShow.textContent = newValue + '%';
    }

    // Обработчик события "input" при изменении положения ползунка
    slider.addEventListener('input', function () {
        // eslint-disable-next-line no-invalid-this
        const sliderValue = this.value;
        updateSliderValue(sliderValue, slider, valueDisplay);
    });
    slider2.addEventListener('input', function () {
        // eslint-disable-next-line no-invalid-this
        const sliderValue = this.value;
        updateSliderValue(sliderValue, slider2, valueDisplay2);
    });
    slider3.addEventListener('input', function () {
        // eslint-disable-next-line no-invalid-this
        const sliderValue = this.value;
        updateSliderValue(sliderValue, slider3, valueDisplay3);
    });
}
