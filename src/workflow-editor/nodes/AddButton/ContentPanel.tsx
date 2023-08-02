import { memo } from "react"
import { styled } from "styled-components"
import { sealIcon } from "../../icons"

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
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, ${props => props.theme.mode === "light" ? "0.08" : "0.2"});
  }
`

const MaterialIcon = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  border: solid 1px ${props => props.theme.token?.colorBorder};
  margin-right: 16px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #ff943e;
`

export const ContentPanel = memo(() => {
  return (
    <Container className="add-node-content">
      <MaterialSchell>
        <MaterialItem>
          <MaterialIcon>
            {sealIcon}
          </MaterialIcon>
          审批人
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