import { IWorkFlowNode } from "../interfaces";
import { useEditorStore } from "./useEditorStore";

export function useNodeMaterial(node: IWorkFlowNode) {
  const store = useEditorStore()

  return store?.materials.find(material => material.defaultConfig?.nodeType === node.nodeType)
}