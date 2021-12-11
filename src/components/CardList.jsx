import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Button,
    Dialog,
    Heading,
    Pane,
    Paragraph, PlusIcon,
    SideSheet,
    Spinner,
    Strong,
    TextInputField,
    toaster
} from 'evergreen-ui';
import { mediaBreakpointOnlySm, mediaBreakpointOnlyMd, mediaBreakpointOnlyLg, mediaBreakpointOnlyXl } from 'styled-bootstrap-responsive-breakpoints';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { authenticator } from 'otplib';
import QRCode from 'qrcode.react';
import Moment from 'react-moment';
import { v4 as uuid } from 'uuid';
import Card from './Card';
import { fetchCards, saveCards } from '../storage';

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
`;

const Container = styled(Wrapper)`
    flex-direction: column;
`;

const SpinnerWrapper = styled(Wrapper)`
    align-self: center;
    justify-content: center;
`;

const GridContainer = styled.div`
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-bottom: 15px;

    ${mediaBreakpointOnlySm`
        grid-template-columns: repeat(2, calc(50% - 7.5px));
    `};

    ${mediaBreakpointOnlyMd`
        grid-template-columns: repeat(3, calc(33.33% - 10px));
    `};

    ${mediaBreakpointOnlyLg`
        grid-template-columns: repeat(4, calc(25% - 11.25px));
    `};

    ${mediaBreakpointOnlyXl`
        grid-template-columns: repeat(5, calc(20% - 12px));
    `};
`;

const DetailsGrid = styled.div`
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 5px;
    grid-template-columns: 30% calc(70% - 15px);
    background-color: #fff;
    padding: 15px;
`;

const AddCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px dashed #edeff5;
    min-height: 142px;
`;

const SortableItem = SortableElement((props) => <Card {...props} />);

const SortableList = SortableContainer(({items, onAdd, onDetail, onEdit, onRemove}) => {
    return (
        <GridContainer>
        {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} data={value} onDetail={onDetail} onEdit={onEdit} onRemove={onRemove} />
        ))}
            <AddCard>
                <Button iconBefore={PlusIcon} marginRight={12} onClick={onAdd}>Add secret</Button>
            </AddCard>
        </GridContainer>
    );
});

