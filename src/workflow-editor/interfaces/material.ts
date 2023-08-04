import { IWorkFlowNode } from "./workflow"

export interface INodeMaterial<Settings = any, IContext = any> {
  color: string
  label: string
  icon?: React.ReactElement
  placeholder?: string
  //浅色显示placeholder
  placeholderSecondary?: boolean,
  //默认配置
  defaultConfig?: IWorkFlowNode
  //创建一个默认节点，跟defaultCofig只选一个
  createDefault?: (context?: IContext) => IWorkFlowNode
  //属性面板设置组件
  settingsPanel?: React.FC<{ value: Settings, onChange: (value: Settings) => void }>
  //从物料面板隐藏，比如发起人节点
  hidden?: boolean
}
