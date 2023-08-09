import { memo, useState } from "react"
import { ButtonSelect } from "../../workflow-editor/components/ButtonSelect"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { FormAuth } from "./FormAuth"
import { useTranslate } from "../../workflow-editor/react-locales"
import { Form } from "antd"

export interface INotifierSettings {

}

export const NotifierPanel = memo((
  props: {
    value?: INotifierSettings
    onChange?: (value?: INotifierSettings) => void
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
            label: t("setNotifier"),
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