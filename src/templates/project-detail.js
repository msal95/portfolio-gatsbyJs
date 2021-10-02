import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import * as styles from '../styles/projects.module.css'
import Layout from "../components/Layout"

export default function ProjectDetail({data}){
  console.log(data, 'data')
  const {html} = data.markdownRemark
  const {title, stack} = data.markdownRemark.frontmatter
  const  image  = getImage(data.markdownRemark.frontmatter.featuredImg)
  console.log(getImage(data.markdownRemark.frontmatter.featuredImg), 'Image')
  return(
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <h3>image tag</h3>
          <GatsbyImage alt={title} image={getImage(data.markdownRemark.frontmatter.featuredImg)} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
  )
}

export const query = graphql `
  query ProjectDetail($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      stack
      title
      featuredImg {
        childrenImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    html
  }
}
`
