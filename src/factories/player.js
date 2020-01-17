const player = name => {
  let moves = [];
  let randomMove = () => {
    let newMove = Math.floor(Math.random() * 100);
    if (!moves.includes(newMove)) {
      moves.push(newMove);
      return newMove;
    } else {
      return randomMove();
    }
  };
  return { name, randomMove };
};

export default player;
