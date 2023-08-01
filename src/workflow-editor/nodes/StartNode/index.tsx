import { memo } from "react"
import { useStartNode } from "../../hooks/useStartNode"
import { NodeContent, NodeTitle, NodeWrap, NodeWrapBox } from "../styled"

export const StartNode = memo(() => {
  const { startNode } = useStartNode()
  return (
    <NodeWrap className="node-wrap start-node-wrap">
      <NodeWrapBox className="node-wrap-box">
        <NodeTitle className="node-title start-node-title">
          发起人
        </NodeTitle>
        <NodeContent className="content">
          所有人
        </NodeContent>
      </NodeWrapBox>
    </NodeWrap>
  )
})