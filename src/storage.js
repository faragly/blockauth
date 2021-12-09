import { userSession } from './auth';
import { Storage } from '@stacks/storage';

const storage = new Storage({ userSession });
const CARDS_FILENAME = 'cards.json';

/**
 * @typedef {Object} Card
 * @property {string} id
 * @property {string} user
 * @property {string} service
 * @property {string} secretKey
 * @property {number} createdAt
 */

// @type {Card[]}
export const defaultCards = [];

/**
 * Save tasks to Gaia
 * @param {Card[]} cards
 */
export const saveCards = async (cards) => {
    await storage.putFile(CARDS_FILENAME, JSON.stringify(cards));
};

/**
 * Fetch cards for a current user.
 *
 * If no cards are found, then the default cards are returned.
 * to fetch the current user's cards.
 * @returns {{ cards: Card[] }}
 */
export const fetchCards = async () => {
    try {
        /** @type {string} raw JSON stored in Gaia */
        const cardsJSON = await storage.getFile(CARDS_FILENAME);

        return cardsJSON ? JSON.parse(cardsJSON) : defaultCards;
    } catch (error) {
        return defaultCards;
    }
}