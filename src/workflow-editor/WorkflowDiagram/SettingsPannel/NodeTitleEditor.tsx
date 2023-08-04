import { EditOutlined } from "@ant-design/icons"
import { memo } from "react"
import { TitleText } from "./NodeTitle"
import { IWorkFlowNode } from "../../interfaces"

export const NodeTitleEditor = memo((
  props: {
    node: IWorkFlowNode
  }
) => {
  const { node } = props
  return (
    <>
      <TitleText className="title-text">{node.name}</TitleText>
      <EditOutlined />
    </>
  )
})