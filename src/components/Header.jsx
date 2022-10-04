import React from 'react';
import { WinningsContext } from '../helpers/WinningsProvider';
import logo from '../images/logo.svg';

const Header = () => {
  const winnings = React.useContext(WinningsContext).winnings;

  const handleClick = () => {

  }
  
  return (
    <header className='header'>
      <img src={logo} alt='betbet logo' className='logo' />
      <div className='winnings__container'>
        <div className='winnings__container--inner' onClick={}>
          <span id='winnings'>{winnings}</span>
          <span>&nbsp; XEC</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
