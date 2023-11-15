import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Circle, Image } from 'react-konva';
import { Box } from '@mui/system';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { maps } from '../../data/maps/tactical/maps';
import HexImage from './HexImage'

const hexWidth = 35;
const hexHeight = 72;

export default function BattleMap() {
  const [zoom, setZoom] = useState(1);
  const [stageHeight, setStageHeight] = useState(800);
  const [stageWidth, setStageWidth] = useState(800);

  const stageRef = useRef<Konva.Stage | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setStageHeight(window.innerHeight - 35);
      setStageWidth(window.innerWidth - 25);
    }
  }, []);

  const calculateHexPosition = (rowIndex: number, colIndex: number): { x: number; y: number } => {
    const x = colIndex * (3 / 2) * hexWidth;
    const y = rowIndex * hexHeight + (colIndex % 2) * (hexHeight / 2);
    return { x, y };
  };

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

        const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

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
          {maps[0].grid.map((row, rowIndex) =>
            row.map((tile, colIndex) => {
              const key = `tile--${rowIndex}${colIndex}`;
              const { x, y } = calculateHexPosition(rowIndex, colIndex);
              return <HexImage imageSource={tile ?? ''} key={key} x={x} y={y} />;
            })
          )}
        </Layer>
      </Stage>
    </Box>
  );
}