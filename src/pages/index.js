import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle='Welcome to Home page!'>
      <p>lets try!!!!!!!!!!!!!!!!!!!!!!!!!</p>

      <StaticImage
        alt='someday i will...'
        src='../images/autobahn.png'
      />
    </Layout>
  )
}

export default IndexPage
