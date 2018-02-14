import axios from 'axios';

export const GET_PROJECTS_PENDING = "GET_PROJECTS_PENDING"
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS"
export const ADD_PROJECT_PENDING = "ADD_PROJECT_PENDING"
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS"
export const EDIT_PROJECT_PENDING = "EDIT_PROJECT_PENDING"
export const EDIT_PROJECT_SUCCESS = "EDIT_PROJECT_SUCCESS"
export const REMOVE_PROJECT_PENDING = "REMOVE_PROJECT_PENDING"
export const REMOVE_PROJECT_SUCCESS = "REMOVE_PROJECT_SUCCESS"

export const getProjects = () => {
    return async (dispatch) => {
        dispatch({ type: GET_PROJECTS_PENDING })
        let projects = await axios.get('http://localhost:8080/projects')
        dispatch({ 
            type: GET_PROJECTS_SUCCESS,
            payload: projects
        })
    }
}
export const addProject = (newProject) => {
    return async (dispatch) => {
        dispatch({ type: ADD_PROJECT_PENDING })
        let projects = await axios.post('http://localhost:8080/projects', newProject)
        dispatch({ 
            type: ADD_PROJECT_SUCCESS,
            payload: projects
        })
    }
}
export const editProject = (project) => {
    return async (dispatch) => {
        dispatch({ type: EDIT_PROJECT_PENDING })
        let projects = await axios.patch(`http://localhost:8080/projects/${project.id}`, project)
        dispatch({ 
            type: EDIT_PROJECT_SUCCESS,
            payload: projects
        })
    }
}
export const deleteProject = (id) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_PROJECT_PENDING })
        let projects = await axios.delete(`http://localhost:8080/projects/${id}`)
        dispatch({ 
            type: REMOVE_PROJECT_SUCCESS,
            payload: projects.data
        })
    }
}