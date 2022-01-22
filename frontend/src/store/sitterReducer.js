import { csrfFetch } from "./csrf";


const LOAD_SITTERS = 'sitters/getSitters'
const ADD_SITTER = 'sitters/addSitter'


const loadAllSitters = (sitters) => {
    return {
        type: LOAD_SITTERS,
        sitters
    }
}

export const loadSitters = () => async(dispatch) => {
    const response = await csrfFetch('/api/sitters')
    if(response.ok) {
        const sitters = await response.json()
        dispatch(loadAllSitters(sitters))
    }
}

const addASitter = (sitter) => {
    return {
        type:ADD_SITTER,
        sitter
    }
}

export const addSitter = (sitter) => async(dispatch) => {
    const response = await csrfFetch('/api/sitters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sitter)
    })
    if(response.ok) {
        const sitter = await response.json()
        dispatch(addASitter(sitter))
    }
}





const initialState = {}
const sitterReducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type) {
        case LOAD_SITTERS:
            newState = {...state}
            action.sitters.forEach((sitter) => newState[sitter.id] = sitter)
            return newState
        case ADD_SITTER:
            newState = {...state}
                newState[action.sitter.newSitter.id] = action.sitter.newSitter
            return newState
        default:
            return state
    }
}

export default sitterReducer;