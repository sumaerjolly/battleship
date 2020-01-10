const gameBoard = (() => {
  let myBoard = new Array(100);
  let oppBoard = new Array(100);

  const checkPlace = (ship, position, orientation) => {
    if (orientation === 'h' && 10 - (position % 10) < ship.length ) {
      return false;
    } else if (orientation === 'v' && (10 - Math.floor(position / 10) < ship.length)) { 
      return false;
    } else {
      for (let i = 0; i < ship.length; i += 1) {
        if(orientation === 'v' && myBoard[position + 10 * i]){
          return false
        } else if (orientation === 'h' && myBoard[position + 1 * i]){
          return false
        }
      }
    }
    return true;
  }
 
  const addMyShip = (ship, position, orientation) => {
    if (checkPlace(ship, position, orientation)){
      for (let i = 0; i < ship.length; i += 1) {
        if (orientation === 'v') {
          myBoard[position + 10 * i] = ship;
        }
        if (orientation === 'h') {
          myBoard[position + 1 * i] = ship;
        }
      }
    }
  };
  
	const addOpponentShip = (ship, position, orientation) => {
		if (checkPlace(ship, position, orientation)){
      for (let i = 0; i < ship.length; i += 1) {
        if (orientation === 'v') {
          myBoard[position + 10 * i] = ship;
        }
        if (orientation === 'h') {
          myBoard[position + 1 * i] = ship;
        }
      }
    }
  };
  return { addMyShip, addOpponentShip, myBoard, oppBoard }
});

export default gameBoard;