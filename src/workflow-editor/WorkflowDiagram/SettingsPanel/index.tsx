import { CloseOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import { Button, Drawer } from "antd"
import { memo, useCallback, useState } from "react"
import { NodeTitle } from "./NodeTitle"
import { Footer } from "./Footer"
import { useSelectedNode } from "../../hooks/useSelectedNode"
import { useEditorStore } from "../../hooks"
import { styled } from "styled-components"
import { ButtonSelect } from "./ButtonSelect"
import { FormAuth } from "./FormAuth"
import { useTranslate } from "../../react-locales"

const Content = styled.div`
  display: flex;
  flex-flow: column;
`
export const SettingsPanel = memo(() => {
  const [settingsType, setSettingsType] = useState<string>("node")
  const selectedNode = useSelectedNode()
  const t = useTranslate()
  const store = useEditorStore();
  const handelClose = useCallback(() => {
    store?.selectNode(undefined)
  }, [store])

  const handleConfirm = useCallback(() => {
    store?.selectNode(undefined)
  }, [store])

  const handleNameChange = useCallback((name?: string) => {

  }, [])


  return (
    <Drawer
      title={selectedNode &&
        <NodeTitle
          node={selectedNode}
          onNameChange={handleNameChange}
        />
      }
      placement="right"
      width={656}
      closable={false}
      extra={
        <Button
          size="small"
          type="text"
          icon={<CloseOutlined />}
          onClick={handelClose}
        />
      }
      footer={
        <Footer
          onConfirm={handleConfirm}
          onCancel={handelClose}
        />
      }
      onClose={handelClose}
      open={!!selectedNode}
    >
      <Content className="settings-panel-content">
        <ButtonSelect
          options={[
            {
              key: "node",
              label: t("promoter") + t("settingsSuffix"),
            },
            {
              key: "formAuth",
              label: <>{t("formAuth")} <QuestionCircleOutlined /></>
            }
          ]}
          value={settingsType}
          onChange={setSettingsType}
        />
        {settingsType === 'formAuth' && <FormAuth />}
      </Content>
    </Drawer>
  )
})