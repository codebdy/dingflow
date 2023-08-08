import { memo, useState } from "react"
import { Form } from "antd"
import { DefaultConditionInput, ExpressionInput } from "../../workflow-editor"

export interface IConditionSettings {

}

export const ConditionPanel = memo((
  props: {
    value?: IConditionSettings
    onChange?: (value?: IConditionSettings) => void
  }
) => {
  const [settingsType, setSettingsType] = useState<string>("node")

  return (
    <Form layout="vertical" colon={false}>
      <ExpressionInput ConditionInput={DefaultConditionInput} />
    </Form>
  )
})