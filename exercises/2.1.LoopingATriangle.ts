/**
 * Задание: Напишите цикл, который за n вызовов console. log выводит треугольник.
 */

const makeATriangle = (rows: number) => {
    for (let triangle = '#'; triangle.length < rows; triangle += '#') console.log(triangle);
}

makeATriangle(8);
