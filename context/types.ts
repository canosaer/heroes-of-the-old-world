declare const portraits: Record<string, string[]>;

type SkillSet = {
  [key: string]: number;
};

type Trait = {
  rank: number;
  skills: SkillSet;
};

type Traits = {
  agility: Trait;
  smarts: Trait;
  spirit: Trait;
  strength: Trait;
  vigor: Trait;
};

type TypesData = {
  data: any;
  dataRefresh: boolean;
  loading: boolean;
  playerCharacter: {
    name: string;
    playerSpecies: keyof typeof portraits;
    playerPortraitIndex: number;
    skillPoints: number;
    edges: string[];
    traits: Traits;
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

export default TypesData;
