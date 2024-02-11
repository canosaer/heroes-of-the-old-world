// ./reducer.ts

import { TypesData } from './types';

type Action = {
    type: string;
    payload: any;
};

const updateSpell = (state: TypesData, spellName: string, spellRank: number): TypesData => {
    // Find the index of the spell with the given name
    const spellIndex = state.playerCharacter.spells.findIndex(spell => spell.name === spellName);

    // If the spell is found, update its rank
    if (spellIndex !== -1) {
        const updatedSpells = [...state.playerCharacter.spells];
        updatedSpells[spellIndex] = {
            ...updatedSpells[spellIndex],
            rank: spellRank,
        };

        return {
            ...state,
            playerCharacter: {
                ...state.playerCharacter,
                spells: updatedSpells,
            },
        };
    }

    return state; // Return unchanged state if the spell is not found
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
                    species: action.payload
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
        case 'UPDATE_IMPROVEMENT_POINTS':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    improvementPoints: action.payload
                }
                
            };
        case 'UPDATE_SPELL_RANK':
            return updateSpell(state, action.payload.spellName, action.payload.spellRank);
        case 'ADD_EDGE':
            return {
                ...state,
                playerCharacter: {
                ...state.playerCharacter,
                edges: [...state.playerCharacter.edges, action.payload],
                },
            };
        case 'REMOVE_EDGE':
            return {
                ...state,
                playerCharacter: {
                ...state.playerCharacter,
                edges: state.playerCharacter.edges.filter(edge => edge !== action.payload),
                },
            };
        case 'SET_RANDOM_CHARACTER':
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    name: action.payload.name,
                    species: action.payload.species,
                    playerPortraitIndex: action.payload.playerPortraitIndex,
                    traits: action.payload.traits,
                    improvementPoints: action.payload.improvementPoints,
                    edges: action.payload.edges,
                    spells: action.payload.spells,
                },
            };
        default:
            return state;
    }
};

export default reducer;