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
export const toggleCashtabSection = () => {
  const cashtabSection = document.getElementById('cashtab-section');
  cashtabSection.style.display =
    getComputedStyle(cashtabSection, null).display === 'flex' ? 'none' : 'flex';
};
export const toggleFooter = () => {
  const footer = document.getElementById('footer');
  footer.style.display =
    getComputedStyle(footer, null).display === 'flex' ? 'none' : 'flex';
};

// export const generateRandomBubbles = (randomBubble) => {
//   let stopAt = 20; // for testing, setting a maximum of 15 iterations
//   let maxRandomDelay = 10000; // max 1 second delay for testing
//   let randomTime = Math.floor(Math.random() * maxRandomDelay);

//   const delay = async (ms) =>
//     new Promise((res) =>
//       setTimeout(() => {
//         res(ms);
//       }, ms),
//     );

//   const myTimer = () => {
//     delay(randomTime)
//       .then((r) => {
//         updateBets(randomBubble());
//         console.log(r);
//       })
//       .then(() => {
//         if (stopAt-- > 0) myTimer();
//       });
//   };

//   return myTimer();
// };
