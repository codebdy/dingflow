import { useCallback } from "react"
import { CloseOutlined } from "@ant-design/icons"
import { styled } from "styled-components"
import { Button, Space } from "antd"
import { useEditorStore } from "../../hooks"
import { copyIcon } from "../../icons"

const Container = styled.div`
  position: absolute;
  right: -4px;
  top: -4px;
  display: flex;
  opacity: 0.7;
  font-size: 11px;
`

export const ConditionButtons = ((
  props: {
    nodeId?: string
  }
) => {
  const { nodeId } = props
  const store = useEditorStore()

  const handleClose = useCallback(() => {
    //store?.removeNode(nodeId)
  }, [nodeId, store])

  return (
    <Container className="mini-bar">
      <Button
        type="text"
        size="small"
        shape="circle"
        icon={copyIcon}
      //onClick={handleClose}
      />
      <Button
        type="text"
        size="small"
        shape="circle"
        icon={<CloseOutlined style={{ fontSize: 11}} />}
        onClick={handleClose}
      />
    </Container>
  )
})