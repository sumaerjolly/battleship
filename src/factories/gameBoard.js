import myShips from '../myShips';

const gameBoard = () => {
  let myBoard = new Array(100);
  let oppBoard = new Array(100);

  const checkPlace = (ship, position, orientation) => {
    if (orientation === 'h' && 10 - (position % 10) < ship.length) {
      return false;
    } else if (
      orientation === 'v' &&
      10 - Math.floor(position / 10) < ship.length
    ) {
      return false;
    } else {
      for (let i = 0; i < ship.length; i += 1) {
        if (orientation === 'v' && myBoard[position + 10 * i]) {
          return false;
        } else if (orientation === 'h' && myBoard[position + 1 * i]) {
          return false;
        }
      }
    }
    return true;
  };

  const checkOpponentPlace = (ship, position, orientation) => {
    if (orientation === 'h' && 10 - (position % 10) < ship.length) {
      return false;
    } else if (
      orientation === 'v' &&
      10 - Math.floor(position / 10) < ship.length
    ) {
      return false;
    } else {
      for (let i = 0; i < ship.length; i += 1) {
        if (orientation === 'v' && oppBoard[position + 10 * i]) {
          return false;
        } else if (orientation === 'h' && oppBoard[position + 1 * i]) {
          return false;
        }
      }
    }
    return true;
  };

  const addMyShip = (ship, position, orientation) => {
    if (checkPlace(ship, position, orientation)) {
      for (let i = 0; i < ship.length; i += 1) {
        if (orientation === 'v') {
          myBoard[position + 10 * i] = ship;
          myShips(position + 10 * i);
        }
        if (orientation === 'h') {
          myBoard[position + 1 * i] = ship;
          myShips(position + 1 * i);
        }
      }
    }
  };

  const addOpponentShip = (ship, position, orientation) => {
    if (checkOpponentPlace(ship, position, orientation)) {
      for (let i = 0; i < ship.length; i += 1) {
        if (orientation === 'v') {
          oppBoard[position + 10 * i] = ship;
        }
        if (orientation === 'h') {
          oppBoard[position + 1 * i] = ship;
        }
      }
    }
  };

  const receiveAttacks = (board, coordinate) => {
    if (!board[coordinate]) {
      board[coordinate] = '-';
      return false;
    } else if (board[coordinate] === 'x') {
      return false;
    } else if (board[coordinate] !== '-' && board[coordinate] !== 'x') {
      board[coordinate].hit(coordinate);
      board[coordinate] = 'x';
      return true;
    }
  };

  const allSunk = board => {
    return board.every(cordinate => {
      cordinate === undefined || cordinate === '-' || cordinate === 'x';
    });
  };
  const resetBoard = () => {
    myBoard = new Array(100);
    oppBoard = new Array(100);
  };

  return {
    addMyShip,
    addOpponentShip,
    receiveAttacks,
    myBoard,
    oppBoard,
    resetBoard,
    allSunk
  };
};

export default gameBoard;
