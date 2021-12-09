import React, { Component } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { mediaBreakpointUpSm } from "styled-bootstrap-responsive-breakpoints";
import { Heading, Text, Button } from 'evergreen-ui';
import { Logo } from '../styled/Logo';
import theme from '../theme.js';
import { authenticate } from '../auth';

const SignInCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    min-width: 300px;
    box-shadow: 0 0 10px rgba(33,34,41,0.1);
    background-color: ${rgba('#fff', .5)};
    border-color: ${theme.colors.grays[2]};

    ${mediaBreakpointUpSm`
        border: 1px solid ${theme.colors.grays[3]};;
        width: 360px;
        padding: 30px 35px;
    `}
`;

const SignInCardLogo = styled(Logo)`
    height: 50px;
    margin-bottom: 30px;
`;

export default class SignIn extends Component {
    render() {
        return (
            <SignInCard>
                <SignInCardLogo alt="Blockstack Authenticator" />
                <Heading is="h2" size={600}>Blockstack Authenticator</Heading>
                <Text marginTop="default">Please sign in to continue</Text>
                <Button appearance="primary" height={40} marginTop="default" iconBefore="log-in" onClick={ () => authenticate() }>
                    Sigh In with Blockstack
                </Button>
            </SignInCard>
        );
    }
}
