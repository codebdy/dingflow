import { memo, useCallback } from "react"
import { useStartNode } from "../hooks/useStartNode"
import { AddButton } from "./AddButton"
import { useTranslate } from "../react-locales"
import { RightOutlined } from "@ant-design/icons"
import { ChildNode } from "./ChildNode"
import { NodeWrap, NodeWrapBox, NodeContent } from "./NormalNode"
import { EndNode } from "./EndNode"
import { useEditorEngine } from "../hooks"
import { NodeTitleShell } from "./NodeTitle"
import { useNodeMaterial } from "../hooks/useNodeMaterial"
import { useMaterialUI } from "../hooks/useMaterialUI"
import { ErrorTip } from "./ErrorTip"

export const StartNode = memo(() => {
  const startNode = useStartNode()
  const t = useTranslate()
  const materialUi = useMaterialUI(startNode)
  const store = useEditorEngine();
  const material = useNodeMaterial(startNode)
  const handleClick = useCallback(() => {
    store?.selectNode(startNode?.id)
  }, [startNode?.id, store])

  return (
    <NodeWrap className="node-wrap start">
      <NodeWrapBox className="node-wrap-box" onClick={handleClick}>
        <NodeTitleShell className="node-title start-node-title" style={{ backgroundColor: material?.color }}>
          {t(material?.label || "")}
        </NodeTitleShell>
        <NodeContent className="content">
          {materialUi?.viewContent && materialUi?.viewContent(startNode, { t })}
          <RightOutlined className="arrow" />
        </NodeContent>
        {startNode?.id && <ErrorTip nodeId={startNode.id} />}
      </NodeWrapBox>
      {startNode?.id && <AddButton nodeId={startNode?.id} />}
      {startNode?.childNode && <ChildNode node={startNode?.childNode} />}
      <EndNode />
    </NodeWrap>
  )
})