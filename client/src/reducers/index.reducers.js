import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import searchBar from './search.reducers';

const rootReducer = combineReducers({ 
    form: formReducer,
    // searchBar
});

export default rootReducer;