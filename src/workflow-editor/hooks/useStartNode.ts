import { useCallback, useEffect, useState } from "react"
import { IWorkFlowNode } from "../interfaces"
import { useEditorEngine } from "./useEditorEngine"

export function useStartNode() {
  const [startNode, setStartNode] = useState<IWorkFlowNode>()
  const store = useEditorEngine()

  const handleStartNodeChange = useCallback((startNode: IWorkFlowNode) => {
    setStartNode(startNode)
  }, [])

  useEffect(() => {
    const unsub = store?.subscribeStartNodeChange(handleStartNodeChange)
    return unsub
  }, [handleStartNodeChange, store])

  useEffect(() => {
    setStartNode(store?.store.getState().startNode)
  }, [store?.store])

  return startNode
}