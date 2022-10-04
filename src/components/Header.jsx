import React from 'react';
import { WinningsContext } from '../helpers/WinningsProvider';
import logo from '../images/logo.svg';
import {
  toggleBubblesSection,
  toggleCashtabSection,
  toggleFooter,
} from '../helpers/Helpers';
const Header = () => {
  const winnings = React.useContext(WinningsContext).winnings;

  const handleClick = () => {
    toggleBubblesSection();
    toggleCashtabSection();
    toggleFooter();
  };
  return (
    <header className='header'>
      <img src={logo} alt='betbet logo' className='logo' />
      <div className='winnings__container winnings'>
        <div className='winnings__container--inner' onClick={handleClick}>
          {winnings} &nbsp; XEC
        </div>
      </div>
    </header>
  );
};

export default Header;
