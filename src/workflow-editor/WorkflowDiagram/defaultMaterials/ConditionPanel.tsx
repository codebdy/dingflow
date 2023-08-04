import { memo, useState } from "react"
import { ButtonSelect } from "../SettingsPanel/ButtonSelect"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { FormAuth } from "./FormAuth"
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
    <Form>
      <ButtonSelect
        options={[
          {
            key: "node",
            label: t("promoter") + t("settingsSuffix"),
          },
          {
            key: "formAuth",
            label: <>{t("formAuth")} <QuestionCircleOutlined /></>
          }
        ]}
        value={settingsType}
        onChange={setSettingsType}
      />
      {settingsType === 'formAuth' && <FormAuth />}
    </Form>
  )
})