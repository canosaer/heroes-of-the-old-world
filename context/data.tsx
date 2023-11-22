/*
NAME: data
DESCRIPTION: This file contains an object representing the global application state. The global state can be
read and updated with the useContext React hook.
*/

import TypesData from './types';

const data: TypesData = {
    data: null,
    playerCharacter: {
        name: "",
        playerSpecies: 'human',
        playerPortraitIndex: 0,
        edges: [
            "",
        ],
        traits: {
            agility: {
                rank: 4,
                skills: {
                    athletics: 4,
                }
            },
            smarts: {
                rank: 4,
                skills: {
                    notice: 4,
                }
            },
            spirit: {
                rank: 4,
                skills: {
                    persuasion: 4,
                }
            },
            strength: {
                rank: 4,
            },
            vigor: {
                rank: 4,
            },
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
