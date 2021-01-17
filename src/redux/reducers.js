import {combineReducers} from 'redux';
import {merchantsReducer} from './merchants';

const rootReducer = combineReducers({
    merchants: merchantsReducer
});

export default rootReducer;
