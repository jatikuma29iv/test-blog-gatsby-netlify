import * as React from "react"
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({data}) => {
  const { title, content, subtitle } = data;

  return (
    <section>
      <StaticImage
        alt='someday i will...'
        src={content}
      />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

const Index = () => {
  const data={title: "jatin", content: 'images/autobahn.png', subtitle: "let see"}
  
  return (
    <index>
      <IndexPage data={data} />
    </index>
  )
}

export default Index
