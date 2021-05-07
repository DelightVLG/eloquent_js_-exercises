/**
 * Задание: В предыдущей главе была упомянута функция Math. min, возвращающая самый маленький из аргументов.
 * Теперь мы можем написать такую функцию сами. Напишите функцию min, принимающую два аргумента,
 * и возвращающую минимальный из них.
 * @constructor
 * @param {number} firstNum - первое число
 * @param {number} secondNum - второе число
 */

const minOfTwo = (firstNum, secondNum) => firstNum < secondNum ? firstNum : secondNum;

console.log(minOfTwo(1000, -9000));
