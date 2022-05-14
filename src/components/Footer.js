import React from 'react'

export default function Footer() {
  return (
    <footer>
      <p>Find me on social media.</p>
      <div className='footer-social-icons'>
        <img className='contact-social-icon' src='twitter.svg' alt='twitter' />
        <img className='contact-social-icon' src='instagram.svg' alt='isntagram' />
        <img className='contact-social-icon' src='github.svg' alt='github' />
      </div>
      <p className='footer-copyright'>Copyright 2022. www.brizzle.dev</p>
    </footer>
  )
}
