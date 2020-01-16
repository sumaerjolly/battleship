import gameBoard from './factories/gameBoard';
import player from './factories/player';

const start = (() => {
  const board = gameBoard();
  const user = player('user');
  const computer = player('computer');
  const displayInfo = document.querySelector('.oppInfo');
  const update = document.querySelector('.oppUpdate');
  const myUpdate = document.querySelector('.myUpdate');
  const myInfo = document.querySelector('.myInfo');
  let currPlayer = user;
  let gameStop = false;
  let userCount = 0;
  let computerCount = 0;

  const game = () => {
    const oppositionShips = document.querySelectorAll('.oppShips');
    oppositionShips.forEach(element => {
      const position = element.getAttribute('id');
      element.addEventListener('click', e => {
        e.preventDefault();
        if (!gameStop && element.innerHTML === '') {
        }
      });
    });
  };

  return { board };
})();

export default start;
