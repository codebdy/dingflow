import { memo } from "react"
import { useStartNode } from "../../hooks/useStartNode"
import { NodeWrap, NodeWrapBox } from "../NodeWrap"

export const StartNode = memo(() => {
  const { startNode } = useStartNode()
  return (
    <NodeWrap className="node-wrap start-node-wrap">
      <NodeWrapBox className="node-wrap-box">
        {startNode?.id}
      </NodeWrapBox>
    </NodeWrap>
  )
})