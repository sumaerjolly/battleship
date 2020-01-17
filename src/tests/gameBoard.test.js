import gameBoard from '../factories/gameBoard';
import ship from '../factories/ship';

describe('initialize gameBoard', () => {
  test('ship create a new board with length equals to 100', () => {
    expect(gameBoard().myBoard).toEqual(new Array(100));
  });
});

describe('it fills the board with a ship', () => {
  const ship3 = ship(3);
  const ship4 = ship(4);
  const gameBoard1 = gameBoard();

  describe('vertical position', () => {
    beforeAll(() => {
      gameBoard1.addMyShip(ship3, 5, 'v');
    });

    test('puts ship3 in the postion 5', () => {
      expect(gameBoard1.myBoard[5]).toBe(ship3);
    });

    test('puts ship3 vertical', () => {
      expect(gameBoard1.myBoard[5]).toBe(ship3);
      expect(gameBoard1.myBoard[15]).toBe(ship3);
      expect(gameBoard1.myBoard[25]).toBe(ship3);
    });
  });

  describe('horizontal position', () => {
    const gameBoard2 = gameBoard();

    beforeAll(() => {
      gameBoard2.addMyShip(ship4, 25, 'h');
    });

    test('puts ship3 in the postion 25', () => {
      expect(gameBoard2.myBoard[25]).toBe(ship4);
    });

    test('puts ship3 horizontal', () => {
      expect(gameBoard2.myBoard[25]).toBe(ship4);
      expect(gameBoard2.myBoard[26]).toBe(ship4);
      expect(gameBoard2.myBoard[27]).toBe(ship4);
    });
  });
});

describe('put ships in right places', () => {
  const gameBoard3 = gameBoard();
  const ship4 = ship(4);
  const ship3 = ship(3);
  const ship5 = ship(5);
  const ship2 = ship(2);
  beforeAll(() => {
    gameBoard3.addMyShip(ship3, 15, 'v');
    gameBoard3.addMyShip(ship4, 15, 'h');
    gameBoard3.addMyShip(ship5, 9, 'h');
    gameBoard3.addMyShip(ship2, 97, 'v');
  });
  test('cannot place two ships in same position', () => {
    expect(gameBoard3.myBoard[15]).toBe(ship3);
    expect(gameBoard3.myBoard).not.toContain(ship4);
  });
  test('cannot place ship in a small place', () => {
    expect(gameBoard3.myBoard).not.toContain(ship5);
    expect(gameBoard3.myBoard).not.toContain(ship2);
  });
});

describe('game board define if a ship attacked', () => {
  const gameBoard4 = gameBoard();
  const ship4 = ship(4);
  beforeAll(() => {
    gameBoard4.addMyShip(ship4, 15, 'h');
  });
  test('It returns hit when cordinate contains a ship', () => {
    expect(gameBoard4.receiveAttacks(gameBoard4.myBoard, 15)).toBe('hit');
  });

  test('It returns missed when cordinate does not contain a ship', () => {
    expect(gameBoard4.receiveAttacks(gameBoard4.myBoard, 19)).toBe('miss');
  });
  test('It returns missed when cordinate does not contain a ship', () => {
    expect(gameBoard4.receiveAttacks(gameBoard4.myBoard, 25)).toBe('miss');
  });
  test('It detects when cordinate does not contain a ship by changing value to "-"', () => {
    expect(gameBoard4.myBoard[25]).toBe('-');
  });
});
