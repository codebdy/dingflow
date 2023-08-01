import { Action, ActionType, DeleteNodeAction } from "../actions";
import { IWorkFlowNode } from "../interfaces";

export function nodeReducer(state: IWorkFlowNode, action: Action): IWorkFlowNode {
  const deleteNodeAction = action as DeleteNodeAction
  switch (action.type) {
    case ActionType.DELETE_NODE: {
      const idToDelete = deleteNodeAction.payload.id
      //子节点被删除（不是分支）
      if (idToDelete === state.childNode?.id) {
        return { ...state, childNode: state.childNode.childNode }
        //如果删除分支节点
      } 
      return {
        ...state,
        childNode: state.childNode ? nodeReducer(state.childNode, action) : undefined,
      }
    }
    case ActionType.CHANGE_NODE: {
      return nodeReducer(state, action)
    }
  }
  return state
}