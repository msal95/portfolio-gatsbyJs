import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Portfolio({data}) {
  const Projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <>
      <Layout>
        <div className={styles.portfolio}>
          <h2>Portfolio</h2>
          <h3>Develop & Deploy</h3>
          <div className={styles.projects}>
            {
              Projects.map((project)=> (
                <Link to={"/projects/"+project.frontmatter.slug} key={project.id}>
                  <GatsbyImage alt={project.frontmatter.title} image={getImage(project.frontmatter.thumb)} />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </Link>
              ))
            }
          </div>
          <p>Contact at : {contact}</p>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
 
}
`
