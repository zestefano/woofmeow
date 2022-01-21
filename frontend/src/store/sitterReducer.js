import { csrfFetch } from "./csrf";


const LOAD_SITTERS = 'sitters/getSitters'


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


const initialState = {}
const sitterReducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type) {
        case LOAD_SITTERS:
            action.sitters.forEach((sitter) => newState[sitter.id] = sitter)
            return newState
        default:
            return state
    }
}

export default sitterReducer;