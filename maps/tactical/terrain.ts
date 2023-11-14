const terrainPath = '../../assets/img/tactical/terrain'

type TerrainObject = {
    [key: string]: TerrainObject | string;
  };
  
  export type Terrain = {
    [key: string]: string | Terrain;
  };
  
  export const terrain: Terrain = {
    water: {
      ocean: {
        a07: `${terrainPath}/water/ocean-A07.png`,
        a06: `${terrainPath}/water/ocean-A06.png`,
      },
    },
  };