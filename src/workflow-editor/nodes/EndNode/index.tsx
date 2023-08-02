import { memo } from "react"
import { styled } from "styled-components"

const Container = styled.div`
  border-radius: 50%;
  font-size: 14px;
  color: ${props => props.theme.token?.colorTextSecondary};
  text-align: left;
  .end-node-circle {
    width: 10px;
    height: 10px;
    margin: auto;
    border-radius: 50%;
    background: ${props => props.theme.mode === "light" ? "#cacaca" : "rgba(255,255,255,0.35)"};
  }
  .end-node-text {
    margin-top: 5px;
    text-align: center
  }
`

export const EndNode = memo(() => {
  return (
    <Container className="end-node">
      <div className="end-node-circle"></div>
      <div className="end-node-text">流程结束</div>
    </Container>
  )
})