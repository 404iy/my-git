let modal = document.getElementById("myModal");

// Получаем кнопку закрытия модального окна
let closeModalBtn = document.getElementById("closeModalBtn");


openModalBtn.addEventListener("click", function () {
    modal.style.display = "flex";
});


closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});


window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});