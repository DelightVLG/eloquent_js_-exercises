/**
 * В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент
 * и выдаёт новый массив – с обратным порядком элементов. Вторая работает как оригинальный метод reverse –
 * она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента.
 * Не используйте стандартный метод reverse.
 */

const reverseArray = (array: Array<string>): string[]=> {
    let output: string[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

console.log(reverseArray(['A', 'B', 'C']));


// function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//         let old = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = old;
//     }
//     return array;
// }
