import { csrfFetch } from "./csrf";


const LOAD_SITTERS = 'sitters/getSitters'
const ADD_SITTER = 'sitters/addSitter'
const SINGLE_SITTER = 'sitters/singleSitter'
// const SITTER_PHOTO = 'sitters/sitterPhoto'
// const ADD_PHOTO = 'sitters/addPhoto'
const EDIT_SITTER = 'sitters/editSitter'
const DELETE_SITTER = 'sitters/deleteSitter'
// const EDIT_SITTER_PHOTO = 'sitters/editSitterPhoto'

// LOAD ALL SITTERS
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

// BECOME A SITTER
const addASitter = (sitter) => {
    return {
        type: ADD_SITTER,
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

// GET SINGLE SITTER
const getSingleSitter = (sitter) => {
    return {
        type: SINGLE_SITTER,
        sitter
    }
}

export const singleSitter = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/sitters/${id}`)
    if(response.ok) {
        const sitter = await response.json()
        dispatch(getSingleSitter(sitter))
    }
}

// GET SITTER PHOTO
// const getASitterPhoto = (photo) => {
//     return {
//         type: SITTER_PHOTO,
//         photo
//     }
// }

// export const sitterPhoto = (id) => async(dispatch) => {
//     const response = await csrfFetch(`/api/sitters/photo/${id}`)
//     if(response.ok) {
//         const photo = await response.json()
//         dispatch(getASitterPhoto(photo))
//     }
// }

// ADD SITTER PHOTO
// const addAphoto = (photo) => {
//     return {
//         type: ADD_PHOTO,
//         photo
//     }
// }

// export const addPhoto = (photo) => async(dispatch) => {
//     const response = await csrfFetch('/api/sitters/photo', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(photo)
//     })
//     if(response.ok) {
//         const photo = await response.json()
//         dispatch(addAphoto(photo))
//     }
// }

// EDIT SITTER
const editASitter = (sitter) => {
    return {
        type: EDIT_SITTER,
        sitter
    }
}

export const editSitter = (sitter, id) => async(dispatch) => {
    const response = await csrfFetch(`/api/sitters/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(sitter)
    })
    if(response.ok) {
        const sitter = await response.json()
        dispatch(editASitter(sitter))
    }
}

// DELETE SITTER
const deleteASitter = (sitter) => {
    return {
        type: DELETE_SITTER,
        sitter
    }
}

export const deleteSitter = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/sitters/${id}`, {
        method: 'DELETE'
    })
    if(response.ok) {
        dispatch(deleteASitter(id))
    }
}

// EDIT SITTER PHOTO

// const editASitterPhoto = (photo) => {
//     return {
//         type: EDIT_SITTER_PHOTO,
//         photo
//     }
// }

// export const editSitterPhoto = (sitter, id) => async(dispatch) => {
//     const response = await csrfFetch(`/api/sitters/photo/${id}`, {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(sitter)
//     })
//     if(response.ok) {
//         const sitterPhoto = await response.json()
//         dispatch(editASitterPhoto(sitterPhoto))
//     }
// }



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
        case SINGLE_SITTER:
            newState = {...state}
            newState[action.sitter.id] = action.sitter
            return newState
        // case SITTER_PHOTO:
        //     newState = {...state}
        //     console.log(newState[action.photo.id], "yyyyyyyyy")
        //     newState[action.photo.id] = action.photo
        //     return newState
        // case ADD_PHOTO:
        //     newState = {...state}
        //     newState[action.photo.id] = action.photo
        //     return newState
        case EDIT_SITTER:
            newState = {...state}
            console.log(newState[action.sitter.sitter.id], "+++++++++++++++++")
            newState[action.sitter.sitter.id] = action.sitter.sitter
            return newState
        case DELETE_SITTER:
            newState = {...state}
            delete newState[action.sitter]
            return newState
        // case EDIT_SITTER_PHOTO:
        //     newState = {...state}
        //     console.log(newState[action.photo.photo.id], "---------------------")
        //     console.log(action.photo, "xxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        //     newState[action.photo.id] = action.photo
        //     return newState
        default:
            return state
    }
}

export default sitterReducer;