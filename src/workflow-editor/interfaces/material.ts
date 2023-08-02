import { NodeType } from "./workflow"

export interface INodeMaterial {
  nodeType?: NodeType | string
  color: string
  label: string
  icon?: React.ReactElement
}