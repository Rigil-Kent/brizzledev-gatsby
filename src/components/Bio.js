import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'

export default function Bio() {

  const data = useStaticQuery(graphql`
    query BioInfo {
      contentfulSiteInfo {
        mainHeading
        tagLine
        bio {
          bio
        }
      }
    }
    `);

  const getData = (data) => {
    if (data.contentfulSiteInfo.bio.bio === '') return <LoremIpsum p={2} />

    return data.contentfulSiteInfo.bio.bio
  }


  return (
    <section id='about' className='bio'>
        <img className='bio-image' src='john-portfolio.png' alt='john portfolio sillhouette shot' />
        <h1 className='bio-title'>Bryan Bailey</h1>
        <h2 className='bio-subtitle'>Fullstack Developer</h2>
        <div className='bio-text'>
            {getData(data)}
        </div>
    </section>
  )
}
