import {
    GET_ALL_DECKS,
    CREATE_DECK,
    SET_DECK,
    GET_DECK,
    CONFIRM_CREATION,
    RESET_QUIZ,
    START_QUIZ,
    NEXT_QUESTION,
    END_QUIZ    
} from '../actions';

//INITIAL STATE
const initialState = {
    currentDeck: null,
    deckCreated: false,
    decks: '',
    currentQuiz: false,
    currentQuestion: 0,
    quizEnded:false,
    ok: 0,
    ko: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        
        case GET_ALL_DECKS:
            const {decks} = action;
            const filteredDecks = decks.filter((d)=>typeof d !=='boolean');
            const newState = Object.assign({},state,{decks:filteredDecks});
            return newState;

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
            console.log('REDUCER deck created');
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
                deckCreated: true,
                currentDeck: deckTitle
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
                quizEnded:false,
                ok:0,
                ko:0,
                currentQuestion:0
            }

        case NEXT_QUESTION:

           //Was the answer ok||ko
            const ok = action.answer==='ok'?state.ok+1:state.ok;
            const ko = action.answer==='ko'?state.ko+1:state.ko;
            const currentQuestion = state.currentQuestion + 1;

            return {
                ...state,
                currentQuestion,
                ok,
                ko
            }

        case END_QUIZ:
           
        return{
            ...state,
            quizEnded:true
        }

        default:
            return state;
    }
}