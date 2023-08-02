import { IWorkFlowNode } from "./workflow"

export interface INodeMaterial {
  color: string
  label: string
  icon?: React.ReactElement
  defaultConfig: IWorkFlowNode
}
