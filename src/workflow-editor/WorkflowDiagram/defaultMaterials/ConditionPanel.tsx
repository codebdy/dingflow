import { memo, useState } from "react"
import { useTranslate } from "../../react-locales"
import { Form } from "antd"

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
      条件面板
    </Form>
  )
})