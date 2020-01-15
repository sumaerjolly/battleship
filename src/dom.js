import gameBoard from './factories/gameBoard';
import player from './factories/player';

const start = (() => {
  const board = gameBoard();
  const user = player('user');
  const computer = player('computer');
  let currPlayer = user;

  return { board };
})();

export default start;
