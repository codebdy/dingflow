import { Action, ActionType, SetStartNodeAction } from "../actions";
import { IWorkFlowNode } from "../interfaces";
import { childNodeReducer } from "./childNodeReducer";

export function startNodeReducer(state: IWorkFlowNode, action: Action): IWorkFlowNode {
  switch (action.type) {
    case ActionType.SET_START_NODE: {
      return (action as SetStartNodeAction).payload.node
    }
    case ActionType.DELETE_NODE: {
      return {
        ...state,
        childNode: state.childNode ? childNodeReducer(state.childNode, action) : undefined,
      }
    }
  }
  return state
}