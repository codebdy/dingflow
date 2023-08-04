import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"
import { memo } from "react"
import { styled } from "styled-components"
import { canvasColor } from "../../utils/canvasColor"

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 32px;
  top: 16px;
  user-select: none;
  background-color: ${canvasColor};
  padding: 4px 8px;
  border-radius: 5px;
  &.float{
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, ${props => props.theme.mode === "dark" ? "0.5" : "0.1"});
  }

  transition: all 0.3s;
`

export const ZoomBar = memo((
  props: {
    float?: boolean,
    zoom: number;
    onZoomIn: () => void,
    onZoomOut: () => void
  }
) => {
  const { float, zoom, onZoomIn, onZoomOut } = props

  return (
    <Container className={"workflow-editor-zoombar" + (float ? " float" : "")}>
      <Space>
        <Button
          type={float ? "text" : "text"}
          icon={<MinusOutlined />}
          disabled={zoom <= 0.1}
          onClick={onZoomOut}
        />
        {Math.round(zoom * 100)}%
        <Button
          type={float ? "text" : "text"}
          icon={<PlusOutlined />}
          disabled={zoom >= 3}
          onClick={onZoomIn}
        />
      </Space>
    </Container>
  )
})