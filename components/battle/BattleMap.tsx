import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import { Box } from '@mui/system';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { maps } from '../../maps/tactical/maps';
import { terrain } from '../../maps/tactical/terrain';

export default function BattleMap() {
  const [zoom, setZoom] = useState(1);
  const [stageHeight, setStageHeight] = useState(800);
  const [stageWidth, setStageWidth] = useState(800);

  const stageRef = useRef<Konva.Stage | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setStageHeight(window.innerHeight - 35)
      setStageWidth(window.innerWidth - 25)
    }
  }, []);

  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    const scaleBy = 1.05;
    const stage = stageRef.current;

    if (stage) {
      e.evt.preventDefault();

      const oldScale = stage.scaleX();

      const pointer = stage.getPointerPosition();
      if (pointer) {
        const mousePointTo = {
          x: (pointer.x - stage.x()) / oldScale,
          y: (pointer.y - stage.y()) / oldScale,
        };

        const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        setZoom(newScale);

        const newPos = {
          x: pointer.x - mousePointTo.x * newScale,
          y: pointer.y - mousePointTo.y * newScale,
        };

        stage.position(newPos);
        stage.scale({ x: newScale, y: newScale });
        stage.batchDraw();
      }
    }
  };

  const handleDragMove = (e: KonvaEventObject<DragEvent>) => {
    // Update the stage position during drag
    const stage = e.target.getStage();
    if (stage) {
      const scale = stage.scaleX();
      const dx = e.evt.movementX / scale;
      const dy = e.evt.movementY / scale;

      stage.x(stage.x() + dx);
      stage.y(stage.y() + dy);
      stage.batchDraw();
    }
  };

  return (
    <Box className="battle-map" component="main">
            <Stage
              className="stage"
              width={stageWidth}
              height={stageHeight}
              scaleX={zoom}
              scaleY={zoom}
              ref={stageRef}
              onWheel={handleWheel}
              draggable
              onDragMove={handleDragMove}
            >
        <Layer>
          <Circle x={200} y={100} radius={50} fill="green" />
        </Layer>
      </Stage>
    </Box>
  )
}

// const BattleMap: React.FC = () => {
//   const stageRef = useRef<Konva.Stage | null>(null);
//   const battleMap: BattleMap = {};
//   const tileMapArrangement: (string | null)[][] = maps;

//   useEffect(() => {
//     const drawTileMap = (layer: Konva.Layer) => {
//       for (let row = 0; row < tileMapArrangement.length; row++) {
//         for (let col = 0; col < tileMapArrangement[row].length; col++) {
//           const x = col * (50 * 1.5 + 5);
//           const y = row * (50 * Math.sqrt(3) + 5 * 1.5);

//           const hexagonString = tileMapArrangement[row][col];
//           const hexagonImagePath = hexagonString !== null ? battleMap[hexagonString] : null;

//           if (hexagonImagePath) {
//             const hexagonKonvaImage = new window.Konva.Image;
//             hexagonKonvaImage.src = hexagonImagePath;

//             const konvaImage = new window.Konva.Image({
//               x: x - 50,
//               y: y - 50,
//               image: hexagonKonvaImage,
//               width: 100,
//               height: 100,
//             });

//             layer.add(konvaImage);
//           }
//         }
//       }
//     };

//     const layer = new window.Konva.Layer();
//     drawTileMap(layer);

//     const stage = stageRef.current?.getStage();
//     if (stage) {
//       stage.add(layer);
//     }
//   }, [battleMap, tileMapArrangement]);

//   return (
//     <Stage width={800} height={600} ref={stageRef}>
//       <Layer />
//     </Stage>
//   );
// };

// export default BattleMap;