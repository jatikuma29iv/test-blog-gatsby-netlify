import * as React from "react"
import IndexPageTempalte from '../../templates/index-page'


const IndexPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTempalte
        image={data.image}
        image_alt={data.image_alt}
        title={data.title}
        subtitle={data.subtitle}
        content={widgetFor['body']}
      />
    )
  }
  else {
    return <div>Loading...</div>
  }
}


export default IndexPagePreview
