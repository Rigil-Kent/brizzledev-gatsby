import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'

export default function Bio() {
  return (
    <section id='about' className='bio'>
        <img className='bio-image' src='john-portfolio.png' alt='john portfolio sillhouette shot' />
        <h1 className='bio-title'>Bryan Bailey</h1>
        <h2 className='bio-subtitle'>Fullstack Developer</h2>
        <div className='bio-text'>
            <LoremIpsum p={2} />
        </div>
    </section>
  )
}
