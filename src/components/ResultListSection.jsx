import React, { useContext } from 'react';
import { WinningsContext } from '../helpers/WinningsProvider';

const ResultListSection = () => {
  const transactions = useContext(WinningsContext).transactions;

  return (
    <section id='result-list-section'>
      {transactions.length > 0 && (
        <div className='transactions'>
          <h2>Bet</h2>
          <h2>Result</h2>
          <h2>Balance</h2>

          {transactions.map((transaction) => {
            return (
              <>
                <span>{transaction.transaction.bet}</span>
                <span>{transaction.result}</span>
                <span>{transaction.balance}</span>
              </>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ResultListSection;
