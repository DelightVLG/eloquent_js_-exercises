/**
 * Задание: Напишите программу, создающую строку, содержащую решётку 8×8, в которой линии разделяются
 * символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
 * Когда справитесь, сделайте размер доски переменным, чтобы можно было создавать доски любого размера.
 * @constructor
 * @param {number} size - количество клеток в ряду
 */

const makeAChessBoard = (size) => {
  let board = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 === 0 ) board += ' ';
      else board += '#';
    }
    board += '\n'
  }
  console.log(board);
}

makeAChessBoard(8);