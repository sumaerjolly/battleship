import player from '../factories/player';
const name = 'Human';
const newPlayer = player(name);

test('test for player name', () => {
  expect(newPlayer.name).toEqual(name);
});

test('gives a random number greater than or equal to 0', () => {
  expect(newPlayer.randomMove()).toBeGreaterThanOrEqual(0);
});

test('gives a random number less than 100', () => {
  expect(newPlayer.randomMove()).toBeLessThan(100);
});
