import React  from 'react';
import styled from 'styled-components';
import { Text, Pane, Heading, Button } from 'evergreen-ui';
import { authenticate } from '../auth';
import { Logo } from '../styled/Logo';

const SignInCardLogo = styled(Logo)`
    height: 10vmin;
    margin-bottom: 1.25rem;
`;

export default function SignIn() {
    return (
        <Pane clearfix>
            <Pane
                elevation={1}
                float="left"
                width={360}
                margin={24}
                padding={24}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                backgroundColor="white"
            >
                <SignInCardLogo alt="Stacks Authenticator" />
                <Heading is="h1" size={800}>Stacks Authenticator</Heading>
                <Text marginTop={16}>Please sign in to continue</Text>
                <Button appearance="primary" height={40} marginTop={16} iconBefore="log-in" onClick={ () => authenticate() }>
                    Sigh In with Hiro wallet
                </Button>
            </Pane>
        </Pane>
    )
}
