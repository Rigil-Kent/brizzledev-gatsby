import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'

export default function Bio() {

  const data = useStaticQuery(graphql`
    query BioInfo {
      contentfulSiteInfo {
        mainHeading
        tagLine
        fullbio {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    `);


  return (
    <section id='about' className='bio'>
        <img className='bio-image' src='john-portfolio.png' alt='john portfolio sillhouette shot' />
        <h1 className='bio-title'>{data.contentfulSiteInfo.mainHeading}</h1>
        <h2 className='bio-subtitle'>{data.contentfulSiteInfo.tagLine}</h2>
        <div className='bio-text' dangerouslySetInnerHTML={ {__html: data.contentfulSiteInfo.fullbio.childMarkdownRemark.html} }></div>
    </section>
  )
}
