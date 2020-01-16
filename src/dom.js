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
          if (attack === 'hit') {
            element.innerHTML = '&#10042';
            element.classList.add('test');
            if (board.oppBoard[position].isSunk()) {
              computerCount += 1;
              displayInfo.innerHTML = `${10 -
                computerCount} computer ships left`;
            }
          } else if (attack === 'miss') {
            element.innerHTML = '&#128542';
          }
          // if (attack) {
          //   element.innerHTML = attack;
          //   if (attack === 'x' && board.oppBoard[position].isSunk()) {
          //     computerCount += 1;
          //     displayInfo.innerHTML = `${10 -
          //       computerCount} computer ships left`;
          //   }
          // }
          checkWinner(computerCount, currPlayer);
          computerPlay();
        }
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
    let randomPosition = computer.randomMove();

    const compAttack = board.receiveAttacks(board.myBoard, randomPosition);
    myShips.forEach(element => {
      const boardId = element.getAttribute('id');
      if (Number(boardId) === randomPosition) {
        if (compAttack === 'hit') {
          element.innerHTML = '&#10042';
          element.style.backgroundColor = 'red';
          element.style.border = '1px solid red';
          if (board.myBoard[randomPosition].isSunk()) {
            userCount += 1;
            myInfo.innerHTML = `${10 - userCount} user ships left`;
          }
        } else if (compAttack === 'miss') {
          element.innerHTML = '&#128542';
        }
        // if (compAttack) {
        //   element.innerHTML = compAttack;
        //   if (compAttack === 'x' && board.myBoard[randomPosition].isSunk()) {
        //     userCount += 1;
        //     myInfo.innerHTML = `${10 - userCount} computer ships left`;
        //   }
        // }
      }
    });
    checkWinner(userCount, currPlayer);
    currPlayer = humanUser;
  };
  const resetButton = () => {
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
      window.location.reload();
    });
  };

  return { board, game, resetButton };
})();

export default start;
