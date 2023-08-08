import { memo, useState } from "react"
import { Form, Input, Select } from "antd"
import { useTranslate } from "../../workflow-editor/react-locales"
import { styled } from "styled-components"

const itemHeight = 48;

const ExpressionGroup = styled.div`
  display: flex;
  align-items: stretch;
`
const Operator = styled.div`
  position: relative;
  width: 80px;
  //border: solid 1px;
  display: flex;
  align-items: center;
  padding-right: 16px;
`

const OperatorLine = styled.div`
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
`

export interface IConditionSettings {

}

export const ConditionPanel = memo((
  props: {
    value?: IConditionSettings
    onChange?: (value?: IConditionSettings) => void
  }
) => {
  const [settingsType, setSettingsType] = useState<string>("node")
  const t = useTranslate()

  return (
    <Form layout="vertical" colon={false}>
      <ExpressionGroup className="expression-group">
        <Operator className="operator">
          <OperatorLine className="operator-line" />
          <Select
            defaultValue="and"
            options={[
              { value: 'and', label: '且' },
              { value: 'or', label: '或' },
            ]}
          />
        </Operator>
        <ExpressionItems className="expression-items-container">
          <Item>
            <Input />
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
    </Form>
  )
})