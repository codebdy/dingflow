import { useContext } from "react";
import { WorkflowEditorStoreContext } from "../contexts";

export function useEditorEngine() {
  return useContext(WorkflowEditorStoreContext)
}