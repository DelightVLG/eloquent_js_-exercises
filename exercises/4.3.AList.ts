/**
 * Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также
 * функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, которая
 * получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и
 * функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в
 * списке или же undefined в случае отсутствия такого элемента.
 * Если ваша версия nth нерекурсивна, тогда напишите её рекурсивную версию.
 *
 */

const arrayToList = (array: number[]): object => {
    let list: object = {};
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list,
        }
    }
    return list;
}

console.log(arrayToList([10, 20]));

interface List {
    value: number,
    rest: List | null
}

const listToArray = (list: List | null): number[] => {
    let array: number[] = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
console.log(listToArray({
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null,
        }
    }
}))

const prepend = (value: number, list: List | null): List => {
    return {
        value,
        rest: list
    }
}
console.log(prepend(10, prepend(20, null)));


const nth = (list: List | null, n: number): any => {
    if (!list)
        return undefined;
    else if (n === 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}
