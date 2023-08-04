import { CloseOutlined } from "@ant-design/icons"
import { Button, Drawer } from "antd"
import { memo, useCallback, useState } from "react"
import { NodeTitle } from "./NodeTitle"
import { Footer } from "./Footer"
import { useSelectedNode } from "../../hooks/useSelectedNode"
import { useEditorStore } from "../../hooks"
import { styled } from "styled-components"
import { SettingsType, TypeSwitch } from "./ButtonTabs"
import { FormAuth } from "./FormAuth"

const Content = styled.div`
  display: flex;
  flex-flow: column;
`
export const SettingsPanel = memo(() => {
  const [settingsType, setSettingsType] = useState<SettingsType>(SettingsType.node)
  const selectedNode = useSelectedNode()
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
        <TypeSwitch value={settingsType} onChange={setSettingsType} />
        {settingsType === SettingsType.formAuth && <FormAuth />}
      </Content>
    </Drawer>
  )
})