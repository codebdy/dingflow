import { Store } from "redux"
import { IState } from "../interfaces/state"
import { configureStore } from "@reduxjs/toolkit"
import { mainReducer } from "../reducers"
import { SelectedListener, StartNodeListener } from "../interfaces/listeners"
import { IConditionNode, IRouteNode, IWorkFlowNode, NodeType } from "../interfaces"
import { Action, ActionType, AddNodeAction, ChangeNodeAction, DeleteNodeAction, SelectNodeAction, SetZoomAction, UnRedoListAction } from "../actions"
import { INodeMaterial } from "../interfaces/material"
import { createUuid } from "../utils/create-uuid"

export type Translate = (msg: string) => string | undefined

export class EditorStore {
  store: Store<IState>
  t?: Translate
  materials: INodeMaterial[] = []
  constructor(debugMode?: boolean,) {
    this.store = makeStoreInstance(debugMode || false)
  }

  dispatch = (action: Action) => {
    this.store.dispatch(action)
  }

  // setZoom = (zoom: number) => {
  //   const zoomAcion: SetZoomAction = {
  //     type: ActionType.SET_ZOOM,
  //     payload: {
  //       zoom
  //     }
  //   }

  //   this.dispatch(zoomAcion)
  // }

  backup = () => {
    const state = this.store.getState();
    const setUndoListAction: UnRedoListAction = {
      type: ActionType.SET_UNOLIST,
      payload: {
        list: [...state.undoList, { startNode: state.startNode }]
      }
    }
    this.dispatch(setUndoListAction)
    const setRedoListAction: UnRedoListAction = {
      type: ActionType.SET_UNOLIST,
      payload: {
        list: []
      }
    }
    this.dispatch(setRedoListAction)
  }

  changeNode(node: IWorkFlowNode) {
    this.backup()
    const changeNodeAction: ChangeNodeAction = {
      type: ActionType.CHANGE_NODE,
      payload: {
        node
      }
    }

    this.dispatch(changeNodeAction)
  }

  addCondition(node: IRouteNode, condition: IConditionNode) {
    const newNode: IRouteNode = { ...node, conditionNodeList: [...node.conditionNodeList, condition] };
    this.changeNode(newNode)
  }

  removeCondition(node: IRouteNode, conditionId: string) {
    this.backup()
    const newNode: IRouteNode = { ...node, conditionNodeList: node.conditionNodeList.filter(co => co.id !== conditionId) };
    this.changeNode(newNode)
  }

  //条件左移一位
  transConditionOneStepToLeft(node: IRouteNode, index: number) {
    if (index > 0) {
      this.backup()
      const newConditions = [...node.conditionNodeList]
      newConditions[index] = newConditions.splice(index - 1, 1, newConditions[index])[0]
      const newNode: IRouteNode = { ...node, conditionNodeList: newConditions };
      this.changeNode(newNode)
    }
  }

  //条件右移一位
  transConditionOneStepToRight(node: IRouteNode, index: number) {
    const newConditions = [...node.conditionNodeList]
    if (index < newConditions.length - 1) {
      this.backup()
      newConditions[index] = newConditions.splice(index + 1, 1, newConditions[index])[0]
      const newNode: IRouteNode = { ...node, conditionNodeList: newConditions };
      this.changeNode(newNode)
    }
  }

  //克隆一个条件
  cloneCondition(node: IRouteNode, condition: IConditionNode) {
    const newCondition = JSON.parse(JSON.stringify(condition))
    newCondition.name = newCondition.name + this.t?.("ofCopy")
    //重写Id
    resetId(newCondition)
    const index = node.conditionNodeList.indexOf(condition)
    const newList = [...node.conditionNodeList]
    newList.splice(index + 1, 0, newCondition)
    const newNode: IRouteNode = { ...node, conditionNodeList: newList };
    this.changeNode(newNode)
  }

  addNode(parentId: string, node: IWorkFlowNode) {
    this.backup()
    const addAction: AddNodeAction = { type: ActionType.ADD_NODE, payload: { parentId, node } }
    this.store.dispatch(addAction)
  }

  selectNode(id: string | undefined) {
    const selectAction: SelectNodeAction = { type: ActionType.SELECT_NODE, payload: { id } }
    this.store.dispatch(selectAction)
  }

  removeNode(id?: string) {
    if (id) {
      this.backup()
      const removeAction: DeleteNodeAction = { type: ActionType.DELETE_NODE, payload: { id } }
      this.store.dispatch(removeAction)
    }
  }

  subscribeStartNodeChange(listener: StartNodeListener) {
    let previousState: IWorkFlowNode | undefined = this.store.getState().startNode

    const handleChange = () => {
      const nextState = this.store.getState().startNode
      if (nextState === previousState) {
        return
      }
      previousState = nextState
      listener(nextState)
    }

    return this.store.subscribe(handleChange)
  }


  subscribeSelectedChange(listener: SelectedListener) {
    let previousState: string | undefined = this.store.getState().selectedId

    const handleChange = () => {
      const nextState = this.store.getState().selectedId
      if (nextState === previousState) {
        return
      }
      previousState = nextState
      listener(nextState)
    }

    return this.store.subscribe(handleChange)
  }
}

function resetId(node: IWorkFlowNode) {
  node.id = createUuid()
  if (node.childNode) {
    resetId(node.childNode)
  }
  if (node.nodeType === NodeType.route) {
    for (const condition of (node as IRouteNode).conditionNodeList) {
      resetId(condition)
    }
  }
}

function makeStoreInstance(debugMode: boolean): Store<IState> {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  const reduxDevTools =
    typeof window !== 'undefined' &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
  return configureStore(
    {
      reducer: mainReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
      devTools: debugMode &&
        reduxDevTools &&
        reduxDevTools({
          name: 'dnd-core',
          instanceId: 'dnd-core',
        }),
    }
  )
}
