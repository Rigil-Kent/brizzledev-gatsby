import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';


export default function Intro() {

  const data = useStaticQuery(graphql`
    query IntroInfo {
      contentfulSiteInfo {
        bio {
          bio
        }
        welcomeLeft {
          description
          url
        }
        welcomeRight {
          description
          url
        }
      }
    }
    `);

  return (
    <section className='intro'>
        <div className='intro-left'>
            <img src={ data.contentfulSiteInfo.welcomeLeft.url } alt={ data.contentfulSiteInfo.welcomeLeft.description } />
        </div>
        <div className='intro-middle'>
            <h2>Modern Day Wizardry</h2>
            <p>{ data.contentfulSiteInfo.bio.bio }</p>
        </div>
        <div className='intro-right'>
        <img src={ data.contentfulSiteInfo.welcomeRight.url } alt={ data.contentfulSiteInfo.welcomeRight.description } />
        </div>
    </section>
  )
}
