declare const portraits: Record<string, string[]>;

type TypesData = {
    data: any,
    dataRefresh: boolean,
    loading: boolean,
    playerCharacter: {
        name: string,
        playerSpecies: keyof typeof portraits,
        playerPortraitIndex: number,
        edges: string[],
        traits: {
            agility: {
                rank: number,
                skills: {
                    athletics: number,
                },
            },
            smarts: {
                rank: number,
                skills: {
                    notice: number,
                },
            },
            spirit: {
                rank: number,
                skills: {
                    persuasion: number,
                },
            },
            strength: {
                rank: number,
            },
            vigor: {
                rank: number,
            },
        },
        gear: string[],
        party: string[],
        units: string[],
        glyphs: string[],
        rings: string[],
        powers: string[],
        status: string[],
        fatigue: number,
        wounds: number,
        xp: number,
        avatar: number,
        portrait: number,
    },
};

export default TypesData;