import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
    ${reboot({
        fontFamilyBase: theme.fontFamilyBase,
        fontSizeBase: theme.fontSizeBase,
        bodyBg: theme.colors.grays[0]
    })}

    button:focus {
        outline: none;
    }

    body {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
    }

    #root {
        flex: 1 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

ReactDOM.render((
    <React.Fragment>
        <GlobalStyle />
        <App />
    </React.Fragment>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
