import { memo, useMemo } from "react"
import { useStartNode } from "../hooks/useStartNode"
import { AddButton } from "./AddButton"
import { useTranslate } from "../react-locales"
import { RightOutlined } from "@ant-design/icons"
import { ChildNode } from "./ChildNode"
import { NodeWrap, NodeWrapBox, NodeTitle, NodeContent } from "./NormalNode"

export const StartNode = memo(() => {
  const { startNode } = useStartNode()
  const t = useTranslate()
  const allText = useMemo(() => t("allMember"), [t])

  console.log("哈哈 ", startNode)
  return (
    <NodeWrap className="node-wrap start">
      <NodeWrapBox className="node-wrap-box">
        <NodeTitle className="node-title start-node-title">
          {t("promoter")}
        </NodeTitle>
        <NodeContent className="content">
          <span className="text">{allText}</span>
          <RightOutlined className="arrow" />
        </NodeContent>
      </NodeWrapBox>
      {startNode?.id && <AddButton nodeId={startNode?.id} />}
      {startNode?.childNode && <ChildNode node={startNode?.childNode} />}
    </NodeWrap>
  )
})