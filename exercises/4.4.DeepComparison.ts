/** Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два
 * одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать
 * рекурсивным вызовом deepEqual.
 */



    const deepEqual = (a: any, b: any): boolean => {
    if (a === b) return true;

    if (a === null || typeof a != 'object' ||
    b === null || typeof b != 'object') return false;

    let keysA: any[] = Object.keys(a);
    let keysB: any[] = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}


const obj1 = {
    'a': 1,
    'b': 2
}

// const obj2 = obj1;

const obj2 = {
    'a': 1,
    'b': 2
}

console.log(deepEqual(obj1, obj2));
