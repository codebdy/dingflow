import { EllipsisOutlined, ExportOutlined, ImportOutlined, LeftOutlined, MobileOutlined, QuestionCircleOutlined, RocketOutlined, SaveOutlined } from "@ant-design/icons"
import { Avatar, Button, Dropdown, MenuProps, Space } from "antd"
import { memo, useMemo } from "react"
import { styled } from "styled-components"
import { WorkflowDiagram } from "../WorkflowDiagram"
import { useTranslate } from "../react-locales"

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

export const WorkFlowEditorInner = memo((props: {}) => {
  const t = useTranslate()
  const items: MenuProps['items'] = useMemo(() => [
    {
      label: t("import"),
      key: 'import',
      icon: <ImportOutlined />
    },
    {
      label: t("export"),
      key: 'export',
      icon: <ExportOutlined />
    },
  ], [t]);

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
          <Button type="text"><NavIcon role="img" className="anticon">1</NavIcon> {t("baseSettings")}</Button>
          <Button type="text"><NavIcon role="img" className="anticon">2</NavIcon>{t("formDesign")}</Button>
          <Button type="link"><NavIcon role="img" className="anticon selected">3</NavIcon>{t("flowDesign")}</Button>
          <Button type="text"><NavIcon role="img" className="anticon">4</NavIcon>{t("addvancedSettings")}</Button>
        </ToolbarContent>
        <Space>
          <Button type="text" icon={<QuestionCircleOutlined />}>{t("help")}</Button>
          <Button type="text" icon={<MobileOutlined />}>{t("preview")}</Button>
          <Button type="text" icon={<SaveOutlined />}>{t("save")}</Button>
          <Button type="primary">{t("publish")}</Button>
          <Dropdown menu={{ items }} trigger={['click']}>
            <Button icon={<EllipsisOutlined />} />
          </Dropdown>
        </Space>
      </Toolbar>
      <WorkflowDiagram />
    </Container>
  )
})