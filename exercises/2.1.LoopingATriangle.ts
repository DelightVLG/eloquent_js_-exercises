/**
 * Задание: Напишите цикл, который за n вызовов console. log выводит треугольник.
 */

const makeATriangle = (rows: number): void => {
    for (let triangle = '#'; triangle.length < rows; triangle += '#') console.log(triangle);
}

makeATriangle(8);
