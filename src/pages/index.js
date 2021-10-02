import React from "react"

import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  const banner = data.file.childImageSharp.fluid
  // const {title, description } = data?.site?.siteMetadata
  return (
    <>
      <Layout>
        <section className={styles.header}>
          <div>
            <h2>Design</h2>
            <h3>Develop & Deploy</h3>
            <p>UX designer and Web developers based in Pakistan</p>
            <Link to="/projects" className={styles.btn}>My Portfolio</Link>
          </div>
          <StaticImage src="../images/banner.png" alt="A dinosaur" />
          {/*<img src='/banner.png' style={{maxWidth: '100%'}} alt="Banner Image" />*/}
          {/*<p>{title}-{description}</p>*/}
        </section>
      </Layout>
    </>
  )
}

// export const query = graphql `
//   query SiteContent {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        src
        srcSet
        sizes
      }
    }
  }
  }
`
