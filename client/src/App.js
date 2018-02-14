import React, { Component } from 'react';
import './App.css';
// import Admin from './components/Admin';

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
              <Route exact path="/" component={ Projects }/>
              <Route exact path="/about" component={ AboutMe }/>
              {/* ADIMIN */}
              <Route exact path="/admin" component={ Admin }/>
              <Route exact path="/admin/messages" component={ Messages }/>
              <Route exact path="/admin/blog" component={ AdminAllPosts }/>
              <Route exact path="/admin/blog/new" component={ AddPost }/>
              <Route exact path="/admin/blog/edit/:id" component={ EditPost }/>
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

