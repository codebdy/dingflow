export enum NodeType {
  //开始节点
  start = "start",
  //审批人
  approver = "approver",
  //抄送人？
  notifier = "notifier",
  //处理人？
  audit = "audit",
  //路由(条件节点)
  route = "route"
}

export interface IWorkFlowNode {
  id?: string
  nodeType: NodeType | string //string可以用于自定义节点，暂时用不上
  childNode?: IWorkFlowNode
  conditionNodeList?: IConditionNode[]
}

export interface IConditionNode extends IWorkFlowNode {

}

export interface IWorkflow {
  //工作流Id
  flowId: string;
  //开始节点
  childNode: IWorkFlowNode;
}