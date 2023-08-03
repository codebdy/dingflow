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

export const RouteNode = memo((
  props: {
    node: IRouteNode
  }
) => {
  return (
    <RouteWrap>
      <RouteBoxWrap>
        <RouteBox>
          <AddBranchButton />
          ddddddddddddddddddddddddddddd
        </RouteBox>
      </RouteBoxWrap>
    </RouteWrap>
  )
})