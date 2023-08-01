import { Button, Space } from "antd"
import { memo } from "react"
import { styled } from "styled-components"

const Container = styled.div`
  flex:1;
  display: flex;
  flex-flow: column;
`
const Toolbar = styled.div`
  height: 48px;
  border-bottom: solid 1px ${props => props.theme.token?.colorBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px;
`

const ToolbarContent = styled.div`
  flex:1;
`

export const WorkflowEditor = memo(() => {
  return (
    <Container className="workflow-editor-shell">
      <Toolbar>
        <ToolbarContent />
        <Space>
          <Button type="primary">发布</Button>
        </Space>
      </Toolbar>
      <div>哈哈</div>
    </Container>
  )
})