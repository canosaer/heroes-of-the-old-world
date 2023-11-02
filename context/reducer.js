/*
NAME: reducer
DESCRIPTION: This file creates an interface for interacting with global state.
*/

const reducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_DATA':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default reducer