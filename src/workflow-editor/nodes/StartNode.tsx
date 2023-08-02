import { memo, useMemo } from "react"
import { useStartNode } from "../hooks/useStartNode"
import { NodeContent, NodeTitle, NodeWrap, NodeWrapBox } from "./styled"
import { AddButton } from "./AddButton"
import { useTranslate } from "../react-locales"
import { RightOutlined } from "@ant-design/icons"
import { ChildNode } from "./ChildNode"

export const StartNode = memo(() => {
  const { startNode } = useStartNode()
  const t = useTranslate()
  const allText = useMemo(() => t("allMember"), [t])

  return (
    <NodeWrap className="node-wrap start-node-wrap">
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