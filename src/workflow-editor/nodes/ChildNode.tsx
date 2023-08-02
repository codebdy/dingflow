import { memo } from "react"
import { IWorkFlowNode, NodeType } from "../interfaces"
import { SwitchNode } from "./SwitchNode"
import { NormalNode } from "./NormalNode"

export const ChildNode = memo((
  props: {
    node: IWorkFlowNode
  }
) => {
  const { node } = props
  return (
    node.nodeType === NodeType.route
      ? <SwitchNode node={node} />
      : <NormalNode node={node} />
  )
})