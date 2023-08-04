import { memo } from "react"
import { IConditionNode, IRouteNode } from "../../interfaces"
import { styled } from "styled-components"
import { ConditionButtons } from "./ConditionButtons"
import { ConditionPriority } from "./ConditionPriority"
import { useTranslate } from "../../react-locales"
import { useEditorStore } from "../../hooks"
import { TitleResponse } from "../NodeTitle"

const TitleWrapper = styled.div`
  position: relative;
  font-size: 12px;
  color: ${props => props.theme?.token?.colorTextSecondary};
  text-align: left;
  line-height: 16px;
  display: flex;
  user-select: none;
`

export const TitleText = styled.div`
  border: solid transparent 1px;
  &:hover{
    line-height: 16px;
    border-bottom: dashed 1px ${props => props.theme.token?.colorTextSecondary};
  }
  user-select: none;
`

export const ConditionNodeTitle = memo((
  props: {
    node: IConditionNode,
    parent: IRouteNode,
    index: number,
  }
) => {
  const { node, parent, index } = props
  const t = useTranslate()
  const editorStore = useEditorStore()

  return (
    <TitleWrapper>
      <TitleResponse>
        <TitleText>
          {node.name || t("condition")}
        </TitleText>
      </TitleResponse>
      <ConditionButtons parent={parent} node={node} />
      <ConditionPriority index={index} />
    </TitleWrapper>
  )
})