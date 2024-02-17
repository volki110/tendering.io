document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("myModal");
    const closeModalBtn = modal.querySelector(".close");
    const buttons = document.querySelectorAll(".button");

    // Добавляем обработчик клика на кнопку открытия модального окна
    openModalBtn.addEventListener("click", function() {
        modal.style.display = "block";
        document.body.classList.add("modal-opened"); // Добавляем класс для скрытия кнопок

        // Скрываем активные кнопки
        buttons.forEach(button => {
            button.style.display = "none";
        });
    });
   
    // Добавляем обработчик клика на кнопку закрытия модального окна
    closeModalBtn.addEventListener("click", closeModal);

    // Добавляем обработчик клика на область вне модального окна для его закрытия
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Функция для закрытия модального окна
    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-opened"); // Удаляем класс для отображения кнопок

        // Показываем активные кнопки
        buttons.forEach(button => {
            button.style.display = "inline-block";
        });
    }

    // Добавляем обработчик клика на кнопку "Наверх"
    myBtn.addEventListener("click", function() {
        // Прокрутка с плавным скроллингом
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
        