/**
 * Задание: Напишите программу, которая выводит через console. log все числа от 1 до 100, с двумя исключениями.
 * Для чисел, нацело делящихся на 3, она должна выводить "Fizz", а для чисел, делящихся на 5 (но не на 3) – "Buzz".
 * Когда сумеете, исправьте её так, чтобы она выводила "FizzBuzz" для всех чисел, которые делятся и на 3, и на 5.
 * @constructor
 * @param {number} start - начало диапазона
 * @param {number} end - конец диапазона
 */

const fizzBuzz = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz')
    else if (i % 5 === 0) console.log('Buzz')
    else console.log(i);
  }
}

fizzBuzz(100, 150);

/** решение автора
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
 */
