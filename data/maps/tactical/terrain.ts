const terrainPath = '../../assets/img/tactical/terrain';

export type Terrain = {
  [key: string]: string | Terrain;
};

const resolveTerrainUrls = (terrain: Terrain, basePath: string): Terrain => {
  const resolvedTerrain: Terrain = {};
  
  for (const key in terrain) {
    if (typeof terrain[key] === 'string') {
      resolvedTerrain[key] = `${basePath}/${terrain[key]}`;
    } else if (typeof terrain[key] === 'object') {
      resolvedTerrain[key] = resolveTerrainUrls(terrain[key] as Terrain, `${basePath}/${key}`);
    }
  }

  return resolvedTerrain;
};

export const terrain: Terrain = resolveTerrainUrls({
  water: {
    ocean: {
      a07: 'water/ocean-A07.png',
      a06: 'water/ocean-A06.png',
    },
  },
}, terrainPath);