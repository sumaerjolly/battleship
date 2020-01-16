import gameBoard from './factories/gameBoard';
import player from './factories/player';

const start = (() => {
  const board = gameBoard();
  const humanUser = player('user');
  const computer = player('computer');
  const displayInfo = document.querySelector('.oppInfo');
  const myInfo = document.querySelector('.myInfo');
  let currPlayer = humanUser;
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
        computerPlay();
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
    currPlayer = computer;
    const myShips = document.querySelectorAll('.ships');
    console.log('I am in here');
    let randomPosition = computer.randomMove();

    const compAttack = board.receiveAttacks(board.myBoard, randomPosition);
    myShips.forEach(element => {
      const boardId = element.getAttribute('id');
      if (Number(boardId) === randomPosition) {
        console.log(boardId);
        console.log(randomPosition);
        if (compAttack) {
          element.innerHTML = compAttack;
          if (compAttack === 'x' && board.myBoard[randomPosition].isSunk()) {
            userCount += 1;
            myInfo.innerHTML = `${10 - userCount} computer ships left`;
          }
        }
      }
    });
    checkWinner(userCount, currPlayer);
    currPlayer = humanUser;
  };

  return { board, game };
})();

export default start;
