import { memo, useState } from "react"
import { ButtonSelect } from "../SettingsPanel/ButtonSelect"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { FormAuth } from "./FormAuth"
import { useTranslate } from "../../react-locales"
import { Form } from "antd"

export interface IApproverSettings {

}

export const ApproverPanel = memo((
  props: {
    value?: IApproverSettings
    onChange?: (value?: IApproverSettings) => void
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