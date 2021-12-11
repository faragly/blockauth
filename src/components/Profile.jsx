import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Avatar,
    Heading,
    Link,
    LogOutIcon,
    Menu,
    Pane,
    Popover,
    Position,
    SearchInput,
    Spinner,
    Text
} from 'evergreen-ui';
import CardList from './CardList';
import { ContentWrapper } from '../styled/ContentWrapper';
import { Header } from '../styled/Header';
import { getPerson, getUserData, userSession } from '../auth';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

const Footer = styled.footer`
  display: flex;
  height: 40px;
  border-top: 1px solid #ced4da;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
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
        this.year = (new Date()).getFullYear();
    }

    render() {
        const { handleSignOut } = this.props;
        const { person, username, filter } = this.state;

        return (
            !userSession.isSignInPending() ?
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
                                        <Menu.Divider />
                                        <Menu.Group>
                                            <Menu.Item icon={LogOutIcon} onSelect={ handleSignOut.bind(this) }>Sign out</Menu.Item>
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
                        <CardList filter={filter} />
                    </Pane>
                    <Footer>
                        <Text size={300}>&copy; {this.year} Khalik Faradzhli</Text>
                        <Text size={300}>Designed by: <Link size={300} href="https://evergreen.segment.com/">Evergreen React UI Framework</Link></Text>
                    </Footer>
                </ContentWrapper> : <Spinner />
        );
    }

    componentWillMount() {
        this.setState({
            person: getPerson(),
            username: getUserData().username
        });
    }
}