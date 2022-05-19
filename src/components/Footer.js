import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Footer() {
  function getSocialLinks(data) {
    data.map(link => (<a href={link.url} title={link.name} alt={link.name}><img className='footer-social-icon' src={link.icon.url} alt={link.name} /></a>))
  }

  const data = useStaticQuery(graphql`
  query Social {
    allContentfulSocialLinks {
      nodes {
        name
        icon {
          url
        }
        url
      }
    }
  }`)

  return (
    <footer>
      <p>Find me on social media.</p>
      <div className='footer-social-icons'>
        { data.
        allContentfulSocialLinks.
        nodes.
        map(link => (
              <a className='footer-social-icon' href={link.url} title={link.name} alt={link.name} target='_blank'><img src={link.icon.url} alt={link.name} /></a>
          )) 
        }
      </div>
      <p className='footer-copyright'>Copyright 2022. www.brizzle.dev</p>
    </footer>
  )
}
