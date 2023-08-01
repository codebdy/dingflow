import { createContext } from "react";
import { EditorStore } from "./classes";

export const WorkflowEditorStoreContext = createContext<EditorStore | undefined>(undefined)