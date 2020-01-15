import gameBoard from './factories/gameBoard';
import ship from './factories/ship';
const shipPosition = (() => {
  var board = gameBoard();
  const myFleet = () => {
    board.addMyShip(ship(4), 45, 'v');
    board.addMyShip(ship(3), 50, 'v');
    board.addMyShip(ship(3), 14, 'h');
    board.addMyShip(ship(2), 32, 'v');
    board.addMyShip(ship(2), 38, 'v');
    board.addMyShip(ship(2), 68, 'h');
    board.addMyShip(ship(1), 1, 'v');
    board.addMyShip(ship(1), 9, 'v');
    board.addMyShip(ship(1), 89, 'v');
    board.addMyShip(ship(1), 97, 'v');
  };
  const opponentFleet = () => {
    board.addOpponentShip(ship(4), 12, 'h');
    board.addOpponentShip(ship(3), 70, 'v');
    board.addOpponentShip(ship(3), 82, 'h');
    board.addOpponentShip(ship(2), 43, 'v');
    board.addOpponentShip(ship(2), 28, 'v');
    board.addOpponentShip(ship(2), 68, 'h');
    board.addOpponentShip(ship(1), 35, 'v');
    board.addOpponentShip(ship(1), 7, 'v');
    board.addOpponentShip(ship(1), 75, 'v');
    board.addOpponentShip(ship(1), 97, 'v');
  };

  return { myFleet, opponentFleet };
})();
// console.log(board.myBoard);
// console.log(board.oppBoard);

export default shipPosition;
