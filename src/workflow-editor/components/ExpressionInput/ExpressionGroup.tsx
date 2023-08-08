import { styled } from "styled-components"
import { Button, Select, Space } from "antd"
import { useTranslate } from "../../react-locales";
import { memo } from "react";
import { ExpressionGroupType, ExpressionNodeType, IExpressionGroup } from "../../interfaces";
import { ExpressionInputProps } from "./ExpressionInputProps";
import { ExpressionItem, Item, itemHeight } from "./ExpressionItem";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { AddMenu } from "./AddMenu";

const ExpressionGroupShell = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 88px;
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

const ExpressionChildren = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
`

const GroupAction = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

// const SuccessIcon = styled(CheckCircleFilled)`
//   color:${props => props.theme.token?.colorSuccess};
// `
// const ErrorIcon = styled(CloseCircleFilled)`
//   color:${props => props.theme.token?.colorError};
// `

export const ExpressionGroup = memo((
  props: {
    ExpressInput: React.FC<ExpressionInputProps>
    value?: IExpressionGroup,
    onChange?: (value?: IExpressionGroup) => void
    root?: boolean,
  }
) => {
  const { ExpressInput, value, onChange, root } = props
  const t = useTranslate()

  return (
    <ExpressionGroupShell className="expression-group">
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
      <ExpressionChildren className="expression-children">
        {
          value?.children?.map((child, index) => {
            return (
              child.nodeType === ExpressionNodeType.Group ?
                <ExpressionGroup key={child.id} ExpressInput={ExpressInput} />
                : <ExpressionItem key={child.id}>
                  <ExpressInput />
                </ExpressionItem>
            )
          })
        }
        {
          !value?.children.length && <Item></Item>
        }
        <Item>
          <GroupAction>
            <AddMenu>
              <Button
                type="dashed"
                block
                icon={<PlusOutlined />}
              >
                {t("add")}
              </Button>
            </AddMenu>
            <Button
              type="text"
              icon={<DeleteOutlined />}
              style={{ marginLeft: 8}}
            />
          </GroupAction>
        </Item>
      </ExpressionChildren>
    </ExpressionGroupShell>
  )
})