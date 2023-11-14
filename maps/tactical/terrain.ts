import { StaticImageData } from 'next/image';

import oceanA07 from '../../assets/img/tactical/terrain/water/ocean-A07.png';
import oceanA06 from '../../assets/img/tactical/terrain/water/ocean-A06.png';

export type Terrain = {
  [key: string]: StaticImageData | Terrain;
};

export const terrain: Terrain = {
  water: {
    ocean: {
      a07: oceanA07,
      a06: oceanA06,
    },
  },
};