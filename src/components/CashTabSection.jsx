import React from 'react';
import { WinningsContext } from '../helpers/WinningsProvider';
import CashTab from './CashTab';

const CashTabSection = () => {
  const winnings = React.useContext(WinningsContext).winnings;

  return (
    <section id='cashtab-section'>
      <CashTab winnings={winnings} />
    </section>
  );
};

export default CashTabSection;
