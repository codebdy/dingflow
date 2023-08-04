import { EllipsisOutlined, ExportOutlined, ImportOutlined, LeftOutlined, MobileOutlined, QuestionCircleOutlined, RocketOutlined, SaveOutlined } from "@ant-design/icons"
import { Avatar, Button, Dropdown, MenuProps, Space } from "antd"
import { memo, useCallback, useMemo, useState } from "react"
import { styled } from "styled-components"
import { WorkflowDiagram } from "../WorkflowDiagram"
import { useTranslate } from "../react-locales"
import { NavTabs } from "./NavTabs"

const Container = styled.div`
  flex:1;
  display: flex;
  flex-flow: column;
  background-color: ${props => props.theme.token?.colorBgBase};
  color: ${props => props.theme.token?.colorText};
  height: 0;
`
const Toolbar = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px 16px;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.01);
  z-index: 1;
  background-color: ${props => props.theme.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : ""};
  border: solid ${props => props.theme.mode === "dark" ? props.theme.token?.colorBorder + " 1px" : "0px"};
`
const ToolbarTitle = styled.div`
  display: flex;
`

export enum TabType {
  baseSettings = "baseSettings",
  formDesign = "formDesign",
  flowDesign = "flowDesign",
  addvancedSettings = "addvancedSettings"
}

export const WorkFlowEditorInner = memo((props: {
  className?: string
}) => {
  const { className, ...other } = props
  const [selectedTab, setSelectedTab] = useState<TabType>(TabType.flowDesign)
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

  const handleNavChange = useCallback((key?: string) => {
    setSelectedTab((key || TabType.flowDesign) as TabType)
  }, [])

  return (
    <Container className={"workflow-editor " + className || ""} {...other}>
      <Toolbar>
        <ToolbarTitle>
          <Space>
            <Button shape="circle" icon={<LeftOutlined />} />
            <Avatar shape="square" style={{ backgroundColor: "rgba(44,121,245, 0.2)", color: "#2c79f6" }} icon={<RocketOutlined />} />
            请假管理
          </Space>
        </ToolbarTitle>
        <NavTabs
          options={
            [
              {
                key: TabType.baseSettings,
                label: t("baseSettings"),
              },
              {
                key: TabType.formDesign,
                label: t("formDesign"),
              },
              {
                key: TabType.flowDesign,
                label: t("flowDesign"),
              },
              {
                key: TabType.addvancedSettings,
                label: t("addvancedSettings"),
              },
            ]
          }

          value={selectedTab}
          onChange={handleNavChange}
        />
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
      {
        selectedTab === TabType.flowDesign &&
        <WorkflowDiagram />
      }
    </Container>
  )
})