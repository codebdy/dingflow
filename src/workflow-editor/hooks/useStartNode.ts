import { useCallback, useEffect, useState } from "react"
import { IWorkFlowNode } from "../interfaces"
import { useEditorStore } from "./useEditorStore"
import { ActionType, SetStartNodeAction } from "../actions"

export function useStartNode() {
  const [startNode, setStartNode] = useState<IWorkFlowNode>()
  const store = useEditorStore()

  const handleStartNodeChange = useCallback((startNode: IWorkFlowNode) => {
    setStartNode(startNode)
  }, [])

  const doSetStartNode = useCallback((startNode: IWorkFlowNode) => {
    const setAction: SetStartNodeAction = { type: ActionType.SET_START_NODE, payload: { node: startNode } }
    store?.dispatch(setAction)
  }, [store])

  useEffect(() => {
    const unsub = store?.subscribeStartNodeChange(handleStartNodeChange)
    return unsub
  }, [handleStartNodeChange, store])

  useEffect(() => {
    setStartNode(store?.store.getState().startNode)
  }, [store?.store])

  return { startNode, setStartNode: doSetStartNode }
}