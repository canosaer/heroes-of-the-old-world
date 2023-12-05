/*
NAME: data
DESCRIPTION: This file contains an object representing the global application state. The global state can be
read and updated with the useContext React hook.
*/

import { TypesData } from './types';
import { defaultTraits } from '../data/characters/defaultTraits'

const data: TypesData = {
    data: null,
    playerCharacter: {
        name: "",
        playerSpecies: 'human',
        playerPortraitIndex: 0,
        skillPoints: 12,
        edges: [
            "",
        ],
        traits: {
            ...defaultTraits,
        },
        powers: [
            "",
        ],
        gear: [
            "dagger",
        ],
        party: [
            "",
        ],
        units: [
            "",
        ],
        glyphs: [
            "",
        ],
        rings: [
            "",
        ],
        status: [
            "",
        ],
        fatigue: 0,
        wounds: 0,
        xp: 0,
        avatar: -1,
        portrait: -1,
    },
    dataRefresh: false,
    loading: false,

};

export default data;
