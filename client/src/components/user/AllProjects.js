import React, { Component } from 'react'
import OneProject from './OneProject';

class AllProjects extends Component {
  render () {
    let theProjects = this.props.projects 
    // .map(project => <OneProject key={project.id} project={project} />)

    return (
      <div>
      <h1>ALL Projects</h1>
      <h1>Title: </h1>
        <div>Description: {} </div>
        <div>Technologies: </div>
        <div>image: </div>
        <div>url: </div>

      </div>
    )
  }
}

export default AllProjects