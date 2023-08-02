import { styled } from "styled-components"

export const NodeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  padding: 0 50px;
  position: relative;
`

export const NodeWrapBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: 220px;
  min-height: 72px;
  flex-shrink: 0;
  background: ${props => props.theme.token?.colorBgContainer};
  border: solid ${props => props.theme.mode === "dark" ? "1px" : 0} ${props => props.theme?.token?.colorBorder};
  border-radius: 4px;
  cursor: pointer;
  &:after{
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
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1)
  }
  &:hover{
    outline: solid 1px ${props => props.theme.token?.colorPrimary};
  }
`

export const NodeTitle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 30px;
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #fff;
    text-align: left;
    background: #576a95;
    border-radius: 4px 4px 0 0;
    user-select: none;
    &.start-node-title{
      background: rgb(87, 106, 149);
    }
`
export const NodeIcon = styled.div`
    font-size: 14px;
  margin-right: 8px;
`

export const NodeContent = styled.div`
    position: relative;
    font-size: 14px;
    padding: 16px;
    padding-right: 30px;
    user-select: none;
    .text{
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 14px;
      font-size: 14px;
      color: #979797;
    }
`