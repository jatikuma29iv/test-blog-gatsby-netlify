import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"

const IndexPageTempalte = ({
  image,
  image_alt,
  title,
  subtitle,
  content,
}) => {
  return (
    <section>
      <img
        alt={image_alt}
        src={image}
      />
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  )
}

export default IndexPageTempalte
