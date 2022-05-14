import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';

export default function Intro() {
  return (
    <section className='intro'>
        <div className='intro-left'>
            <img src='welcome-01.png' alt='a laptop on a wooden table' />
        </div>
        <div className='intro-middle'>
            <h2>Modern Day Wizardry</h2>
            <LoremIpsum p={1} />
        </div>
        <div className='intro-right'>
        <img src='welcome-02.png' alt='two desktops and a laptop on a wooden table' />
        </div>
    </section>
  )
}
