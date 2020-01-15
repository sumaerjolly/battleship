import gameBoard from './factories/gameBoard';
import player from './factories/player';

const start = (() => {
  const board = gameBoard();
  const user = player('user');
  const computer = player('computer');
  let currPlayer = user;
  let gameStop = false;
  let userCount = 0;
  let computerCount = 0;

  const game = () => {};

  return { board };
})();

export default start;
