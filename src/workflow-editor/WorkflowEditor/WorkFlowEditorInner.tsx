import { LeftOutlined, RocketOutlined } from "@ant-design/icons"
import { Avatar, Button, Space } from "antd"
import { memo } from "react"
import { styled } from "styled-components"
import { ZoomBar } from "../ZoomBar"
import { StartNode } from "../nodes/StartNode"

const Container = styled.div`
  flex:1;
  display: flex;
  flex-flow: column;
  background-color: ${props => props.theme.token?.colorBgBase};
  color: ${props => props.theme.token?.colorText};
`
const Toolbar = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px 16px;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.03);
  z-index: 1;
  background-color: ${props => props.theme.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : undefined};
`
const ToolbarTitle = styled.div`
  display: flex;
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

const Canvas = styled.div`
  flex: 1;
  background-color: ${props => props.theme.mode === "light" ? "#f5f5f7" : undefined} ;
  padding: 56px 16px;
  position: relative;
  cursor: grab;//grabbing
`

export const WorkFlowEditorInner = memo((props: {
}) => {
  return (
    <Container className="workflow-editor">
      <Toolbar>
        <ToolbarTitle>
          <Space>
            <Button shape="circle" icon={<LeftOutlined />} />
            <Avatar shape="square" style={{ backgroundColor: "rgba(44,121,245, 0.2)", color: "#2c79f6" }} icon={<RocketOutlined />} />
            请假管理
          </Space>
        </ToolbarTitle>
        <ToolbarContent>
          <Button type="text"><NavIcon role="img" className="anticon">1</NavIcon> 基础设置</Button>
          <Button type="text"><NavIcon role="img" className="anticon">2</NavIcon>表单设计</Button>
          <Button type="link"><NavIcon role="img" className="anticon selected">3</NavIcon>流程设计</Button>
          <Button type="text"><NavIcon role="img" className="anticon">4</NavIcon>高级设置</Button>
        </ToolbarContent>
        <Space>
          <Button type="primary">发布</Button>
        </Space>
      </Toolbar>
      <Canvas style={{ transform: `scale(1)` }}>
        <StartNode />
        <ZoomBar />
      </Canvas>
    </Container>
  )
})