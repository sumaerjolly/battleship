const player = name => {
  const randomMove = () => {
    return Math.floor(Math.random() * 100);
  };

  return { name, randomMove };
};
export default player;
