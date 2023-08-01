import { memo } from "react"
import { WorkFlowEditorInner } from "./WorkFlowEditorInner"
import { ConfigRoot } from "./ConfigRoot"
import { WorkFlowShell } from "./WorkFlowShell"
import { IThemeToken } from "../theme"


export const WorkflowEditor = memo((props: {
  themeMode?: "dark" | "light",
  themeToken?: IThemeToken,
}) => {
  const { themeMode, themeToken } = props;
  return (
    <ConfigRoot themeMode={themeMode}>
      <WorkFlowShell mode={themeMode} themeToken={themeToken}>
        <WorkFlowEditorInner />
      </WorkFlowShell>
    </ConfigRoot>
  )
})