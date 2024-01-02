export type Edge = {
    name: string;
    requirements?: {
        attributes?: {
            agility?: number;
            spirit?: number;
            vigor?: number;
            strength?: number;
            smarts?: number;
        };
        skills?: {
            athletics?: number;
            fighting?: number;
            notice?: number;
            persuasion?: number;
            repair?: number;
            research?: number;
            stealth?: number;
            survival?: number;
            shooting?: number;
            taunt?: number;
            thievery?: number;
        };
        edges?: string[];
    };
    summary: string;
};