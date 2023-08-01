import { Button, Space } from "antd"
import { memo, useCallback, useState } from "react"
import { WorkflowEditor } from "../workflow-editor/WorkflowEditor"
import { ShellContainer } from "./ShellContainer"
import { styled } from "styled-components"

const Toolbar = styled.div`
  height: 56px;
  border-bottom: solid 1px rgba(0,0,0, 0.1);
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
  box-sizing: border-box;
`

export const Example = memo(() => {
  const [themeMode, setThemeMode] = useState<"dark" | "light">("light")

  const handleToggleTheme = useCallback(() => {
    setThemeMode(mode => mode === "light" ? "dark" : "light")
  }, [])
  
  return (
    <ShellContainer>
      <Toolbar>
        <span>
          工作流演示
        </span>
        <Space>
          <Button onClick={handleToggleTheme}>主题切换</Button>
        </Space>
      </Toolbar>
      <WorkflowEditor themeMode={themeMode} />
    </ShellContainer>
  )
})