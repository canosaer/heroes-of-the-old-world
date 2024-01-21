/*
NAME: data
DESCRIPTION: This file contains an object representing the global application state. The global state can be
read and updated with the useContext React hook.
*/

import { TypesData } from './types';
import { defaultTraits } from '../data/characters/defaultTraits'
import { spells } from '../data/characters/spells';

// Extract initial spells from the spells object
const initialSpells = spells.N.map((spell) => ({
  name: spell.name,
  rank: 0,
}));

const data: TypesData = {
    data: null,
    playerCharacter: {
        name: "",
        species: 'human',
        playerPortraitIndex: 0,
        improvementPoints: 12,
        edges: [
            "",
        ],
        traits: {
            ...defaultTraits,
        },
        spells: initialSpells,
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
