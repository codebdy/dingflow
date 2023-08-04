import { QuestionCircleOutlined } from "@ant-design/icons"
import { Button, Divider } from "antd"
import { memo, useCallback, useEffect, useState } from "react"
import { styled } from "styled-components"
import { useTranslate } from "../../react-locales"

const Shell = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.token?.colorBorderSecondary};
  padding: 2px 1px;
  border-radius: 6px;
`

const StyleButton = styled(Button)`
  flex:1;
  color: ${props => props.theme.token?.colorTextSecondary};
  &.active{
    color: ${props => props.theme.token?.colorText};
    &:hover{
      border: solid 1px ${props => props.theme.token?.colorBorder};
      color: ${props => props.theme.token?.colorText};
    }
    div{
      display: none;
    }
  }
`

export enum SettingsType {
  formAuth = "formAuth",
  node = "node"
}


export const TypeSwitch = memo((
  props: {
    value?: SettingsType,
    onChange?: (value?: SettingsType) => void
  }
) => {
  const { value = SettingsType.node, onChange } = props
  const [inputValue, setInputValue] = useState<SettingsType>()

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const t = useTranslate()

  const handleNodeClick = useCallback(() => {
    setInputValue(SettingsType.node)
    onChange?.(SettingsType.node)
  }, [onChange])

  const handleFormAuthClick = useCallback(() => {
    setInputValue(SettingsType.formAuth)
    onChange?.(SettingsType.formAuth)
  }, [onChange])

  return (
    <Shell>
      <StyleButton
        type={inputValue !== SettingsType.node ? "text" : undefined}
        className={inputValue === SettingsType.node ? "active" : undefined}
        onClick={handleNodeClick}
      >
        发起人设置
      </StyleButton>
      <Divider type="vertical" />
      <StyleButton
        type={inputValue !== SettingsType.formAuth ? "text" : undefined}
        className={inputValue === SettingsType.formAuth ? "active" : undefined}
        onClick={handleFormAuthClick}
      >
        {t("formAuth")} <QuestionCircleOutlined />
      </StyleButton>
    </Shell>
  )
})