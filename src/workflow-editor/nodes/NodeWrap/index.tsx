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
  background: #fff;
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
`
