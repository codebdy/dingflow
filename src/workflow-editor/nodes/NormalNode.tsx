import { memo } from "react"
import { IWorkFlowNode } from "../interfaces"
import { useTranslate } from "../react-locales"
import { RightOutlined } from "@ant-design/icons"
import { AddButton } from "./AddButton"
import { ChildNode } from "./ChildNode"
import { NodeWrap, NodeWrapBox, NodeTitle, NodeContent } from "./styled"

export const NormalNode = memo((
  props: {
    node: IWorkFlowNode
  }
) => {
  const { node } = props
  const t = useTranslate()
  return (
    <NodeWrap className="node-wrap start-node-wrap">
      <NodeWrapBox className="node-wrap-box">
        <NodeTitle className="node-title start-node-title">
          {t("promoter")}
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