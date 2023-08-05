import { memo } from "react"
import { WorkFlowEditorInner } from "./WorkFlowEditorInner"
import { ILocales } from "@rxdrag/locales"
import { IThemeToken } from "../../workflow-editor"
import { IMaterialUIs, WorkFlowScope } from "../../workflow-editor/"

export type WorkflowEditorProps = {
  themeMode?: 'dark' | 'light',
  themeToken?: IThemeToken,
  lang?: string,
  locales?: ILocales,
  materialUis?: IMaterialUIs,
}

export const WorkflowEditor = memo((props: WorkflowEditorProps) => {
  const { themeMode, themeToken, lang, locales, materialUis, ...other } = props;
  return (
    <WorkFlowScope
      mode={themeMode}
      themeToken={themeToken}
      lang={lang}
      locales={locales}
      materialUis = {materialUis}
    >
      <WorkFlowEditorInner {...other} />
    </WorkFlowScope>
  )
})