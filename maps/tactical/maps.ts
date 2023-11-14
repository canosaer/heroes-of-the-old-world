const terrainPath = '/assets/img/tactical/terrain/';
const t = terrainPath

interface BattleMap {
  name: string;
  grid: (string | null)[][];
}

export const maps: BattleMap[] = [
  {
    name: 'arena',
    grid: [
      [`${t}water/ocean-A07.png`, `${t}water/ocean-A07.png`, `${t}water/ocean-A06.png`, `${t}water/ocean-A07.png`, `${t}water/ocean-A07.png`],
      [`${t}water/ocean-A07.png`, `${t}water/ocean-A06.png`, `${t}water/ocean-A06.png`, `${t}water/ocean-A06.png`, `${t}water/ocean-A07.png`],
    ]
  }
];