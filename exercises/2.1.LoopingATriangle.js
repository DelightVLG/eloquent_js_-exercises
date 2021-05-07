/**
 * Задание: Напишите цикл, который за n вызовов console. log выводит треугольник.
 * @constructor
 * @param {number} rows - количество строк (высота треугольника)
 */

const makeATriangle = (rows) => {
  for (let triangle = '#'; triangle.length < rows; triangle += '#') console.log(triangle);
}

makeATriangle(8);
