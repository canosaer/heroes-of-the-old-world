declare const portraits: Record<string, string[]>;

export type SkillSet = {
  [key: string]: number;
};

export type Trait = {
  rank: number;
  skills: SkillSet;
};

type TraitNames = 'agility' | 'smarts' | 'spirit' | 'strength' | 'vigor';

export type TraitsWithIndexSignature = {
  [key in TraitNames]: Trait;
} & { [key: string]: Trait }; // Add index signature to allow string-based indexing

export type TypesData = {
  data: any;
  dataRefresh: boolean;
  loading: boolean;
  playerCharacter: {
    name: string;
    species: keyof typeof portraits;
    playerPortraitIndex: number;
    improvementPoints: number;
    edges: string[];
    traits: TraitsWithIndexSignature;
    gear: string[];
    party: string[];
    units: string[];
    glyphs: string[];
    rings: string[];
    spells: Array<{ name: string; rank: number }>;
    status: string[];
    fatigue: number;
    wounds: number;
    xp: number;
    avatar: number;
    portrait: number;
  };
};