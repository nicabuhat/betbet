import React, { useContext } from 'react';
import { WinningsContext } from '../helpers/WinningsProvider';

const ResultListSection = () => {
  const transactions = useContext(WinningsContext).transactions;

  return (
    <section id='result-list-section'>
      {transactions.length > 0 && (
        <div className='transactions'>
          <h2>User</h2>
          <h2>Bet</h2>
          <h2>Result</h2>
          <h2>Balance</h2>

          {transactions.map((transaction) => {
            return (
              <>
                {transaction.transaction.user === 0 ? (
                  <span className='user--self'>self</span>
                ) : (
                  <span className='user--random'>
                    {transaction.transaction.user}
                  </span>
                )}
                <span>{transaction.transaction.bet}</span>
                <span>{transaction.result > 0 ? 'won' : 'lose'}</span>
                {transaction.transaction.user === 0 ? (
                  <span>{transaction.balance}</span>
                ) : (
                  <span>{transaction.transaction.bet}</span>
                )}
              </>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ResultListSection;
