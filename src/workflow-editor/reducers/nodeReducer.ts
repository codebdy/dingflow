import { Action, ActionType, AddNodeAction, ChangeNodeAction, DeleteNodeAction } from "../actions";
import { IRouteNode, IWorkFlowNode, NodeType } from "../interfaces";

export function nodeReducer(state: IWorkFlowNode, action: Action): IWorkFlowNode {
  const deleteNodeAction = action as DeleteNodeAction
  const addNodeAction = action as AddNodeAction
  const changeNodeAction = action as ChangeNodeAction

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
    case ActionType.ADD_NODE: {
      if (state.id === addNodeAction.payload.parentId) {
        return { ...state, childNode: { ...addNodeAction.payload.node, childNode: state.childNode } }
      } else if (state.childNode) {
        return { ...state, childNode: nodeReducer(state.childNode, action) }
      }
      return state
    }
    case ActionType.CHANGE_NODE: {
      if (state.id === changeNodeAction.payload.node.id) {
        return changeNodeAction.payload.node
      }
      let childNode = state.childNode
      let newState = state
      if (state.childNode) {
        childNode = nodeReducer(state.childNode, action)
      }
      //如果childNode有变化
      if (childNode !== state.childNode) {
        newState = { ...state, childNode }
      }

      //所有condition list可能会全部刷新，体量不大，暂时不需要处理
      if (newState.nodeType === NodeType.route) {
        if (newState === state) {
          newState = { ...state }
        }
        const routeNode = newState as IRouteNode
        routeNode.conditionNodeList = routeNode.conditionNodeList.map(con => nodeReducer(con, action))
      }
      return newState
    }
  }
  return state
}