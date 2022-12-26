// 6.8 Функции в ES6

/*

  Задание 5.

    Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
    Иначе говоря, умножает x на себя n раз и возвращает результат.

    Используйте Arrow Function синтаксис.

    Протестируйте функцию на любых значениях и выведите результат в консоль.

*/

const getExponentiation = (x, n) => {
    return x**n;
}

console.log(getExponentiation(2, 2));
console.log(getExponentiation(3, 3));
console.log(getExponentiation(6, 9));