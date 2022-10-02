import React, { useContext, useState, useEffect } from 'react';
import { BetsDispatchContext } from '../helpers/BetsProvider';
import { toggleBetSection } from '../helpers/Helpers';

class Bubble {
  constructor(bubble) {
    this.id = '_id' + Math.random().toString(16).slice(2);
    this.bet = bubble.bet;
    this.secret = bubble.secret;
    this.size = bubble.size;
  }

  createBubbleDiv() {
    const sectionBubbles = document.getElementById('section-bubbles');
    const newBubble = <Bubble id={this.id} bet={this.bet} />;
    sectionBubbles.append(newBubble);
  }
}

const BetSection = () => {
  const [bet, setBet] = useState({});
  const _bet = new Bubble(bet);

  const updateBets = useContext(BetsDispatchContext);
  const bets = useContext(BetsDispatchContext);

  const handleSelect = (event) => {
    const target = event.target;
    if (target.name === 'bet')
      setBet(Object.assign(_bet, { bet: target.value }));
    else setBet(Object.assign(_bet, { secret: target.value }));
  };

  useEffect(() => {
    updateBubbleSize(bets);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    bet.createBubbleDiv();
    updateBets(bet);
    event.target.reset();
    toggleBetSection();
  };

  const updateBubbleSize = (bets) => {
    const summation = (total, bet) => {
      return total + Number(bet.bet);
    };

    const total = bets.reduce(summation, 0);

    bets = bets.map((bet) => {
      const size = `${Math.floor((bet.bet / total) * 100 + 80)}px`;
      const bubble = document.getElementById(bet.id);
      bubble.style.height = size;
      bubble.style.width = size;
      return bet;
    });

    console.log(bets);
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
