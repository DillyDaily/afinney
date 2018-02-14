import React from 'react';
import { connect } from 'react-redux';

const OneProject = (props) => {
  let { id, title, description, technologies, image, url } = props.project
  return (
    <div>
        <h1>Title: {title}</h1>
        <div>Description: {description}</div>
        <div>Technologies: {technologies}</div>
        <div>image: {image}</div>
        <div>url: {url}</div>
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, null)(OneProject)