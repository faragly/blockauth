import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { UserSession, AppConfig } from 'blockstack';
import Profile from './Profile';
import Signin from './Signin';
import theme from './../theme';

const appConfig = new AppConfig();
const userSession = new UserSession({ appConfig: appConfig });

class App extends Component {
    handleSignIn(e) {
        e.preventDefault();
        userSession.redirectToSignIn();
    }

    handleSignOut(e) {
        e.preventDefault();
        userSession.signUserOut(window.location.origin);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
            {
                !userSession.isUserSignedIn() ?
                    <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
                    : <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />
            }
            </ThemeProvider>
        );
    }

    async waitSignIn() {
        if (userSession.isSignInPending()) {
            await userSession.handlePendingSignIn();
            window.location = window.location.origin;
        }
    }


    componentWillMount() {
        this.waitSignIn();
    }
}

export default App;