import React, { useContext, useState } from 'react';
import { BetsContext, BetsDispatchContext } from '../helpers/BetsProvider';
import { toggleBetSection } from '../helpers/Helpers';

const BetSection = () => {
  const [bet, setBet] = useState({});

  const updateBets = useContext(BetsDispatchContext).updateBets;
  const bets = useContext(BetsContext).bets;

  const handleSelect = (event) => {
    const target = event.target;
    if (target.name === 'bet')
      setBet(Object.assign(bet, { ...bet, bet: Number(target.value) }));
    else setBet(Object.assign(bet, { ...bet, secret: Number(target.value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBets({ ...bet, user: 1 });
    toggleBetSection();
    event.target.reset();
  };

  return (
    <section id='section-form'>
      <form className='form' id='form-bet' onSubmit={handleSubmit}>
        <div className='form--input'>
          <div className='form--group form-group-bet'>
            <h2 className='subheading' htmlFor='bet'>
              bet
            </h2>
            <div className='bet-rows'>
              <div className='bet-group'>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='100'
                    onChange={handleSelect}
                    required
                  />
                  <span>100</span>
                </label>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='200'
                    onChange={handleSelect}
                  />
                  <span>200</span>
                </label>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='300'
                    onChange={handleSelect}
                  />
                  <span>300</span>
                </label>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='400'
                    onChange={handleSelect}
                  />
                  <span>400</span>
                </label>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='500'
                    onChange={handleSelect}
                  />
                  <span>500</span>
                </label>
              </div>
              <div className='bet-group'>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='600'
                    onChange={handleSelect}
                  />
                  <span>600</span>
                </label>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='700'
                    onChange={handleSelect}
                  />
                  <span>700</span>
                </label>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='800'
                    onChange={handleSelect}
                  />
                  <span>800</span>
                </label>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='900'
                    onChange={handleSelect}
                  />
                  <span>900</span>
                </label>
                <label className='label label--bet'>
                  <input
                    type='radio'
                    name='bet'
                    className='betInput'
                    value='1000'
                    onChange={handleSelect}
                  />
                  <span>1000</span>
                </label>
              </div>
            </div>
          </div>
          <div className='form--group form--group-secret'>
            <h2 className='subheading'>secret</h2>
            <label className='label label--secret'>
              <input
                type='radio'
                name='secret'
                className='secretInput'
                value='0'
                onChange={handleSelect}
                required
              />
              <span>0</span>
            </label>
            <label className='label label--secret'>
              <input
                type='radio'
                name='secret'
                className='secretInput'
                value='1'
                onChange={handleSelect}
              />
              <span>1</span>
            </label>
          </div>
        </div>
        <input
          className='btn'
          id='btn-submit'
          type='submit'
          value='place bet'
        />
      </form>
    </section>
  );
};

export default BetSection;
