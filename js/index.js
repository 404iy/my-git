let modal = document.getElementById("myModal");

let closeModalBtn = document.getElementById("closeModalBtn");
let openModalBtn = document.getElementById('openModalBtn');

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
