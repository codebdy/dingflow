import { memo } from "react"
import { WorkFlowEditorInner } from "./WorkFlowEditorInner"
import { WorkFlowScope } from "../WorkflowDiagram/WorkFlowScope"
import { IThemeToken } from "../theme"
import { ILocales } from "@rxdrag/locales"

export type WorkflowEditorProps = {
  themeMode?: 'dark' | 'light',
  themeToken?: IThemeToken,
  lang?: string,
  locales?: ILocales
}

export const WorkflowEditor = memo((props: WorkflowEditorProps) => {
  const { themeMode, themeToken } = props;
  return (
    <WorkFlowScope mode={themeMode} themeToken={themeToken}>
      <WorkFlowEditorInner />
    </WorkFlowScope>
  )
})