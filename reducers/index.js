import {
    GET_ALL_DECKS,
    CREATE_DECK,
    SET_DECK,
    GET_DECK,
    CONFIRM_CREATION,
    RESET_QUIZ,
    START_QUIZ,
    NEXT_QUESTION    
} from '../actions';

//INITIAL STATE
const initialState = {
    currentDeck: null,
    deckCreated: false,
    decks: '',
    currentQuiz: false,
    currentQuestion: 0,
    ok: 0,
    ko: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        
        case GET_ALL_DECKS:
            const {decks} = action;
            return { ...state,
                deckCreated: false,
                decks
            }
        case GET_DECK:
            return {
                ...state,
                ['decks']: [
                    ...state['decks'],
                    action.deck
                ]
            }
        
        case SET_DECK:
            const {name} = action;
            const currentDeck = name;
        return{
            ...state,
            currentDeck
        }

        case CREATE_DECK:

            const deckTitle = action.title;
            const newDecks = Object.assign({
                deckTitle: {
                    title: deckTitle,
                    cards: []
                },
            }, state['decks'])
            return {
                ...state,
                decks: newDecks,
                deckCreated: true
            }
        case CONFIRM_CREATION:
            return {
                ...state,
                deckCreated: false
            }

/// QUIZ RELATED REDUCERS

        case START_QUIZ:
            return{
                ...state,
                currentQuiz:true
            }

        case RESET_QUIZ:
            return{
                ...state,
                currentQuiz:false,
                ok:0,
                ko:0,
                currentQuestion:0
            }

        case NEXT_QUESTION:

            if(action.answer==='ok'){

                const ok = state.ok+1;
                const ko = state.ko;

            }else{

                const ok = state.ok;
                const ko = state.ko+1;

            }

            return {
                ...state,
                ok,
                ko
            }


        default:
            return state;
    }
}