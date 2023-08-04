import { memo, useCallback, useMemo } from "react"
import { useStartNode } from "../hooks/useStartNode"
import { AddButton } from "./AddButton"
import { useTranslate } from "../react-locales"
import { RightOutlined } from "@ant-design/icons"
import { ChildNode } from "./ChildNode"
import { NodeWrap, NodeWrapBox, NodeContent } from "./NormalNode"
import { EndNode } from "./EndNode"
import { useEditorStore } from "../hooks"
import { NodeTitleSchell } from "./NodeTitle"
import { useNodeMaterial } from "../hooks/useNodeMaterial"

export const StartNode = memo(() => {
  const { startNode } = useStartNode()
  const t = useTranslate()
  const allText = useMemo(() => t("allMember"), [t])
  const store = useEditorStore();
  const material = useNodeMaterial(startNode)
  const handleClick = useCallback(() => {
    store?.selectNode(startNode?.id)
  }, [startNode?.id, store])

  return (
    <NodeWrap className="node-wrap start">
      <NodeWrapBox className="node-wrap-box" onClick={handleClick}>
        <NodeTitleSchell className="node-title start-node-title" style={{backgroundColor: material?.color}}>
          {t(material?.label || "")}
        </NodeTitleSchell>
        <NodeContent className="content">
          <span className="text">{allText}</span>
          <RightOutlined className="arrow" />
        </NodeContent>
      </NodeWrapBox>
      {startNode?.id && <AddButton nodeId={startNode?.id} />}
      {startNode?.childNode && <ChildNode node={startNode?.childNode} />}
      <EndNode />
    </NodeWrap>
  )
})