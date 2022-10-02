import React from 'react';

const Bubble = (props) => {
  return (
    <div className='bubble' id={props.id}>
      {props.bet}
    </div>
  );
};

export default Bubble;
