const remove = (queuedMove) => {
  const index = queuedMoves.findIndex(move => move.id === queuedMove.id);
  if (index !== -1) {
    queuedMoves.splice(index, 1);
  }
};
