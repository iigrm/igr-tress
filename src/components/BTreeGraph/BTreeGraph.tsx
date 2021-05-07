import React, { useEffect, useRef, useState } from "react";
import { BTreeNode } from "../BTreeNode/BTreeNode";
import { BTreeNode as BTreeNodeInterface } from "../../interfaces/BTree";
import { SmallestSubTree, hashTree } from "../../commons/btreeUtils";

type Props = {
  input: string;
};
export const BTreeGraph: React.FC<Props> = (props) => {
  const bTree: BTreeNodeInterface | null = hashTree(JSON.parse(props.input));
  let smallbTree: BTreeNodeInterface | null = null;

  if (bTree) {
    smallbTree = SmallestSubTree(bTree);
  }

  const svgRef = useRef<SVGSVGElement>(null);
  const [initialPos, setInitialPos] = useState<{ x: number; y: number }>();
  useEffect(() => {
    if (svgRef.current) {
      const clientRects = (svgRef.current as SVGSVGElement).getClientRects();
      setInitialPos({ y: 0, x: clientRects[0].width / 2 });
    }
  }, [svgRef]);
  return (
    <div style={{ padding: "20px" }}>
      <svg ref={svgRef} height="400px" width="600px">
        {initialPos && bTree && smallbTree && (
          <>
            <BTreeNode
              x={initialPos.x}
              y={initialPos.y}
              initial
              bTreeInput={bTree}
              depth={0}
              smallestBTree={smallbTree}
            />
            )
          </>
        )}
      </svg>
    </div>
  );
};
