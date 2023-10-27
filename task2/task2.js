//Выведите в консоль количество символов в тексте.
//const text = document.querySelector('.text');
const text = "у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.";

//Добавьте перенос строки после каждого символа `;` и сохраните результат в переменную `result`.
const result = "у лукоморья клён зелёный;\n златая цепь на клён том; и днём и ночью кот учёный;\n всё ходит по цепи кругом;\n идёт направо — песнь заводит;\n налево — сказку говорит;\n там чудеса: там леший бродит; русалка на ветвях сидит;\n там на неведомых дорожках;\n следы невиданных зверей;\n избушка там на курьих ножках;\n стоит без окон, без дверей;\n там лес и дол видений полны;\n там о заре прихлынут волны;\n на брег песчаный и пустой;\n и тридцать витязей прекрасных;\n чредой из вод выходят ясных;\n и с ними дядька их морской;\n там королевич мимоходом;\n пленяет грозного царя;\n там в облаках перед народом;\n через леса, через моря;\n колдун несёт богатыря;\n в темнице там царевна тужит;\n а бурый волк ей верно служит;\n там ступа с бабою ягой;\n идёт, бредёт сама собой;\n там царь кащей над златом чахнет;\n там русский дух… там русью пахнет!;\n и там я был, и мёд я пил; у моря видел клён зелёный;\n под ним сидел, и кот учёный;\n свои мне сказки говорил.";

//Удалите все пробелы в переменной `result` и сохраните результат в переменную `substring`.
const substring = result.replace(/ /g, "");

//Извлеките подстроку из переменной `result`, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную `newText`.

//Замените в извлеченной подстроке (`newText`) все вхождения слова `клён` на `дубе` и сохраните результат в переменную `replacedText`.

//Приведите текст в переменной `result` к верхнему регистру и сохраните результат в переменную `replacedText2`.

//Замените все вхождения слова `клён` на `дуб` в переменной `result` и сохраните результат в переменную `replacedText3`.

//Найдите индекс первого вхождения слова `моря` в тексте и сохраните в переменную `index`.

//Измените только первую букву в переменной `replacedText` на заглавную без использования регулярных выражений и сохраните результат в переменную `modifiedText`.

//Выведите значения всех полученных переменных на экран.
console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);