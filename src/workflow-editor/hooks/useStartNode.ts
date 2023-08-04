import { useCallback, useEffect, useState } from "react"
import { IWorkFlowNode } from "../interfaces"
import { useEditorStore } from "./useEditorStore"

export function useStartNode() {
  const [startNode, setStartNode] = useState<IWorkFlowNode>()
  const store = useEditorStore()

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