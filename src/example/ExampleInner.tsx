import { memo, useState } from "react"
import styled from "styled-components"
import { Button, Space } from "antd"
import { ShellContainer } from "./ShellContainer"
import { WorkflowEditor } from "../workflow-editor/WorkflowEditor"

const Toolbar = styled.div`
  height: 80px;
  border-bottom: solid 1px ${props => props.theme.token?.colorBorder};
  display: flex;
  align-items: center;
  padding: 8px;
`

export const ExampleInner = memo((
  props: {
    toggleTheme: () => void
  }
) => {
  const { toggleTheme } = props
  const [inputValue, setInputValue] = useState<any>()


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