import { memo } from "react"
import { IWorkFlowNode } from "../interfaces"
import { RightOutlined } from "@ant-design/icons"
import { AddButton } from "./AddButton"
import { ChildNode } from "./ChildNode"
import { useNodeMaterial } from "../hooks/useNodeMaterial"
import { NodeWrap, NodeWrapBox, NodeTitle, NodeIcon, NodeTitleText, NodeContent } from "./styled"
import { CloseButton } from "./CloseButton"

export const NormalNode = memo((
  props: {
    node: IWorkFlowNode
  }
) => {
  const { node } = props
  const meterial = useNodeMaterial(node)
  return (
    <NodeWrap className="node-wrap start-node-wrap">
      <NodeWrapBox className="node-wrap-box">
        <NodeTitle className="node-title" style={{ backgroundColor: meterial?.color, color: "#fff" }}>
          <NodeIcon>
            {meterial?.icon}
          </NodeIcon>
          <NodeTitleText className="text">{node.name}</NodeTitleText>
          <CloseButton nodeId={node.id} />
        </NodeTitle>
        <NodeContent className="content">
          <span className="text">{"allText"}</span>
          <RightOutlined className="arrow" />
        </NodeContent>
      </NodeWrapBox>
      {node?.id && <AddButton nodeId={node?.id} />}
      {node?.childNode && <ChildNode node={node?.childNode} />}
    </NodeWrap>
  )
})