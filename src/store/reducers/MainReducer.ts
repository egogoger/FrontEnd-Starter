import {combineReducers} from 'redux';
import dictysReducer from './Dicty';

const reducer = combineReducers({
    dictys: dictysReducer,
});

export default reducer;
