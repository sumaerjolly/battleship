// import gameBoard from './factories/gameBoard';
import ship from './factories/ship';
import start from './dom';
const shipPosition = (() => {
  const newBoard = start.board;
  const myFleet = () => {
    newBoard.addMyShip(ship(4), 45, 'v');
    newBoard.addMyShip(ship(3), 50, 'v');
    newBoard.addMyShip(ship(3), 14, 'h');
    newBoard.addMyShip(ship(2), 32, 'v');
    newBoard.addMyShip(ship(2), 38, 'v');
    newBoard.addMyShip(ship(2), 68, 'h');
    newBoard.addMyShip(ship(1), 1, 'v');
    newBoard.addMyShip(ship(1), 9, 'v');
    newBoard.addMyShip(ship(1), 89, 'v');
    newBoard.addMyShip(ship(1), 97, 'v');
  };
  const opponentFleet = () => {
    newBoard.addOpponentShip(ship(4), 12, 'h');
    newBoard.addOpponentShip(ship(3), 70, 'v');
    newBoard.addOpponentShip(ship(3), 82, 'h');
    newBoard.addOpponentShip(ship(2), 43, 'v');
    newBoard.addOpponentShip(ship(2), 28, 'v');
    newBoard.addOpponentShip(ship(2), 68, 'h');
    newBoard.addOpponentShip(ship(1), 35, 'v');
    newBoard.addOpponentShip(ship(1), 7, 'v');
    newBoard.addOpponentShip(ship(1), 75, 'v');
    newBoard.addOpponentShip(ship(1), 97, 'v');
  };

  console.log(newBoard.myBoard);
  console.log(newBoard.oppBoard);

  return { myFleet, opponentFleet };
})();

export default shipPosition;
