declare const portraits: Record<string, string[]>;

type SkillSet = {
  [key: string]: number;
};

export type Trait = {
  rank: number;
  skills: SkillSet;
};

type TraitNames = 'agility' | 'smarts' | 'spirit' | 'strength' | 'vigor';

export type TraitsWithIndexSignature = {
  [key in TraitNames]: Trait;
};

export type TypesData = {
  data: any;
  dataRefresh: boolean;
  loading: boolean;
  playerCharacter: {
    name: string;
    species: keyof typeof portraits;
    playerPortraitIndex: number;
    skillPoints: number;
    edges: string[];
    traits: TraitsWithIndexSignature;
    gear: string[];
    party: string[];
    units: string[];
    glyphs: string[];
    rings: string[];
    powers: string[];
    status: string[];
    fatigue: number;
    wounds: number;
    xp: number;
    avatar: number;
    portrait: number;
  };
};