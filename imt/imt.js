//Находим необходимые элементы DOM и записываем в переменные
const taskInputWeight = document.getElementById('taskInputWeight');
const taskInputHeight = document.getElementById('taskInputHeight');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');


//1. Напишите функцию с именем `calculateBMI`, которая принимает два числовых параметра: вес в килограммах и рост в метрах.


//2. Внутри функции выполните следующие шаги:
- возведите рост в квадрат, используя метод `Math.pow(a, b)`.


- разделите вес на квадрат роста, чтобы получить ИМТ


- округлите результат ИМТ до двух десятичных знаков с помощью метода `Math.round()`


//3. Верните значение ИМТ


//4. Вызовите функцию `calculateBMI` с различными значениями веса и роста и выведите результат



addButton.addEventListener('click', createTask);