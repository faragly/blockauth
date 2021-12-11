import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { Person } from '@stacks/profile';
import logo from './logo.svg';

// const appDomain = 'https://blockauth.js.org';
const appConfig = new AppConfig(['store_write', 'publish_data']/*, appDomain*/);

export const userSession = new UserSession({ appConfig });

export function authenticate() {
    showConnect({
        appDetails: {
            name: 'Stacks auth',
            icon: window.location.origin + logo
        },
        redirectTo: '/',
        onFinish: () => {
            window.location.reload();
        },
        userSession,
    });
}

export function getUserData() {
    return userSession.loadUserData();
}

export function getPerson() {
    return new Person(getUserData().profile);
}