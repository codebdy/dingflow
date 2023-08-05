import { createContext } from "react";
import { EditorEngine } from "./classes";

export const WorkflowEditorStoreContext = createContext<EditorEngine | undefined>(undefined)