import { IWorkFlowNode } from "./workflow"

export interface INodeMaterial<IContext = any> {
  color: string
  label: string
  icon?: React.ReactElement
  //默认配置
  defaultConfig?: IWorkFlowNode
  //创建一个默认节点，跟defaultCofig只选一个
  createDefault?: (context?: IContext) => IWorkFlowNode
}
