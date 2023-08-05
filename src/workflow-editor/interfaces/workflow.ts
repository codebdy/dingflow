export enum NodeType {
  //开始节点
  start = "start",
  //审批人
  approver = "approver",
  //抄送人？
  notifier = "notifier",
  //处理人？
  audit = "audit",
  //路由(条件节点)，下面包含分支节点
  route = "route",
  //分支节点
  condition = "condition",
}

export interface IWorkFlowNode<Config = unknown> {
  id?: string
  nodeType: NodeType | string //string可以用于自定义节点，暂时用不上
  name?: string
  desc?: string
  childNode?: IWorkFlowNode
  const?: Config
}

export interface IRouteNode extends IWorkFlowNode {
  conditionNodeList: IConditionNode[]
}

export enum OperatorType {
  Gt = "gt",
}

//这个命名需要优化
export interface ICondition {
  fieldEnName?: string,
  fieldName?: string,
  fieldValue?: unknown,
  operatorType?: OperatorType,
}

export interface IConditionNode extends IWorkFlowNode {
  flowNodeConditionVOList?: ICondition[]
}

export interface IWorkflow {
  //工作流Id
  flowId: string;
  //开始节点
  childNode: IWorkFlowNode;
}