import React, { useContext } from 'react';
import {
  toggleChallengeSection,
  toggleBubblesSection,
} from '../helpers/Helpers';
import { BetsDispatchContext } from '../helpers/BetsProvider';

const Bubble = (props) => {
  const { getBubbleClicked } = useContext(BetsDispatchContext);

  const handleClick = () => {
    getBubbleClicked(props.bet);
    toggleChallengeSection();
    toggleBubblesSection();
  };

  return (
    <div
      className='bubble'
      id={props.bet.id}
      key={props.bet.id}
      onClick={handleClick}
    >
      {props.bet.bet}
    </div>
  );
};

export default Bubble;
