import React from 'react'




export default function SlideNav() {

  return (
    <nav onClick={_ => {
        document.querySelector('.container-all').style.transition = '0ms'
        document.body.classList.toggle('nav-is-open')
    }}>
        <ul>
            <li><a href='#home'>home</a></li>
            <li><a href='#about'>about</a></li>
            <li><a href='#portfolio'>portfolio</a></li>
            <li><a href='#contact'>contact</a></li>
        </ul>
    </nav>
  )
}
