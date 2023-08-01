import { memo } from "react"
import { WorkFlowEditorInner } from "./WorkFlowEditorInner"
import { ConfigRoot } from "./ConfigRoot"
import { WorkFlowShell } from "./WorkFlowShell"


export const WorkflowEditor = memo((props: {
  themeMode?: "dark" | "light",
}) => {
  const { themeMode } = props;
  return (
    <ConfigRoot themeMode={themeMode}>
      <WorkFlowShell mode={themeMode}>
        <WorkFlowEditorInner />
      </WorkFlowShell>
    </ConfigRoot>
  )
})