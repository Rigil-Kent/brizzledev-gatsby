import React from 'react'
import { useStaticQuery, graphql } from "gatsby";



export default function Hero() {

    const data = useStaticQuery(graphql`
    query SiteInfo {
      contentfulSiteInfo {
        mainHeading
        tagLine
      }
    }
    `);

  return (
    <div className='hero'>
        <h1>{ data.contentfulSiteInfo.mainHeading }<span>{ data.contentfulSiteInfo.tagLine }</span></h1>
    </div>
  )
}
