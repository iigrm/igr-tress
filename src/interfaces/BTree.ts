export interface BTreeNode {
  id: string | number;
  left?: BTreeNode | null;
  right?: BTreeNode | null;
  height?: number;
  hash?: string;
}
