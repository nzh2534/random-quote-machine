import { combineReducers } from 'redux';
import quoteData from './quoteData';
import randomQuote from "./randomQuote";
import colorReducer from './newColor';

const rootReducer = combineReducers({
    randomQuote,
    quoteData,
    colorReducer
})

export default rootReducer;