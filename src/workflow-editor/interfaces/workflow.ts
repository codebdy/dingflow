export enum nodeType {
  //开始节点
  start = "start",
  //审批人
  approver = "approver",
  //抄送人？
  notifier = "notifier",
  //审计
  audit = "audit",
  //路由(条件节点)
  route = "route"
}

export interface IWorkFlowNode {
  id: string
  nodeType: nodeType
  childNode?: IWorkFlowNode
  conditionNodeList?: IWorkFlowNode[]
}

export interface IWorkflow {
  //工作流Id
  flowId: string;
  //开始节点
  childNode: IWorkFlowNode;
}