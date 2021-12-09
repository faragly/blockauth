import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';
import { mediaBreakpointUpLg } from 'styled-bootstrap-responsive-breakpoints';
import { Avatar, Heading, Icon, Link, Menu, Pane, Popover, Position, SearchInput, Spinner, Text } from 'evergreen-ui';
import CardList from './CardList';
import { Iconbar } from '../styled/Iconbar';
import { ContentWrapper } from '../styled/ContentWrapper';
import { Header } from '../styled/Header';
import { Logo } from '../styled/Logo';
import theme from '../theme';
import { getPerson, getUserData, userSession } from '../auth';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

const IconbarLogo = styled(Logo)`
    height: 40px;margin-bottom: 15px;
`;

const IconbarNav = styled.nav`
    flex-direction: column;
    margin-top: 15px;
`;

const IconbarLink = styled.a`
    position: relative;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &, &:hover { color: #494c57; }
    &.active { color: ${theme.colors.primary}; }
    & + & { margin-top: 10px; }
`;

const Footer = styled.footer`
    display: none;

    ${mediaBreakpointUpLg`
        display: flex;
        height: 40px;
        border-top: 1px solid #ced4da;
        padding: 0 15px;
        align-items: center;
        justify-content: space-between;
    `}
`;

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {
                name() {
                    return 'Anonymous';
                },
                avatarUrl() {
                    return avatarFallbackImage;
                },
            },
            username: "",
            filter: ''
        };
    }

    render() {
        const { handleSignOut } = this.props;
        const { person, username, filter } = this.state;

        return (
            !userSession.isSignInPending() ?
            <BrowserRouter>
                <Iconbar>
                    <NavLink to="/">
                        <IconbarLogo alt="Blockstack Authenticator" />
                    </NavLink>
                    <IconbarNav>
                        <IconbarLink as={ NavLink } to="/" exact>
                            <Icon icon="refresh" />
                        </IconbarLink>
                        {/* <IconbarLink as={ NavLink } to="/secrets/">
                            <Icon icon="list" />
                        </IconbarLink> */}
                    </IconbarNav>
                </Iconbar>
                <ContentWrapper>
                    <Header>
                        <SearchInput
                            placeholder="Filter cards..."
                            width="100%"
                            height={40}
                            marginRight={15}
                            onChange={e => this.setState({ filter: e.target.value })}
                            value={this.state.filter}
                        />
                        <Popover
                            content={() => (
                                <Pane position={Position.BOTTOM_RIGHT} minWidth={240}>
                                    <Pane
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        flexDirection="column"
                                        border="none"
                                        marginTop={15}
                                        marginBottom={15}
                                        >
                                        <Avatar
                                            src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage }
                                            name={ person.name() ? person.name() : 'Nameless Person' }
                                            size={80}
                                        />
                                        <Heading is="h3" marginTop={15}>{ person.name() ? person.name() : 'Nameless Person' }</Heading>
                                        <Text size={300}>{ username }</Text>
                                    </Pane>
                                    <Menu>
                                        {/* <Menu.Group>
                                            <Menu.Item icon="user">Profile</Menu.Item>
                                        </Menu.Group> */}
                                        <Menu.Divider />
                                        <Menu.Group>
                                            <Menu.Item icon="log-out" onSelect={ handleSignOut.bind(this) }>Sign out</Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                </Pane>
                            )}
                            >
                            <Avatar
                                src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage }
                                name={ person.name() ? person.name() : 'Nameless Person' }
                                size={40}
                                />
                        </Popover>
                    </Header>
                    <Pane flexGrow={1} padding={15} display="flex">
                        <Route path="/" exact render={ (props) => <CardList {...props} filter={filter} /> } />
                        {/* <Route path="/secrets/" render={ (props) => <SecretsTable {...props} userSession={userSession} /> } /> */}
                    </Pane>
                    <Footer>
                        <Text size={300}>&copy; 2019 Khalik Faradzhli</Text>
                        <Text size={300}>Designed by: <Link size={300} href="https://evergreen.segment.com/">Evergreen React UI Framework</Link></Text>
                    </Footer>
                </ContentWrapper>
            </BrowserRouter> : <Spinner />
        );
    }

    componentWillMount() {
        this.setState({
            person: getPerson(),
            username: getUserData().username
        });
    }
}