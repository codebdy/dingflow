import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import { memo } from "react"
import styled from "styled-components"
import { IExtCondition } from "../../interfaces"
import { ExpressionInputProps } from "./ExpressionInputProps"
import { Space, Button } from "antd"

export const Item = styled.div`
  display: flex;
  align-items: center;
  min-height: 48px;
  .actions-space{
    display: none;
  }
  &:hover{
    .actions-space{
      display: flex;
    }    
  }
`

export const ExpressionContent = styled.div`
  flex: 1;
`

export const Actions = styled.div`
  width: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const AddIcon = styled(PlusOutlined)`
  font-size:12px;
`
export const RemoveIcon = styled(MinusOutlined)`
  font-size:12px;
`
export const ExpressionItem = memo((
  props: {
    ExpressInput: React.FC<ExpressionInputProps>
    value?: IExtCondition,
    onChange?: (value?: IExtCondition) => void
  }
) => {
  const { ExpressInput, value, onChange } = props
  return (
    <Item>
      <ExpressionContent>
        <ExpressInput />
      </ExpressionContent>
      <Actions className="actions">
        <Space className="actions-space">
          <Button size="small" type="text" icon={<RemoveIcon className="remove-icon" />} />
          <Button size="small" type="text" icon={<AddIcon className="add-icon" />} />
        </Space>
      </Actions>
    </Item>
  )
})