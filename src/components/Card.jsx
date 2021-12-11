import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Heading,
    Pane,
    Paragraph,
    Menu,
    Strong,
    Tooltip,
    Popover,
    Position,
    toaster, MoreIcon, ClipboardIcon, ListDetailViewIcon, EditIcon, TrashIcon
} from 'evergreen-ui';
import copy from 'clipboard-copy';
import { authenticator } from 'otplib';
import PropTypes from 'prop-types';

const CodeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const LabelContainer = styled.div`
    justify-content: space-between;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    h2 {
      text-overflow: ellipsis;
      overflow: hidden;
    }
`;

const Progress = styled.div`
    display: flex;
    height: 3px;
    overflow: hidden;
    font-size: 0.60938rem;
    background-color: #EBF0FF;
`;

const ProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    transition: width 0.6s ease;
    background-color: #2952CC;
`;

class Card extends Component {
    static defaultProps = {
        data: {
            id: null,
            user: '',
            service: '',
            secretKey: ''
        },
        onEdit: () => {},
        onRemove: () => {},
        onDetail: () => {}
    }

    constructor(props) {
        super(props);
        this.state = {
            token: null,
            timeRemaining: null
        };
        this.iconBgColor = '#8f95b2'
    }

    async copyToClipboard() {
        await copy(this.state.token);
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
                                    <Menu.Item icon={ListDetailViewIcon} onSelect={() => {
                                        this.props.onDetail(id);
                                        close();
                                    }}>View</Menu.Item>
                                    <Menu.Item icon={EditIcon} onSelect={() => {
                                        this.props.onEdit(id);
                                        close();
                                    }}>Edit</Menu.Item>
                                </Menu.Group>
                                <Menu.Divider />
                                <Menu.Group>
                                    <Menu.Item icon={TrashIcon} intent="danger" onSelect={() => {
                                        this.props.onRemove(id);
                                        close();
                                    }}>Remove</Menu.Item>
                                </Menu.Group>
                            </Menu>
                        }
                        >
                        <MoreIcon color={this.iconBgColor} />
                    </Popover>
                </LabelContainer>
                <CodeContainer>
                    <Heading is="h1" size={900}>{token}</Heading>
                    <Tooltip content="Copy to clipboard" position={Position.RIGHT}>
                        <ClipboardIcon color={this.iconBgColor} marginLeft={10} onClick={ this.copyToClipboard.bind(this) } />
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

Card.propTypes = {
    data: PropTypes.object.isRequired,
    onDetail: PropTypes.func,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
}

export default Card;