import * as api from '../utils/api';
export const GET_ALL_DECKS = "GET_ALL_DECKS";
export const SET_DECK = "SET_DECK";

/**
 * @description Get all avaible decks
 */
export function getAllDecks() {

    return (dispatch) => {
        api.getAllDecks().then((r) => {
            dispatch({
                type: GET_ALL_DECKS,
                decks: r
            })
        })
    }

}

/**
 * @description populate the app with some sample data
 */
export function needSampleData() {
    console.log('init needSampleData');
    return api.initStorage().then(() => {
            return getAllDecks()
        })
    
}


/**
 * @description Stablish a deck as the current
 */
export function setDeck(name) {
    return {
        type: SET_DECK,
        name
    }
}