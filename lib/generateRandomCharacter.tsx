import { playableSpecies } from '../data/characters/playableSpecies';
import { portraits } from '../data/characters/portraits';
import { defaultTraits as defaultTraitsData } from '../data/characters/defaultTraits';
import { edges } from '../data/characters/edges';

type Portraits = {
    [key: string]: string[];
};

type Skill = {
    // Add other properties as needed
};

type Trait = {
    rank: number;
    skills: Record<string, number>;
};

type Traits = Record<string, Trait>;

type DefaultTraits = {
    [key: string]: Skill;
};

// Function to generate a random number within a given range
const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to shuffle an array randomly
const shuffleArray = (array: any[]): any[] => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

// Function to generate a random character
const generateRandomCharacter = () => {
    // Randomly select a species
    const randomSpecies = playableSpecies[getRandomNumber(0, playableSpecies.length - 1)].value;
  
    // Randomly select a portrait for the chosen species
    const portraitArray = (portraits as Portraits)[randomSpecies];
    const randomPortraitIndex = getRandomNumber(0, portraitArray.length - 1);
  
    // Randomly assign attribute points
    const remainingAttributePoints = 5;
    const randomAttributes = shuffleArray(['agility', 'vigor', 'spirit', 'smarts', 'strength']).slice(0, remainingAttributePoints);
  
    // Initialize traits with default values
    const randomTraits: Traits = {};
    Object.keys(defaultTraitsData).forEach((ability) => {
      randomTraits[ability] = { rank: 1, skills: {} };
    });
  
    // Assign random values to the selected attributes
    randomAttributes.forEach((attribute) => {
      randomTraits[attribute].rank += 1;
    });
  
    // Randomly distribute improvement points among skills
    const remainingImprovementPoints = 12;
    const randomSkills = shuffleArray(['athletics', 'fighting', 'notice', 'persuasion', 'repair', 'research', 'stealth', 'survival', 'shooting', 'taunt', 'thievery']).slice(0, remainingImprovementPoints);
  
    // Assign random values to the selected skills
    randomSkills.forEach((skill) => {
      // Ensure that the skill exists in randomTraits
      if (randomTraits[skill]) {
        const maxSkillRank = randomTraits[skill].rank;
        const randomSkillRank = getRandomNumber(1, maxSkillRank);
        randomTraits[skill].skills[skill] = randomSkillRank;
      }
    });
  
    // Randomly select edges based on eligibility
    const randomEdges = [];
    const eligibleEdges = edges.N.filter((edge) => {
      // Customize eligibility criteria based on your requirements
      // For example, you might want to check if the character's traits meet the edge requirements
      return true; // Placeholder for eligibility criteria
    });
  
    if (eligibleEdges.length > 0) {
      const numberOfEdges = randomSpecies === 'human' ? getRandomNumber(1, 2) : 1;
      for (let i = 0; i < numberOfEdges; i++) {
        const randomEdge = shuffleArray(eligibleEdges)[0];
        randomEdges.push(randomEdge.name);
      }
    }
  
    // Create the random character object
    const randomCharacter = {
      name: 'Arys',
      species: randomSpecies,
      playerPortraitIndex: randomPortraitIndex,
      traits: randomTraits,
      improvementPoints: remainingImprovementPoints,
      edges: randomEdges,
      spells: [],
    };
  
    return randomCharacter;
};

export default generateRandomCharacter;