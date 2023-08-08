import { styled } from "styled-components"
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd"
import { useTranslate } from "../../react-locales";
import { memo } from "react";
import { ExpressionGroupType, OperatorType } from "../../interfaces";

const itemHeight = 48;

const ExpressionGroup = styled.div`
  display: flex;
  align-items: stretch;
`
const GroupOperator = styled.div`
  position: relative;
  width: 80px;
  //border: solid 1px;
  display: flex;
  align-items: center;
  padding-right: 16px;
`

const GroupOperatorLine = styled.div`
  position: absolute;
  left: calc(50% - 8px);
  width: 20px;
  border: solid 1px ${props => props.theme.token?.colorBorder};
  border-right: 0;
  border-radius: 5px 0 0 5px;
  height: calc(100% - ${itemHeight}px);
  &::before{
    content: "";
    position: absolute;
    top:0;
    right:0;
    transform: translateX(100%) translateY(-50%);
    width: 6px;
    height: 6px;
    border: solid 1px ${props => props.theme.token?.colorBorder};
    border-radius: 50%;
  }
  &::after{
    content: "";
    position: absolute;
    bottom:0;
    right:0;
    transform: translateX(100%) translateY(50%);
    width: 6px;
    height: 6px;
    border: solid 1px ${props => props.theme.token?.colorBorder};
    border-radius: 50%;
  }
`

const ExpressionItems = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
`

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

export const ExpressionContent = styled(Space)`
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
// const SuccessIcon = styled(CheckCircleFilled)`
//   color:${props => props.theme.token?.colorSuccess};
// `
// const ErrorIcon = styled(CloseCircleFilled)`
//   color:${props => props.theme.token?.colorError};
// `

export const ExpressionInput = memo(() => {
  const t = useTranslate()

  return (
    <ExpressionGroup className="expression-group">
      <GroupOperator className="group-operator">
        <GroupOperatorLine className="group-operator-line" />
        <Select
          defaultValue={ExpressionGroupType.And}
          options={[
            { value: ExpressionGroupType.And, label: t(ExpressionGroupType.And) },
            { value: ExpressionGroupType.Or, label: t(ExpressionGroupType.Or) },
          ]}
        />
      </GroupOperator>
      <ExpressionItems className="expression-items-container">
        <Item>
          <ExpressionContent>
            <Select
              defaultValue="xxx"
              options={[
                { value: 'xxx', label: '物料' },
                { value: 'yyy', label: '或' },
              ]}
            />
            <Select
              style={{ minWidth: 100 }}
              options={[
                { value: OperatorType.Eq, label: t(OperatorType.Eq) },
                { value: OperatorType.Ne, label: t(OperatorType.Ne) },
                { value: OperatorType.Gt, label: t(OperatorType.Gt) },
                { value: OperatorType.Lt, label: t(OperatorType.Lt) },
                { value: OperatorType.Le, label: t(OperatorType.Le) },
                { value: OperatorType.Ge, label: t(OperatorType.Ge) },
                { value: OperatorType.Like, label: t(OperatorType.Like) },
                { value: OperatorType.LikeStart, label: t(OperatorType.LikeStart) },
                { value: OperatorType.LikeEnd, label: t(OperatorType.LikeEnd) },
                { value: OperatorType.NotEmpty, label: t(OperatorType.NotEmpty) },
                { value: OperatorType.Empty, label: t(OperatorType.Empty) },
              ]}
            />
            <Input />
          </ExpressionContent>
          <Actions className="actions">
            <Space className="actions-space">
              <Button size="small" type="text" icon={<RemoveIcon className="remove-icon" />} />
              <Button size="small" type="text" icon={<AddIcon className="add-icon" />} />
            </Space>
          </Actions>
        </Item>
        <Item>
          <Input />
        </Item>
        <Item>
          <Input />
        </Item>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Item>
          <Input />
        </Item>
      </ExpressionItems>
    </ExpressionGroup>
  )
})