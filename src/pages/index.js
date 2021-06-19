import * as React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import IndexPageTempalte from '../templates/index-page'


const IndexPage = ({data}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { image, image_alt, title, subtitle } = frontmatter

  return(
    <Layout>
      <IndexPageTempalte
        image={image}
        image_alt={image_alt}
        title={title}
        subtitle={subtitle}
        content={html}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
