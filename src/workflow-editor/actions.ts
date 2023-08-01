import { IConditionNode, IWorkFlowNode } from "./interfaces";
import { ISnapshot } from "./interfaces/state";

export enum ActionType {
  SET_CHANGE_FLAG = "workflow/SET_CHANGE_FLAG",
  DELETE_NODE = "workflow/DELETE_NODE",
  DELETE_CONDITION = "workflow/DELETE_CONDITION",
  ADD_NODE = "workflow/ADD_NODE",
  ADD_CONDITION = "workflow/ADD_CONDITION",
  BACKUP = 'workflow/BACKUP',
  SET_REDOLIST = 'workflow/SET_REDOLIST',
  SET_UNOLIST = 'workflow/SET_UNOLIST',
  SET_START_NODE = 'workflow/SET_START_NODE',
  CHANGE_NODE = 'workflow/CHANGE_NODE',
  SET_ZOOM = 'workflow/SET_ZOOM',
}

export interface Action {
  type: ActionType,
}

export interface DeleteNodePayload {
  id: string,
}

export interface DeleteNodeAction extends Action {
  payload: DeleteNodePayload
}

export interface AddNodePayLoad {
  parentId: string,
  node: IWorkFlowNode,
}

export interface AddNodeAction extends Action {
  payload: AddNodePayLoad
}

export interface AddConditionPayLoad {
  nodeId: string,
  conditionNode: IConditionNode,
}

export interface AddConditionAction extends Action {
  payload: AddConditionPayLoad
}

export interface DeleteConditionPayLoad {
  conditionId: string,
}

export interface DeleteConditionAction extends Action {
  payload: DeleteConditionPayLoad
}


export interface UnRedoListPayLoad {
  list: ISnapshot[]
}

export interface UnRedoListAction extends Action {
  payload: UnRedoListPayLoad
}

export interface BackupAction extends Action {
  payload: UnRedoListPayLoad
}

export interface SetChangeFlagPayload {
  changeFlag: boolean
}

export interface SetChangeFlagAction extends Action {
  payload: SetChangeFlagPayload
}

export interface SetZoomActionPayload {
  zoom: number
}

export interface SetZoomAction extends Action {
  payload: SetZoomActionPayload
}

export interface ChangeNodePayload {
  node: IWorkFlowNode
}

export interface ChangeNodeAction extends Action {
  payload: ChangeNodePayload
}

export interface SetStartNodeAction extends Action {
  payload: ChangeNodePayload
}
