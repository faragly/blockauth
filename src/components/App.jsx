import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Profile from './Profile';
import SignIn from './SignIn';
import theme from './../theme';
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
            <ThemeProvider theme={theme}>
                {
                    !userSession.isUserSignedIn() ?
                        <SignIn />
                        : <Profile handleSignOut={ this.handleSignOut } />
                }
            </ThemeProvider>
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
