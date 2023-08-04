import { CloseOutlined } from "@ant-design/icons"
import { Button, Drawer } from "antd"
import { memo, useCallback } from "react"
import { NodeTitle } from "./NodeTitle"
import { Footer } from "./Footer"

export const SettingsPannel = memo(() => {

  const handelClose = useCallback(() => {

  }, [])

  return (
    <Drawer
      title={<NodeTitle />}
      placement="right"
      width={656}
      closable={false}
      extra={<Button size="small" type="text" icon={<CloseOutlined />} />}
      footer={<Footer />}
      onClose={handelClose}
      open={true}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
})