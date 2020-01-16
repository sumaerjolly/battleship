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
          const attack = board.receiveAttacks(board.oppBoard, position);
          if (attack) {
            element.innerHTML = attack;
            if (attack === 'x' && board.oppBoard[position].isSunk()) {
              computerCount += 1;
              displayInfo.innerHTML = `${10 -
                computerCount} computer ships left`;
            }
          }
        }
        checkWinner(computerCount, currPlayer);
        currPlayer = computer;
      });
    });
  };

  const checkWinner = (count, user) => {
    if (10 - count <= 0 && !gameStop) {
      alert(`${user.name} is the winner`);
      gameStop = true;
    }
  };

  const computerPlay = () => {
    const myShips = document.querySelectorAll('.ships');
    let moves = [];
    myShips.forEach(element => {
      if (!gameStop && element.innerHTML === '') {
        let compMove = computer.randomMove();
        if (!moves.includes(compMove)) {
        }
        moves.push(compMove);
        const compAttack = board.receiveAttacks(board.myBoard);
      }
    });
  };

  return { board, game };
})();

export default start;
