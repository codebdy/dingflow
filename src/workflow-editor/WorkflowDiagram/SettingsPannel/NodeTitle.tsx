import { EditOutlined } from "@ant-design/icons"
import { memo } from "react"
import { styled } from "styled-components"

const Title = styled.div`
  font-weight: normal;
`

const TitleText = styled.span`
  margin-right: 8px;
`

export const NodeTitle = memo(()=>{
  return (
    <Title>
      <TitleText className="title-text">审批人</TitleText>
      <EditOutlined />
    </Title>    
  )
})