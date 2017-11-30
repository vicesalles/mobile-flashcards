import reducer from '../reducers';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Redux store
const store = createStore(
    reducer, applyMiddleware(thunk)    
)

export default store;