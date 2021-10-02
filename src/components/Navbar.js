import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Navbar() {

  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {title} = data.site.siteMetadata

  return(
    <>
      <nav>
        <h2>{title}</h2>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </>
  )
}
