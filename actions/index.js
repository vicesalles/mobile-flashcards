import * as api from '../utils/api';
export const GET_ALL_DECKS = "GET_ALL_DECKS";
export const SET_DECK = "SET_DECK";
export const CREATE_DECK = "CREATE_DECK";
export const GET_DECK = "GET_DECK";
export const CREATE_CARD = "CREATE_CARD";
export const CONFIRM_CREATION = "CONFIRM_CREATION";


//Quiz

export const START_QUIZ = "START_QUIZ";
export const RESET_QUIZ = "RESET_QUIZ";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const END_QUIZ = "END_QUIZ";

/**
 * @description Creates dummy data if no data is avaible
 * @returns Dummy data
 */
export function initData() {
    return (dispatch) => {
        api.initStorage().then((decks) => {
            dispatch(getAllDecks())
        })
    }
}

/**
 * @description Get all avaible decks
 */
export function getAllDecks() {
    return (dispatch) => {
        api.getAllDecks().then((r) => {

            if (r.length === 0) {
                dispatch(initData());
            } else {
                dispatch({
                    type: GET_ALL_DECKS,
                    decks: r
                })
            }


        })
    }
}

/**
 * @description Get the given Deck
 */

export function getDeck(title) {
    return (dispatch) => {
        api.getDeck(title).then((r) => {
            dispatch({
                type: GET_DECK,
                deck: r
            })
        })
    }
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

/**
 * @description Creates a new Deck
 */
export function createDeck(title) {
    
    return (dispatch) => {
        api.createDeck(title).then(() => {
            dispatch(getAllDecks())
        })
    }

}

export function confirmCreation() {
    return {
        type: CONFIRM_CREATION
    }
}

export function createCard(deck,card) {

    return (dispatch)=>{
        api.createCard(deck,card).then(()=>{
            dispatch(getAllDecks());
        })
    }
}

export function startQuiz(){
    return{
        type: START_QUIZ
    }
}

export function resetQuiz(){
    return{
        type:RESET_QUIZ
    }
}

/**
 * @description pushes the Quizz to the next Question or to The End
 * @param STRING is the answer ok || ko
 * @param BOOLEAN was that the last question?
 */
export function nextQuestion(answer,last){
   
    if (last){
        return (dispatch)=>{
            dispatch({type: NEXT_QUESTION,
            answer
            })
            dispatch({type: END_QUIZ,
            answer})
        }
    }else{
        return{
            type: NEXT_QUESTION,
            answer
        }
    }

    
}