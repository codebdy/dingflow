import { memo } from "react"
import styled from "styled-components"
import { Button, Space } from "antd"
import { ShellContainer } from "./ShellContainer"
import { WorkflowEditor } from "../workflow-editor/WorkflowEditor"

const Toolbar = styled.div`
  height: 56px;
  border-bottom: solid 1px ${props => props.theme.token?.colorBorder};
  display: flex;
  //align-items: center;
  padding: 8px;
  flex-grow: 0;
`

export const ExampleInner = memo((
  props: {
    toggleTheme: () => void
  }
) => {
  const { toggleTheme } = props

  return (
    <ShellContainer>
      <Toolbar>
        <Space>
          <Button onClick={toggleTheme}>主题切换</Button>
        </Space>
      </Toolbar>
      <WorkflowEditor />
    </ShellContainer>
  )
})