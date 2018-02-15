import React from 'react';
import { connect } from 'react-redux';

const OneProject = (props) => {
  let { title, description, technologies, image, url } = props.project
  return (
    <div>
        <h1>Title: </h1>
        <div>Description: </div>
        <div>Technologies: </div>
        <div>image: </div>
        <div>url: </div>
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, null)(OneProject)