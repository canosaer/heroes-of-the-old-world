import React, { useRef, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import { maps } from '../../maps/tactical/maps';
import Konva from "konva";

type BattleMap = Record<string, string>;

const HexagonalTileMap: React.FC = () => {
  const stageRef = useRef<Konva.Stage | null>(null);
  const battleMap: BattleMap = {};
  const tileMapArrangement: (string | null)[][] = maps;

  useEffect(() => {
    const drawTileMap = (layer: Konva.Layer) => {
      for (let row = 0; row < tileMapArrangement.length; row++) {
        for (let col = 0; col < tileMapArrangement[row].length; col++) {
          const x = col * (50 * 1.5 + 5);
          const y = row * (50 * Math.sqrt(3) + 5 * 1.5);

          const hexagonString = tileMapArrangement[row][col];
          const hexagonImagePath = hexagonString !== null ? battleMap[hexagonString] : null;

          if (hexagonImagePath) {
            const hexagonKonvaImage = new window.Konva.Image;
            hexagonKonvaImage.src = hexagonImagePath;

            const konvaImage = new window.Konva.Image({
              x: x - 50,
              y: y - 50,
              image: hexagonKonvaImage,
              width: 100,
              height: 100,
            });

            layer.add(konvaImage);
          }
        }
      }
    };

    const layer = new window.Konva.Layer();
    drawTileMap(layer);

    const stage = stageRef.current?.getStage();
    if (stage) {
      stage.add(layer);
    }
  }, [battleMap, tileMapArrangement]);

  return (
    <Stage width={800} height={600} ref={stageRef}>
      <Layer />
    </Stage>
  );
};

export default HexagonalTileMap;