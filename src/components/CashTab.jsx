import { CashtabBadge } from 'cashtab-components';

const CashTab = (props) => {
  const toSLPAddress = ' https://cashtab.com/#/wallet';
  return (
    <>
      <CashtabBadge
        to={toSLPAddress}
        amount={props.winnings}
        coinType='XEC'
        currency='USD'
      />
    </>
  );
};

export default CashTab;
