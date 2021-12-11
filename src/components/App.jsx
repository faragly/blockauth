import React, { Component } from 'react';
import Profile from './Profile';
import SignIn from './SignIn';
import { getUserData, userSession } from '../auth';


export default class App extends Component {
  state = {
    userData: null,
  };

  handleSignOut(e) {
    e.preventDefault();
    this.setState({ userData: null });
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      userSession.isUserSignedIn()
          ? <Profile handleSignOut={ this.handleSignOut } />
          : <SignIn />
    );
  }

  componentWillMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/');
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: getUserData() });
    }
  }
}
