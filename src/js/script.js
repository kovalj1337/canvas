function updateTotal(arg) {
    totalElement.textContent = `${arg} грн`; // Обновляем текст в элементе
}
let totalSum = 0,
    totalSumNow,
    totalSumBefore = false
const radioButtons = document.querySelectorAll('input[type="radio"][name="size"]'),
    canvas = document.querySelector('.molbert-sam'),
    checkboxes = document.querySelectorAll('input[name="additional"]')
priceSpan = document.querySelector('#price')
const totalElement = document.querySelector("#price");


radioButtons.forEach((radio) => {
    radio.addEventListener("click", () => {
        if (radio.value == "30") {
            canvas.style.width = "300px"
            canvas.style.height = "300px"
            canvas.style.top = "50%"
        } else if (radio.value == "90") {
            canvas.style.width = "300px"
            canvas.style.height = "400px"
            canvas.style.top = "42%"
        } else if (radio.value == "120") {
            canvas.style.width = "400px"
            canvas.style.height = "500px"
            canvas.style.top = "33%"
        } else if (radio.value == "150") {
            canvas.style.width = "400px"
            canvas.style.height = "600px"
            canvas.style.top = "25%"
        }
    });
});
const sizeForm = document.querySelector(".menu-canvas form"),
    price = document.querySelector("#price")
if (sizeForm) {
    sizeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const selectedSize = sizeForm.querySelector('input[type="radio"][name="size"]:checked');
        if (selectedSize.value == "30") {
            totalSumNow = 100
        } else if (selectedSize.value == "90") {
            totalSumNow = 200
        } else if (selectedSize.value == "120") {
            totalSumNow = 300
        } else if (selectedSize.value == "150") {
            totalSumNow = 400
        }
        if (totalSumBefore && totalSumNow) {
            totalSum -= totalSumBefore
            totalSum += totalSumNow
            updateTotal(totalSum)
            totalSumBefore = totalSumNow
        } else {
            totalSum += totalSumNow
            totalSumBefore = totalSumNow
            updateTotal(totalSum)
        }
    });
}
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const value = parseInt(checkbox.value, 10); // Получаем значение чекбокса

        if (checkbox.checked) {
            totalSum += value; // Если чекбокс включен, добавляем значение
        } else {
            totalSum -= value; // Если чекбокс выключен, вычитаем значение
        }

        updateTotal(totalSum); // Обновляем сумму
    });
});
const buy = document.querySelector(".buy")
    bgcBlur = document.querySelector(".bgc-blur")

buy.addEventListener("click", function(){
    bgcBlur.style.right = "0%"
})