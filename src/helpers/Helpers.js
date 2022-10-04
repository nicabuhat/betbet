export const toggleBetSection = () => {
  const betSection = document.getElementById('section-form');
  betSection.style.display =
    getComputedStyle(betSection, null).display === 'flex' ? 'none' : 'flex';
};

export const toggleChallengeSection = () => {
  const challengeSection = document.getElementById('section-challenge');
  challengeSection.style.display =
    getComputedStyle(challengeSection, null).display === 'flex'
      ? 'none'
      : 'flex';
};
export const toggleBubblesSection = () => {
  const bubblesSection = document.getElementById('section-bubbles');
  bubblesSection.style.display =
    getComputedStyle(bubblesSection, null).display === 'flex' ? 'none' : 'flex';
};
export const toggleChallengeResultSection = () => {
  const challengeResultSection = document.getElementById(
    'section-challenge-result',
  );
  challengeResultSection.style.display =
    getComputedStyle(challengeResultSection, null).display === 'flex'
      ? 'none'
      : 'flex';
};
