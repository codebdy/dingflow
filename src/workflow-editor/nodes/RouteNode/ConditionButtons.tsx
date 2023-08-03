import { useCallback } from "react"
import { CloseOutlined } from "@ant-design/icons"
import { styled } from "styled-components"
import { Button, Tooltip } from "antd"
import { useEditorStore } from "../../hooks"
import { copyIcon } from "../../icons"
import { useTranslate } from "../../react-locales"
import { IRouteNode, IConditionNode } from "../../interfaces"

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
    parent: IRouteNode,
    node: IConditionNode
  }
) => {
  const { parent, node } = props
  const store = useEditorStore()
  const t = useTranslate()

  const handleClose = useCallback(() => {
    node.id && store?.removeCondition(parent, node.id)
  }, [node.id, parent, store])

  const handleClone = useCallback(() => {
    node.id && store?.cloneCondition(parent, node.id)
  }, [node.id, parent, store])

  return (
    <Container className="mini-bar">
      <Tooltip placement="topRight" title={t("copyCodition")} arrow>
        <Button
          type="text"
          size="small"
          shape="circle"
          icon={copyIcon}
          onClick={handleClone}
        />
      </Tooltip>
      <Button
        type="text"
        size="small"
        shape="circle"
        icon={<CloseOutlined style={{ fontSize: 11 }} />}
        onClick={handleClose}
      />
    </Container>
  )
})