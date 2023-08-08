import { PlusOutlined, DeleteOutlined } from "@ant-design/icons"
import { memo, useCallback, useState } from "react"
import styled from "styled-components"
import { Space, Button } from "antd"
import { AddMenu } from "./AddMenu";
import classNames from "classnames";
import { ExpressionGroupType, ExpressionNodeType } from "../../interfaces";

export const itemHeight = 48;

export const Item = styled.div`
  display: flex;
  align-items: center;
  min-height: ${itemHeight}px;
  .actions-space{
    display: none;
    &.add-open{
      display: flex;
    }
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
export const RemoveIcon = styled(DeleteOutlined)`
  font-size:12px;
`
export const ExpressionItem = memo((
  props: {
    onAddExpression?: () => void,
    onAddGroup?: (nodeType: ExpressionGroupType) => void,
    children?: React.ReactNode,
  }
) => {
  const { onAddExpression, onAddGroup, children } = props
  const [addOpen, setAddOpen] = useState(false);

  const handleOpenChange = useCallback((open: boolean) => {
    setAddOpen(open)
  }, [])

  return (
    <Item>
      <ExpressionContent>
        {children}
      </ExpressionContent>
      <Actions className="actions">
        <Space
          size="small"
          className={classNames("actions-space", addOpen ? "add-open" : "")}
        >
          {
            onAddExpression && onAddGroup &&
            <AddMenu
              onOpenChange={handleOpenChange}
              onAddExpression={onAddExpression}
              onAddGroup={onAddGroup}
            >
              <Button type="text" icon={<AddIcon className="add-icon" />} />
            </AddMenu>
          }

          <Button type="text" icon={<RemoveIcon className="remove-icon" />} />
        </Space>
      </Actions>
    </Item>
  )
})