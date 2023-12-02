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
        case 'SET_NAME':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    name: action.payload
                }
            };
        case 'SET_SPECIES':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    playerSpecies: action.payload
                }
            };
        case 'SET_PORTRAIT':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    playerPortraitIndex: action.payload
                }
                
            };
        case 'SET_AGILITY':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        agility: {
                            ...state.playerCharacter.traits.agility,
                            rank: action.payload
                        }
                    }
                }
            };
        case 'SET_SMARTS':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        smarts: {
                            ...state.playerCharacter.traits.smarts,
                            rank: action.payload
                        }
                    }
                }
            };
        case 'SET_STRENGTH':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        strength: {
                            ...state.playerCharacter.traits.strength,
                            rank: action.payload
                        }
                    }
                }
            };
        case 'SET_SPIRIT':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        spirit: {
                            ...state.playerCharacter.traits.spirit,
                            rank: action.payload
                        }
                    }
                }
            };
        case 'SET_VIGOR':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        vigor: {
                            ...state.playerCharacter.traits.vigor,
                            rank: action.payload
                        }
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;