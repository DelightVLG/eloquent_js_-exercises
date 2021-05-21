/**
 * Задание: В предыдущей главе была упомянута функция Math. min, возвращающая самый маленький из аргументов.
 * Теперь мы можем написать такую функцию сами. Напишите функцию min, принимающую два аргумента,
 * и возвращающую минимальный из них.
 */

const minOfTwo = (firstNum: number, secondNum: number): number => firstNum < secondNum ? firstNum : secondNum;

console.log(minOfTwo(1000, -9000));
