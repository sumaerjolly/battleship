const ship = (length) => {
  const position = [];

  const hit = (num) => {
    if (!position.includes(num) && position.length < length) position.push(num);
  };
  const isSunk = () => position.length === length;
  return {
    length, position, hit, isSunk,
  };
};

export default ship;
