import { CloseOutlined } from "@ant-design/icons"
import { Button, Drawer } from "antd"
import { memo, useCallback } from "react"
import { NodeTitle } from "./NodeTitle"
import { Footer } from "./Footer"
import { useSelectedNode } from "../../hooks/useSelectedNode"
import { useEditorStore } from "../../hooks"

export const SettingsPannel = memo(() => {
  const selectedNode = useSelectedNode()
  const store = useEditorStore();
  const handelClose = useCallback(() => {
    store?.selectNode(undefined)
  }, [store])

  const handleConfirm = useCallback(() => {
    store?.selectNode(undefined)
  }, [store])

  return (
    <Drawer
      title={<NodeTitle />}
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
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
})