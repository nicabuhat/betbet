export const toggleBetSection = () => {
  const betSection = document.getElementById('section-form');
  betSection.style.display =
    getComputedStyle(betSection, null).display === 'flex' ? 'none' : 'flex';
};

export const updateBubbleSize = (Bubble, bets) => {
  console.log(bets);
  const summation = (total, bet) => {
    return total + Number(bet.bet);
  };

  const total = bets.reduce(summation, 0);

  bets = bets.map((bet) => {
    const size = `${Math.floor((bet.bet / total) * 100 + 80)}px`;
    const bubble = document.getElementById(bet.id);
    bubble.style.height = size;
    bubble.style.width = size;
    const newBubble = new Bubble(bet);
    newBubble.size = size;
    return newBubble;
  });
};
