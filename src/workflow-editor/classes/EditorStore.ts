import { Store } from "redux"
import { IState } from "../interfaces/state"
import { configureStore } from "@reduxjs/toolkit"
import { mainReducer } from "../reducers"
import { StartNodeListener } from "../interfaces/listeners"
import { IWorkFlowNode } from "../interfaces"
import { Action } from "../actions"

export class EditorStore{
  store: Store<IState>
  constructor(debugMode?: boolean,) {
    this.store = makeStoreInstance(debugMode || false)
  }

  dispatch = (action: Action) => {
    this.store.dispatch(action)
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
