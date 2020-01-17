const player = (name) => {
  const moves = [];
  const randomMove = () => {
    const newMove = Math.floor(Math.random() * 100);
    if (!moves.includes(newMove)) {
      moves.push(newMove);
      return newMove;
    } 
    return randomMove();
  };
  return { name, randomMove };
};

export default player;
