import React from 'react'
import { useStaticQuery, graphql } from "gatsby";



export default function Hero() {

    const data = useStaticQuery(graphql`
    query HeroInfo {
      contentfulSiteInfo {
        mainHeading
        tagLine
      }
    }
    `);

    

  return (
    <div id='home' className='hero'>
        <button className='menu-button' onClick={_ => {
            document.body.classList.toggle('nav-is-open')
            document.querySelector('.container-all').getElementsByClassName.transition = 'transform 250ms ease-in-out'
        }}>
            <svg
                className='hamburger'
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 30 17"
                xmlSpace="preserve"
                height="17"
                width="30"
                >
                <path d="M0 1h30v2H0zm0 6h30v2H0zm0 6h30v2H0z" className="st0"></path>
            </svg>
            <svg
            className='close'
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 30 17"
            viewBox="0 0 30 17"
            >
                <path
                    fill="#223843"
                    d="M16.2 8.5l5.8 5.8-1.2 1.2L15 9.7l-5.8 5.8L8 14.3l5.8-5.8L8 2.7l1.2-1.2L15 7.3l5.8-5.8L22 2.7z"
                ></path>
            </svg>
        </button>
        <h1>{ data.contentfulSiteInfo.mainHeading }<span className='spin'>{ data.contentfulSiteInfo.tagLine }</span></h1>
    </div>
  )
}
