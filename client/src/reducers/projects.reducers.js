import {
    GET_PROJECTS_PENDING,
    GET_PROJECTS_SUCCESS,
    ADD_PROJECT_PENDING,
    ADD_PROJECT_SUCCESS,
    EDIT_PROJECT_PENDING,
    EDIT_PROJECT_SUCCESS,
    REMOVE_PROJECT_PENDING,
    REMOVE_PROJECT_SUCCESS,
} from '../actions/projects.actions'

export default (state = [], action) => {
    switch (action.type) {
        case GET_PROJECTS_PENDING:
            return state;
        case GET_PROJECTS_SUCCESS:
            return [...action.payload.data];
        case ADD_PROJECT_PENDING:
            return state;
        case ADD_PROJECT_SUCCESS:
            return [...action.payload.data];
        case EDIT_PROJECT_PENDING:
            return state;
        case EDIT_PROJECT_SUCCESS:
            return [...action.payload.data];
        case REMOVE_PROJECT_PENDING:
            return state;
        case REMOVE_PROJECT_SUCCESS:
            return [...action.payload];
        default: 
            return state;
    }
}