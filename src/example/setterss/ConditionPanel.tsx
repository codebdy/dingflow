import { memo, useState } from "react"
import { Form, Input, Select } from "antd"
import { useTranslate } from "../../workflow-editor/react-locales"
import { styled } from "styled-components"

const itemHeight = 48;

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
  left: 50%;
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


const Expression = styled.div`
  flex: 1;
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
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <Operator>
          <OperatorLine />
          <Select
            defaultValue="and"
            options={[
              { value: 'and', label: '且' },
              { value: 'or', label: '或' },
            ]}
          />
        </Operator>
        <div>
          <div style={{ height: 48, display: "flex", alignItems: "center" }}>
            <Input />
          </div>
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <div style={{ height: 48, display: "flex", alignItems: "center" }}>
            <Input />
          </div>
        </div>
      </div>
    </Form>
  )
})