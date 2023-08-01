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
  display: flex;
  justify-content: center;
  color: ${props => props.theme.token?.colorTextSecondary};
`

const NavIcon = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: solid 1px ${props => props.theme.token?.colorTextSecondary};
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-1px);
  font-size: 12px;
  &.selected{
    background-color: ${props => props.theme.token?.colorPrimary};
    border-color: ${props => props.theme.token?.colorPrimary};
    color: #fff;
  }
`

export const WorkflowEditor = memo(() => {
  return (
    <Container className="workflow-editor-shell">
      <Toolbar>
        <ToolbarContent>
          <Button type="text"><NavIcon role="img" className="anticon">1</NavIcon> 基础设置</Button>
          <Button type="text"><NavIcon role="img" className="anticon">2</NavIcon>表单设计</Button>
          <Button type="link"><NavIcon role="img" className="anticon selected">3</NavIcon>流程设计</Button>
          <Button type="text"><NavIcon role="img" className="anticon">4</NavIcon>高级设计</Button>
        </ToolbarContent>
        <Space>
          <Button type="primary">发布</Button>
        </Space>
      </Toolbar>
      <div>哈哈</div>
    </Container>
  )
})