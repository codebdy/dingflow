import { memo, useState } from "react"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { FormAuth } from "./FormAuth"
import { Form } from "antd"
import { useTranslate } from "../../workflow-editor/react-locales"
import { ButtonSelect } from "../../workflow-editor"

export interface IAuditSettings {

}

export const AuditPanel = memo((
  props: {
    value?: IAuditSettings
    onChange?: (value?: IAuditSettings) => void
  }
) => {
  const [settingsType, setSettingsType] = useState<string>("node")
  const t = useTranslate()
  
  return (
    <Form layout="vertical" colon={false}>
      <ButtonSelect
        options={[
          {
            key: "node",
            label: t("setDealer"),
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