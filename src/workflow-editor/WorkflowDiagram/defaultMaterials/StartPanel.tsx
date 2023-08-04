import { memo, useState } from "react"
import { ButtonSelect } from "../SettingsPanel/ButtonSelect"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { FormAuth } from "./FormAuth"
import { useTranslate } from "../../react-locales"

export interface IStartSettings {

}

export const StartPanel = memo((
  props: {
    value?: IStartSettings
    onChange?: (value?: IStartSettings) => void
  }
) => {
  const [settingsType, setSettingsType] = useState<string>("node")
  const t = useTranslate()
  
  return (
    <>
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
    </>
  )
})