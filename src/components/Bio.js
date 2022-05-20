import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'

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
        avatar {
          url
          description
        }
      }
    }
    `);


  return (
    <section id='about' className='bio'>
        <img className='bio-image' src={data.contentfulSiteInfo.avatar.url} alt={data.contentfulSiteInfo.avatar.description} title={data.contentfulSiteInfo.avatar.description}/>
        <h1 className='bio-title'>{data.contentfulSiteInfo.mainHeading}</h1>
        <h2 className='bio-subtitle'>{data.contentfulSiteInfo.tagLine}</h2>
        <div className='bio-text' dangerouslySetInnerHTML={ {__html: data.contentfulSiteInfo.fullbio.childMarkdownRemark.html} }></div>
    </section>
  )
}
