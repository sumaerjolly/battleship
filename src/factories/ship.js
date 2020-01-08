const ship = (length) => {
  const position = [];

  const hit = (num) => {
    if (!position.includes(num) && position.length < length ) position.push(num);
  }
  const isSunk = () => {
    return position.length === length ? true : false;
  }

  return {length, position, hit, isSunk}
}

export default ship;