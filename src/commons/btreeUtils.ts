import { InputArray } from "../interfaces/Input";
import { BTreeNode } from "../interfaces/BTree";

export const createBTree = (
  input: null | number | string | InputArray
): BTreeNode | null => {
  if (!input) return null;
  if (typeof input === "undefined") return null;
  if (Array.isArray(input)) {
    if (!input[0]) return null;

    if (typeof input[0] === "string" || typeof input[0] === "number") {
      let btnode = {
        id: input[0],
      };
      let left = createBTree(input[1]);
      let right = createBTree(input[2]);
      if (!left && !right) {
        return btnode;
      }

      return { ...btnode, left, right };
    }
  }

  return null;
};

let maxDepth = -1;
let result: BTreeNode | null;
const postOrder = (
  node: BTreeNode | null | undefined,
  depth: number
): number => {
  if (node === null || node === undefined) return depth;
  const left = postOrder(node.left, depth + 1);
  const right = postOrder(node.right, depth + 1);
  if (left === right) {
    maxDepth = Math.max(maxDepth, left);
    if (maxDepth === left) {
      result = node;
    }
  }
  return Math.max(left, right);
};

export const SmallestSubTree = (bTree: BTreeNode) => {
  result = null;
  maxDepth = -1;
  postOrder(bTree, 0);
  return result;
};

const postOrderHash = (node: BTreeNode | null | undefined) => {
  if (node === null || node === undefined) return null;
  postOrderHash(node.left);
  postOrderHash(node.right);
  node.hash = "d" + Math.random();
  return node;
};

export const hashTree = (bTree: BTreeNode) => {
  return postOrderHash(bTree);
};
