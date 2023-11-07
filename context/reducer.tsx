// ./reducer.ts

import TypesData from './types';

type Action = {
    type: string;
    payload: any;
};

const reducer = (state: TypesData, action: Action): TypesData => {
    switch (action.type) {
        case 'LOAD_DATA':
            return {
                ...state,
                data: action.payload
            };
        case 'TOGGLE_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};

export default reducer;