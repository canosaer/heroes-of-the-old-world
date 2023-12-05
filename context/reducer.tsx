// ./reducer.ts

import { TypesData } from './types';

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
        case 'UPDATE_AGILITY':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        agility: {
                            ...state.playerCharacter.traits.agility,
                            rank: action.payload,
                        },
                    },
                },
            };
        case 'UPDATE_AGILITY_SKILL':
            const { agilitySkill, agilityValue } = action.payload;
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        agility: {
                            ...state.playerCharacter.traits.agility,
                            skills: {
                                ...state.playerCharacter.traits.agility.skills,
                                [agilitySkill]: agilityValue,
                            },
                        },
                    },
                },
            };
        case 'UPDATE_SMARTS':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        smarts: {
                            ...state.playerCharacter.traits.smarts,
                            rank: action.payload,
                        },
                    },
                },
            };
        case 'UPDATE_SMARTS_SKILL':
            const { smartsSkill, smartsValue } = action.payload;
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        smarts: {
                            ...state.playerCharacter.traits.smarts,
                            skills: {
                                ...state.playerCharacter.traits.smarts.skills,
                                [smartsSkill]: smartsValue,
                            },
                        },
                    },
                },
            };
        case 'UPDATE_SPIRIT':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        spirit: {
                            ...state.playerCharacter.traits.spirit,
                            rank: action.payload,
                        },
                    },
                },
            };
        case 'UPDATE_SPIRIT_SKILL':
            const { spiritSkill, spiritValue } = action.payload;
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        spirit: {
                            ...state.playerCharacter.traits.spirit,
                            skills: {
                                ...state.playerCharacter.traits.spirit.skills,
                                [spiritSkill]: spiritValue,
                            },
                        },
                    },
                },
            };
        case 'UPDATE_STRENGTH':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        strength: {
                            ...state.playerCharacter.traits.strength,
                            rank: action.payload,
                        },
                    },
                },
            };
        case 'UPDATE_VIGOR':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    traits: {
                        ...state.playerCharacter.traits,
                        vigor: {
                            ...state.playerCharacter.traits.vigor,
                            rank: action.payload,
                        },
                    },
                },
            };
        case 'UPDATE_SKILL_POINTS':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    skillPoints: action.payload
                }
                
            };
        default:
            return state;
    }
};

export default reducer;