import React, { Component } from 'react';
import './App.css';
import AllProjects from './components/user/AllProjects';
import AboutMe from './components/user/AboutMe';
import Login from './components/admin/Login';
import AdminAllProjects from './components/admin/AdminAllProjects';
import AdminOneProject from './components/admin/AdminOneProject';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getPosts } from './actions/posts.actions';

class App extends Component {
  componentDidMount() {
    // this.props.getPosts()
  }

  render() {
    return (
      <div className="App"> 
       
        <Router>
          <div>
            <Switch>
              {/* USERS */}
              <Route exact path="/" component={ AllProjects }/>
              <Route exact path="/about" component={ AboutMe }/>
              {/* ADIMIN */}
              <Route exact path="/admin" component={ Login }/>
              <Route exact path="/admin/projects" component={ AdminAllProjects }/>
              <Route exact path="/admin/projects/:id" component={ AdminOneProject }/>
            </Switch>
          </div>
        </Router>


      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // getMessages: bindActionCreators(getMessages, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);

