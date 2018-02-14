import React from 'react'

const OneProject = (props) => {
    let { title, description, technologies, image, url } = props.project
  return (
    <div>
        <h1>Title: {title}</h1>
        <div>Description: {description}</div>
        <div>Technologies: {technologies}</div>
    </div>
  )
}

export default OneProject