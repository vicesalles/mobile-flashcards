import {
    GET_ALL_DECKS
} from '../actions';

const initialState = {
    currentDeck: null,
    decks: [],
    currentQuiz: null,
    quizLenght: null,
    ok: 0,
    ko: 0
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DECKS:
            return { ...state,
                ['decks']: action.decks
            }
        default:
            return state;
    }
}