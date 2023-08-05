import { IWorkFlowNode } from "./workflow"

export interface INodeMaterial<Context = any> {
  color: string
  label: string
  icon?: React.ReactElement
  placeholder?: string
  //浅色显示placeholder
  placeholderSecondary?: boolean,
  //默认配置
  defaultConfig?: IWorkFlowNode
  //创建一个默认节点，跟defaultCofig只选一个
  createDefault?: (context?: Context) => IWorkFlowNode
  //从物料面板隐藏，比如发起人节点
  hidden?: boolean
}


export interface IMaterialUI<FlowNode extends IWorkFlowNode, Settings = any, Context = any> {
  viewContent?: (node: FlowNode, context?: Context) => React.ReactNode
  //属性面板设置组件
  settingsPanel?: React.FC<{ value: Settings, onChange: (value: Settings) => void }>
}

export interface IMaterialUIs {
  [nodeType: string]: IMaterialUI<any> | undefined
}