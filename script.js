// 1. Вывод приветственного сообщения в консоль разработчика
console.log("Скрипт Подключён и работает в реальном времени! Спасибо за использовагние <3");

// 2. Вставка текущей даты в подвал
const dateSpan = document.getElementById("update-date");
const today = new Date();

// Форматируем дату в читаемый вид 
const options = { year: 'numeric', month: 'long', day: 'numeric' };
dateSpan.textContent = today.toLocaleDateString("ru-RU", options);