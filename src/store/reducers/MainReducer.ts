import { combineReducers } from 'redux';
import personsReducer from './Dicty';

const reducer = combineReducers({
    persons: personsReducer,
});

export default reducer;
