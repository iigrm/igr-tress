import React from "react";
import { BTreeNode as BTreeNodeInterface } from "../../interfaces/BTree";
type Props = {
  x: number;
  y: number;
  initial: boolean;
  left?: boolean;
  right?: boolean;
  bTreeInput: BTreeNodeInterface | null;
  depth: number;
  smallestBTree: BTreeNodeInterface | null;
};

export const BTreeNode: React.FC<Props> = (props) => {
  if (!props.bTreeInput) {
    return null;
  }

  const RADIUS = 10;
  const STEP_X = 60;
  const STEP_Y = 60;
  const isSmallestSubtree = () =>
    props.bTreeInput?.hash === props.smallestBTree?.hash ||
    props.smallestBTree?.right?.hash === props.bTreeInput?.hash ||
    props.smallestBTree?.left?.hash === props.bTreeInput?.hash;
  return (
    <>
      <circle
        cx={props.x}
        cy={props.y + RADIUS + 1}
        r={RADIUS}
        stroke={isSmallestSubtree() ? "#a0dcdc" : "#000"}
        fill={isSmallestSubtree() ? "green" : "#fff"}
      />
      <text
        x={props.x - 3}
        y={props.y + RADIUS + 4}
        r={RADIUS}
        fill={isSmallestSubtree() ? "#fff" : "#000"}
        style={{ fontSize: "9px" }}
      >
        {props.bTreeInput.id}
      </text>
      {!props.initial && props.left && (
        <line
          x1={props.x}
          x2={props.x + STEP_X - props.depth * 10}
          y1={props.y + 1}
          y2={props.y - STEP_Y + RADIUS * 2}
          stroke={
            props.smallestBTree?.right?.hash === props.bTreeInput?.hash ||
            props.smallestBTree?.left?.hash === props.bTreeInput?.hash
              ? "green"
              : "#000"
          }
        />
      )}
      {!props.initial && props.right && (
        <line
          x1={props.x}
          x2={props.x - STEP_X + props.depth * 10}
          y1={props.y + 1}
          y2={props.y - STEP_Y + RADIUS * 2}
          stroke={
            props.smallestBTree?.right?.hash === props.bTreeInput?.hash ||
            props.smallestBTree?.left?.hash === props.bTreeInput?.hash
              ? "green"
              : "#000"
          }
        />
      )}
      {props.bTreeInput.left && (
        <BTreeNode
          x={props.x - STEP_X + props.depth * 15}
          y={props.y + STEP_Y}
          initial={false}
          bTreeInput={props.bTreeInput.left}
          left
          depth={props.depth + 1}
          smallestBTree={props.smallestBTree}
        />
      )}
      {props.bTreeInput.right && (
        <BTreeNode
          x={props.x + STEP_X - props.depth * 15}
          y={props.y + STEP_Y}
          initial={false}
          bTreeInput={props.bTreeInput.right}
          right
          depth={props.depth + 1}
          smallestBTree={props.smallestBTree}
        />
      )}
    </>
  );
};
