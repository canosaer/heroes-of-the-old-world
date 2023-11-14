import { terrain, Terrain } from './terrain';
import { StaticImageData } from 'next/image';

const mapTerrainToImagePath = (terrainPath: string): StaticImageData | null => {
  const [terrainType, terrainVariant] = terrainPath.split('.');
  const terrainMapping: Terrain | StaticImageData | undefined = terrain[terrainType];

  if (!terrainMapping) {
    console.error(`Unknown terrain type: ${terrainType}`);
    return null;
  }

  if (typeof terrainMapping === 'string') {
    console.error(`Invalid terrain mapping: ${terrainType}`);
    return null;
  }

  const nestedTerrainMapping: Terrain | undefined = terrainMapping as Terrain;

  if (!nestedTerrainMapping) {
    console.error(`Invalid nested terrain mapping: ${terrainType}`);
    return null;
  }

  const terrainVariantMapping: StaticImageData | Terrain | undefined = nestedTerrainMapping[terrainVariant];

  if (!terrainVariantMapping) {
    console.error(`Unknown terrain variant: ${terrainVariant}`);
    return null;
  }

  return terrainVariantMapping as StaticImageData;
};

export const maps: (StaticImageData | null)[][] = [
  ['water.ocean.a07', 'water.ocean.a07', 'dirt.1', 'water.ocean.a07', 'water.ocean.a07'],
  ['water.ocean.a07', 'water.ocean.a06', 'dirt.2', 'water.ocean.a06', 'water.ocean.a07'],
  ['dirt.3', 'dirt.3', 'water.ocean.a06', 'dirt.3', 'dirt.3'],
].map(row => row.map(tile => mapTerrainToImagePath(tile)));