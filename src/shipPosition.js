import gameBoard from './factories/gameBoard';
import ship from './factories/ship';

const shipPosition = (() => {
  const myFleet = () => {
    gameBoard.addMyShip(ship(4), 45, 'vertical');
    gameBoard.addMyShip(ship(3), 50, 'vertical');
    gameBoard.addMyShip(ship(3), 14, 'horizontal');
    gameBoard.addMyShip(ship(2), 32, 'vertical');
    gameBoard.addMyShip(ship(2), 38, 'vertical');
    gameBoard.addMyShip(ship(2), 68, 'horizontal');
    gameBoard.addMyShip(ship(1), 1, 'vertical');
    gameBoard.addMyShip(ship(1), 9, 'vertical');
    gameBoard.addMyShip(ship(1), 89, 'vertical');
    gameBoard.addMyShip(ship(1), 97, 'vertical');
  };
  const opponentFleet = () => {
    gameBoard.addOpponentShip(ship(4), 12, 'horizontal');
    gameBoard.addOpponentShip(ship(3), 70, 'vertical');
    gameBoard.addOpponentShip(ship(3), 82, 'horizontal');
    gameBoard.addOpponentShip(ship(2), 43, 'vertical');
    gameBoard.addOpponentShip(ship(2), 28, 'vertical');
    gameBoard.addOpponentShip(ship(2), 68, 'horizontal');
    gameBoard.addOpponentShip(ship(1), 35, 'vertical');
    gameBoard.addOpponentShip(ship(1), 7, 'vertical');
    gameBoard.addOpponentShip(ship(1), 75, 'vertical');
    gameBoard.addOpponentShip(ship(1), 97, 'vertical');
  };

  return { myFleet, opponentFleet };
})();

export default { shipPosition };
