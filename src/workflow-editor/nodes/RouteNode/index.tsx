import { memo } from "react"
import { IRouteNode } from "../../interfaces"
import { styled } from "styled-components"
import { AddBranchButton } from "./AddBranchButton"

const RouteWrap = styled.div`
  display: inline-flex;
  width: 100%;
`
const RouteBoxWrap = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 270px;
  width: 100%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
`

const RouteBox = styled.div`
  display: flex;
  overflow: visible;
  min-height: 180px;
  height: auto;
  border-bottom: 2px solid;
  border-top: 2px solid;
  border-color: ${props => props.theme.mode === "light" ? "#cacaca" : "rgba(255,255,255,0.35)"};
  position: relative;
  margin-top: 15px;
`

const ColBox = styled.div`
  background: #f5f5f7;
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
    background-color: #cacaca
  }
`

const ConditionNode = styled.div`
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
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 2px;
    height: 100%;
    background-color: #cacaca;
  }
`

const AutoJudge = styled.div`
  position: relative;
  width: 220px;
  min-height: 72px;
  background: #fff;
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

export const RouteNode = memo((
  props: {
    node: IRouteNode
  }
) => {
  const { node } = props
  return (
    <RouteWrap className="route-wrap">
      <RouteBoxWrap className="route-box-wrap">
        <RouteBox className="route-box">
          <AddBranchButton />
          {
            node.conditionNodeList?.map((child) => {
              return (
                <ColBox className="col-box" key={child.id}>
                  <ConditionNode className="condition-node">
                    <ConditionNodeBox className="condition-node-box">
                      <AutoJudge className="auto-judge">

                      </AutoJudge>
                    </ConditionNodeBox>
                  </ConditionNode>
                </ColBox>
              )
            })
          }
        </RouteBox>
      </RouteBoxWrap>
    </RouteWrap>
  )
})