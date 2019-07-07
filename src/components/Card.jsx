import React, { Component } from 'react';
import styled from 'styled-components';
import { Heading, Pane, Paragraph, IconButton, Menu, Strong, Tooltip, Popover, Position, toaster } from 'evergreen-ui';
import copy from 'clipboard-copy';
import { authenticator } from 'otplib/otplib-browser';
import theme from '../theme.js';

const CodeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const LabelContainer = styled(CodeContainer)`
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Progress = styled.div`
    display: flex;
    height: 3px;
    overflow: hidden;
    font-size: 0.60938rem;
    background-color: ${theme.colors.grays[2]};
`;

const ProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: ${theme.colors.primary};
    transition: width 0.6s ease;
`;

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            timeRemaining: null
        };
    }

    copyToClipboard() {
        copy(this.state.token);
        toaster.success('Token copied to clipboard');
    }

    updateToken() {
        const { secretKey } = this.props.data;
        const token = authenticator.generate(secretKey);
        const timeRemaining = authenticator.timeRemaining();

        this.setState({
            token,
            timeRemaining
        });
        this.timer = setTimeout(this.updateToken.bind(this), 1000);
    }

    render() {
        const { id, user, service } = this.props.data;
        const { token, timeRemaining } = this.state;

        return (
            <Pane elevation={1} hoverElevation={2} backgroundColor="white" padding={20}>
                <LabelContainer>
                    <Heading>{service} ({user})</Heading>
                    <Popover
                        position={Position.BOTTOM_LEFT}
                        content={({ close }) =>
                            <Menu>
                                <Menu.Group>
                                    <Menu.Item icon="list-detail-view" onSelect={() => {
                                        this.props.onDetail(id);
                                        close();
                                    }}>View</Menu.Item>
                                    <Menu.Item icon="edit" onSelect={() => {
                                        this.props.onEdit(id);
                                        close();
                                    }}>Edit</Menu.Item>
                                </Menu.Group>
                                <Menu.Divider />
                                <Menu.Group>
                                    <Menu.Item icon="trash" intent="danger" onSelect={() => {
                                        this.props.onRemove(id);
                                        close();
                                    }}>Remove</Menu.Item>
                                </Menu.Group>
                            </Menu>
                        }
                        >
                        <IconButton height={24} appearance="minimal" icon="more" />
                    </Popover>
                </LabelContainer>
                <CodeContainer>
                    <Heading is="h1" size={900}>{token}</Heading>
                    <Tooltip content="Copy to clipboard" position={Position.RIGHT}>
                        <IconButton marginLeft={10} appearance="minimal" icon="clipboard" onClick={ this.copyToClipboard.bind(this) } />
                    </Tooltip>
                </CodeContainer>
                <Paragraph color="muted" marginBottom={5}>
                    Your token expires in <Strong>{ timeRemaining }s</Strong>
                </Paragraph>
                <Progress>
                    <ProgressBar style={{ width: Math.round((timeRemaining / 30) * 100) + '%' }} />
                </Progress>
            </Pane>
        );
    }

    componentDidMount() {
        this.updateToken();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
}

