import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import projects from './projects.reducers';

const rootReducer = combineReducers({ 
    form: formReducer,
    projects
});

export default rootReducer;