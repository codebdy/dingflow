import { useContext } from "react";
import { WorkflowEditorStoreContext } from "../contexts";

export function useEditorStore() {
  return useContext(WorkflowEditorStoreContext)
}