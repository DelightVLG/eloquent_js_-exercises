/**
 * Задание: Напишите цикл, который за n вызовов console. log выводит треугольник.
 */
var makeATriangle = function (rows) {
    for (var triangle = '#'; triangle.length < rows; triangle += '#')
        console.log(triangle);
};
makeATriangle(8);
