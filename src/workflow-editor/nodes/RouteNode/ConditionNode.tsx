import { memo } from "react"
import { IConditionNode } from "../../interfaces"
import { styled } from "styled-components"
import { lineColor } from "../../utils/lineColor"
import { nodeColor } from "../../utils/nodeColor"
import { canvasColor } from "../../utils/canvasColor"

const ColBox = styled.div`
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    margin: auto;
    width: 2px;
    height: 100%;
    background-color: ${lineColor};
  }
`

const ConditionStyleNode = styled.div`
  min-height: 220px;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
`
const ConditionNodeBox = styled.div`
  padding-top: 30px;
  padding-right: 50px;
  padding-left: 50px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-grow: 1;
  position: relative;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
`

const AutoJudge = styled.div`
  position: relative;
  width: 220px;
  min-height: 72px;
  background: ${nodeColor};
  border: solid ${props => props.theme.mode === "dark" ? "1px" : 0} ${props => props.theme?.token?.colorBorder};
  border-radius: 4px;
  padding: 14px 19px;
  cursor: pointer;
  &::after{
    pointer-events: none;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-radius: 4px;
    border: 1px solid transparent;
    transition: all .1s cubic-bezier(.645, .045, .355, 1);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
  }
  &.active{
    &::after{
      border: 1px solid #3296fa;
      box-shadow: 0 0 6px 0 rgba(50, 150, 250, .3)
    }
  }
  &:hover{
    &::after{
      border: 1px solid #3296fa;
      box-shadow: 0 0 6px 0 rgba(50, 150, 250, .3)
    }
  }
`
const LineCover = styled.div`
  position: absolute;
  height: 8px;
  width: 50%;
  background-color: ${canvasColor};
  &.left{
    left:-1px;
  }
  &.right{
    right: -1px;
  }
  &.top{
    top: -4px;
  }
  &.bottom{
    bottom: -4px;
  }
`


export const ConditionNode = memo((props: { node: IConditionNode, index: number, length: number }) => {
  const { node, index, length } = props
  return (
    <ColBox className="col-box">
      <ConditionStyleNode className="condition-node">
        <ConditionNodeBox className="condition-node-box">
          <AutoJudge className="auto-judge">

          </AutoJudge>
        </ConditionNodeBox>
      </ConditionStyleNode>
      {
        index === 0 &&
        <>
          <LineCover className="top left" />
          <LineCover className="bottom left" />
        </>
      }
      {
        index === (length - 1) &&
        <>
          <LineCover className="top right" />
          <LineCover className="bottom right" />
        </>
      }
    </ColBox>
  )
})