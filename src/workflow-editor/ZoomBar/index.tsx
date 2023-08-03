import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"
import { memo } from "react"
import { styled } from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 32px;
  top: 32px;
`

export const ZoomBar = memo((
  props: {
    zoom: number;
    onZoomIn: () => void,
    onZoomOut: () => void
  }
) => {
  const { zoom, onZoomIn, onZoomOut } = props
  return (
    <Container className="workflow-editor-zoombar">
      <Space>
        <Button icon={<MinusOutlined />} onClick={onZoomOut} />
        {Math.round(zoom * 100)}%
        <Button icon={<PlusOutlined />} onClick={onZoomIn} />
      </Space>
    </Container>
  )
})