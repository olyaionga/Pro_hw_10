const length = parseInt(prompt("Введіть довжину масиву:"));
const array = [];
for (let i = 0; i < length; i++) {
  array.push(prompt(`Введіть ${i + 1}-й елемент масиву:`));
}

document.write(`Початковий масив: [${array}]<br>`);

array.sort();
document.write(`Відсортований масив: [${array}]<br>`);

array.splice(1, 3);
document.write(`Масив після видалення елементів з 2 по 4: [${array}]<br>`);
