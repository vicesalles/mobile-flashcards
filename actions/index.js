import * as api from '../utils/api';
import {GET_ALL_DECKS,SET_DECK,CREATE_DECK,GET_DECK,CREATE_CARD,CONFIRM_CREATION,START_QUIZ,RESET_QUIZ,NEXT_QUESTION,END_QUIZ} from './types';

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
 * @param String title
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
            dispatch({type:CREATE_DECK,title})
        })
    }

}

export function confirmCreation() {
    return {
        type: CONFIRM_CREATION
    }
}

/**
 * @description Create a new Card for a Deck
 * @param STRING deck 
 * @param Object card 
 */
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
 * @param STRING answer - is the answer ok || ko
 * @param BOOLEAN last - was that the last question?
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