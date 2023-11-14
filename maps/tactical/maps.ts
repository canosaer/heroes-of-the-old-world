import { terrain, Terrain } from './terrain';
  
const mapTerrainToImagePath = (terrainPath: string): string | null => {
const [terrainType, terrainVariant] = terrainPath.split('.');
const terrainMapping: Terrain | string | undefined = terrain[terrainType];

if (!terrainMapping) {
    console.error(`Unknown terrain type: ${terrainType}`);
    return null;
}

if (typeof terrainMapping === 'string') {
    // If it's a string, it's the final path
    return terrainMapping;
}

const nestedTerrainMapping: Terrain | undefined = terrainMapping as Terrain;

if (!nestedTerrainMapping) {
    console.error(`Invalid nested terrain mapping: ${terrainType}`);
    return null;
}

const terrainVariantMapping: string | Terrain | undefined = nestedTerrainMapping[terrainVariant];

if (!terrainVariantMapping) {
    console.error(`Unknown terrain variant: ${terrainVariant}`);
    return null;
}

if (typeof terrainVariantMapping === 'string') {
    // If it's a string, it's the final path
    return terrainVariantMapping;
}

console.error(`Invalid terrain variant mapping: ${terrainVariant}`);
    return null;
};

export const maps: (string | null)[][] = [
    ['water.ocean.a07', 'water.ocean.a07', 'dirt.1', 'water.ocean.a07', 'water.ocean.a07'],
    ['water.ocean.a07', 'water.ocean.a06', 'dirt.2', 'water.ocean.a06', 'water.ocean.a07'],
    ['dirt.3', 'dirt.3', 'water.ocean.a06', 'dirt.3', 'dirt.3'],
  ].map(row =>
    row.map(tile => mapTerrainToImagePath(tile))
  );