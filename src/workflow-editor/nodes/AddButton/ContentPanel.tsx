import { memo } from "react"
import { styled } from "styled-components"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 360px;
`

const MaterialSchell = styled.div`
  width: 50%;
  padding: 4px 8px;
`

const MaterialItem = styled.div`
  padding: 0px 8px;
  height: 64px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    //outline: solid 1px ${props => props.theme.token?.colorBorderSecondary};
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, ${props => props.theme.mode === "light" ? "0.1" : "0.3"});
  }
`

export const ContentPanel = memo(() => {
  return (
    <Container className="add-node-content">
      <MaterialSchell>
        <MaterialItem>
          哈哈
        </MaterialItem>
      </MaterialSchell>
      <MaterialSchell>
        <MaterialItem>
          哈哈
        </MaterialItem>
      </MaterialSchell>
      <MaterialSchell>
        <MaterialItem>
          哈哈
        </MaterialItem>
      </MaterialSchell>
    </Container>
  )
})