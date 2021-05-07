/**
 * Задание: Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество
 * символов “B”, содержащихся в строке.
 * Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ,
 * который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”).
 * Для этого переделайте функцию countBs ...
 * @constructor
 * @param {string} str - строка по которой будет производиться поиск.
 * @param {string} char - символ, который надо найти в строке и узнать сколько раз он встречается.
 */

const countChar = (str, char) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) counter += 1;
  }

  return counter;
}

const countBs = (str) => {
  return countChar(str, 'B') // замыкание
}

console.log(countBs('hghgBBBsbbSS'));
