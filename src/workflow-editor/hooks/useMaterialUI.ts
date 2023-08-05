import { IWorkFlowNode } from "../interfaces";
import { useEditorStore } from "./useEditorStore";

export function useMaterialUI(node?: IWorkFlowNode) {
  const store = useEditorStore()

  return store?.materialUis?.[node?.nodeType || ""]
}