import { useCallback, useEffect, useState } from "react";
import { useEditorStore } from "./useEditorStore";
import { useSelectedId } from "./useSelectedId";
import { IRouteNode, IWorkFlowNode, NodeType } from "../interfaces";

export function useSelectedNode() {
  const [selectedNode, setNode] = useState<IWorkFlowNode>()
  const selectedId = useSelectedId();
  const store = useEditorStore();
  const getNode = useCallback((startNode?: IWorkFlowNode): IWorkFlowNode | undefined => {
    if (startNode?.id === selectedId && selectedId) {
      return startNode
    }
    if (startNode?.childNode) {
      const foundNode = getNode(startNode?.childNode)
      if (foundNode) {
        return foundNode
      }
    }
    if (startNode?.nodeType === NodeType.route) {
      for (const conditionNode of (startNode as IRouteNode).conditionNodeList) {
        const foundNode = getNode(conditionNode)
        if (foundNode) {
          return foundNode
        }
      }
    }
    return undefined
  }, [selectedId])

  useEffect(() => {
    setNode(getNode(store?.store.getState().startNode))
  }, [getNode, store?.store])

  return selectedNode
}