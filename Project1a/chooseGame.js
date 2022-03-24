const chooseGame = (game) => {
  if (game === '1') {
    return `You chose Game 1. `;
  } else if (game === '2') {
    return `You chose Game 2.`;
  } else if (game === '3') {
    return `Wouldn't you prefer a nice game of chess? ♟️`;
  }
};

module.exports = {
  chooseGame,
};
