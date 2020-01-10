import ship from '../factories/ship';

let ship4 = ship(4)

test ('ship create a ship with length equals to 4', () => {
    expect(ship4.length).toBe(4);
});

test ('ship create a ship with postion equals to []', () => {
    expect(ship4.position).toEqual([]);
});

test ('hit(num) push num to postion when hit(num) is called', () => {
    ship4.hit(2)
    expect(ship4.position).toEqual([2])
});

test ('the ship has not sunk?', () => {
    ship4.hit(3)
    expect(ship4.isSunk()).toBeFalsy()
});

test ('the ship has sunk?', () => {
    ship4.hit(1);
    ship4.hit(4);
    ship4.hit(5);
    expect(ship4.isSunk()).toBeTruthy()
});
