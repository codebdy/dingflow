import { IWorkFlowNode, NodeType } from "./workflow";

//操作快照
export interface ISnapshot {
  startNode: IWorkFlowNode,
  validated?: boolean,
}

export interface IErrors {
  [nodeId: string]: string | undefined
}

export interface IState {
  //是否被修改，该标识用于提示是否需要保存
  changeFlag: boolean,
  //撤销快照列表
  undoList: ISnapshot[],
  //重做快照列表
  redoList: ISnapshot[],
  //zoom: number,
  startNode: IWorkFlowNode,
  selectedId?: string,
  validated?: boolean,
  errors: IErrors,
}

export const initialState: IState = {
  changeFlag: false,
  undoList: [],
  redoList: [],
  startNode: {
    id: "start",
    nodeType: NodeType.start,
  },
  errors: {}
}
