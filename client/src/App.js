import React, { Component } from 'react';
import './App.css';
import AllProjects from './components/user/AllProjects';
import OneProject from './components/user/OneProject';
import Contact from './components/user/Contact';
import Login from './components/admin/Login';
import AdminAllProjects from './components/admin/AdminAllProjects';
import AdminOneProject from './components/admin/AdminOneProject';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjects } from './actions/projects.actions';

class App extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    return (
      <div className="App"> 
       
        <Router>
          <div>
            <Switch>
              {/* USERS */}
              <Route exact path="/projects" component={ AllProjects }/>
              {/* <Route exact path="/project/:id" component={ OneProject }/> */}
              <Route exact path="/contact" component={ Contact }/>
              {/* ADIMIN */}
              {/* <Route exact path="/admin" component={ Login }/>
              <Route exact path="/admin/projects" component={ AdminAllProjects }/>
              <Route exact path="/admin/project/:id" component={ AdminOneProject }/> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProjects: bindActionCreators(getProjects, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);

