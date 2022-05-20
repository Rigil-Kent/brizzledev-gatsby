import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';


export default function Intro() {

  const data = useStaticQuery(graphql`
    query IntroInfo {
      contentfulSiteInfo {
        bio {
          bio
        }
      }
    }
    `);

  return (
    <section className='intro'>
        <div className='intro-left'>
            <img src='welcome-01.png' alt='a laptop on a wooden table' />
        </div>
        <div className='intro-middle'>
            <h2>Modern Day Wizardry</h2>
            <p>{ data.contentfulSiteInfo.bio.bio }</p>
        </div>
        <div className='intro-right'>
        <img src='welcome-02.png' alt='two desktops and a laptop on a wooden table' />
        </div>
    </section>
  )
}
