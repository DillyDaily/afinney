import React from 'react';
import { connect } from 'react-redux';

const OneProject = (props) => {
  console.log('props from One Project ', props)
    let { title, description, technologies, image, url } = props.project
  return (
    <div>
        <h1>Title: {title}</h1>
        <div>Description: {description}</div>
        <div>Technologies: {technologies}</div>
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, null) (OneProject)