export default class CardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            isLoading: false,
            dialog: {
                services: ['Binance', 'Coinlist', 'Huobi', 'Bittrex', 'Kraken', 'Poloniex', 'Xapo', 'LocalBitcoins', 'Bitstamp', 'Bitfinex'],
                placeholder: null,
                isShown: false,
                isLoading: false,
                edit: null,
                value: '',
                service: '',
                secretKey: ''
            },
            detail: {
                isShown: false,
                card: {}
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDialogOpenComplete = this.handleDialogOpenComplete.bind(this);
        this.handleDialogCloseComplete = this.handleDialogCloseComplete.bind(this);
        this.handleCardDetail = this.handleCardDetail.bind(this);
        this.handleCardEdit = this.handleCardEdit.bind(this);
        this.handleCardRemove = this.handleCardRemove.bind(this);
        this.handleSortEnd = this.handleSortEnd.bind(this);
        this.saveCard = this.saveCard.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            dialog: {
                ...this.state.dialog,
                [target.name]: target.value
            }
        });
    }

    handleCardDetail(id) {
        const card = this.state.cards.find(card => card.id === id);
        this.setState({
            detail: {
                ...this.state.detail,
                isShown: true,
                card,
                otpauth: authenticator.keyuri(card.user, card.service, card.secretKey)
            }
        });
    }

    handleCardEdit(id) {
        const card = this.state.cards.find(card => card.id === id);
        this.setState({
            dialog: {
                ...this.state.dialog,
                isShown: true,
                edit: id,
                user: card.user,
                service: card.service,
                secretKey: card.secretKey
            }
        });
    }

    async handleCardRemove(id) {
        let { cards } = this.state;
        const index = cards.findIndex(card => card.id === id);

        if (index > -1) {
            cards.splice(index, 1);
            this.setState({ cards });
            await saveCards(cards);
            toaster.success('Card deleted successfully');
        }
    }

    async fetchData() {
        this.setState({ isLoading: true });
        const cards = await fetchCards();
        this.setState({ cards, isLoading: false });
    }

    async saveCard() {
        const { dialog } = this.state;
        let cards = this.state.cards;
        this.setState({ dialog: { ...dialog, isLoading: true }});

        let card = {
            id: dialog.edit || uuid(),
            user: dialog.user.trim(),
            service: dialog.service.trim(),
            secretKey: dialog.secretKey.trim(),
            createdAt: Date.now()
        };

        if (dialog.edit) {
            const index = cards.findIndex(card => card.id === dialog.edit);

            if (index > -1) {
                cards[index] = card;
            }
        } else {
            cards.push(card);
        }

        await saveCards(cards);
        this.setState({
            cardIndex: card.id,
            cards,
            dialog: {
                ...dialog,
                isShown: false,
                isLoading: false,
                edit: null,
                user: '',
                service: '',
                secretKey: ''
            }
        });
        toaster.success('Card successfully added');
    }

    handleDialogOpenComplete() {
        const { services } = this.state.dialog;
        const placeholder = services[Math.floor(Math.random() * services.length)];
        this.setState({
            dialog: {
                ...this.state.dialog,
                placeholder
            }
        });
    }

    handleDialogCloseComplete() {
        let dialog = this.state.dialog;

        if (dialog.edit) {
            dialog = {
                ...dialog,
                edit: null,
                user: '',
                service: '',
                secretKey: ''
            }
        }

        this.setState({
            dialog: {
                ...dialog,
                isShown: false,
                isLoading: false
            }
        });
    }

    async handleSortEnd({oldIndex, newIndex}) {
        let cards = arrayMoveImmutable(this.state.cards, oldIndex, newIndex);

        this.setState({ cards });
        await saveCards(cards);
    }

    render() {
        const { dialog, cards, detail } = this.state;
        const { filter } = this.props;
        const filteredCards = cards.filter(card => card.user.toLowerCase().includes(filter) || card.service.toLowerCase().includes(filter));

        return (
            this.state.isLoading ? <SpinnerWrapper><Spinner /></SpinnerWrapper>
            : <Container>
                <Heading is="h1" size={700} marginBottom={20}>Authentication cards</Heading>
                <SortableList
                    items={filteredCards}
                    onAdd={() => this.setState({ dialog: { ...dialog, isShown: true }})}
                    onDetail={this.handleCardDetail}
                    onEdit={this.handleCardEdit}
                    onRemove={this.handleCardRemove}
                    onSortEnd={this.handleSortEnd}
                    axis="xy"
                    pressDelay={200}
                    />
                <Dialog
                    width={400}
                    isShown={dialog.isShown}
                    title={`${dialog.edit ? 'Edit' : 'Add'} secret`}
                    onOpenComplete={this.handleDialogOpenComplete}
                    onCloseComplete={this.handleDialogCloseComplete}
                    isConfirmLoading={dialog.isLoading}
                    onConfirm={this.saveCard.bind(this)}
                    confirmLabel={dialog.isLoading ? 'Loading...' : 'Save'}
                    isConfirmDisabled={!dialog.user || !dialog.service || !dialog.secretKey}
                >
                    <TextInputField
                        name="user"
                        label="User name"
                        required
                        placeholder={`for example, Elon Must or user@domain.com`}
                        defaultValue={dialog.user}
                        onChange={this.handleInputChange}
                        />
                    <TextInputField
                        name="service"
                        label="Service name"
                        required
                        placeholder={dialog.placeholder}
                        defaultValue={dialog.service}
                        onChange={this.handleInputChange}
                        />
                    <TextInputField
                        name="secretKey"
                        label="Secret key"
                        required
                        placeholder="Enter secret key"
                        defaultValue={dialog.secretKey}
                        onChange={this.handleInputChange}
                        />
                </Dialog>
                <SideSheet
                    isShown={detail.isShown}
                    onCloseComplete={() => this.setState({ detail: { ...detail, isShown: false }})}
                    containerProps={{
                        display: 'flex',
                        flex: '1',
                        flexDirection: 'column',
                    }}
                    width={400}
                    >
                    <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white" padding={15}>
                        <Heading size={600}>Card details</Heading>
                    </Pane>
                    <Pane display="flex" flex="1" flexDirection="column" overflowY="scroll" background="tint1" padding={15}>
                        <DetailsGrid>
                            <Paragraph>id:</Paragraph><Strong>{detail.card.id}</Strong>
                            <Paragraph>created at:</Paragraph><Strong><Moment unix format="LLL">{detail.card.createdAt / 1000}</Moment></Strong>
                            <Paragraph>user:</Paragraph><Strong>{detail.card.user}</Strong>
                            <Paragraph>service:</Paragraph><Strong>{detail.card.service}</Strong>
                            <Paragraph>secret key:</Paragraph><Strong>{detail.card.secretKey}</Strong>
                        </DetailsGrid>
                        <Pane display="flex" flexGrow={1} alignItems="center" justifyContent="center">
                            <QRCode value={detail.otpauth} level="H" size={256} />
                        </Pane>
                    </Pane>
                </SideSheet>
            </Container>
        );
    }

    componentDidMount() {
        this.fetchData();
    }
}