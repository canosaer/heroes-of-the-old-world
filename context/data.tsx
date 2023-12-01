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
                rank: 1,
                skills: {
                    athletics: 1,
                }
            },
            smarts: {
                rank: 1,
                skills: {
                    notice: 1,
                }
            },
            spirit: {
                rank: 1,
                skills: {
                    persuasion: 1,
                }
            },
            strength: {
                rank: 1,
            },
            vigor: {
                rank: 1,
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
