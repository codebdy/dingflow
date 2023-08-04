import { Button, Space } from "antd"
import { memo, useCallback, useState } from "react"
import { WorkflowEditor } from "../workflow-editor/WorkflowEditor"
import { ShellContainer } from "./ShellContainer"
import { styled } from "styled-components"

const Toolbar = styled.div`
  height: 56px;
  border-bottom: solid 1px rgba(0,0,0, 0.1);
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
  box-sizing: border-box;
`

export enum Lang {
  cn = "zh-CN",
  en = "en-US"
}

export const Example = memo(() => {
  const [lang, setlang] = useState<Lang>(Lang.cn)
  const [themeMode, setThemeMode] = useState<"dark" | "light">("light")

  const handleToggleTheme = useCallback(() => {
    setThemeMode(mode => mode === "light" ? "dark" : "light")
  }, [])

  const handleSwitchLang = useCallback(() => {
    setlang(lang => lang === Lang.cn ? Lang.en : Lang.cn)
  }, [])

  return (
    <ShellContainer>
      <Toolbar>
        <span>
          工作流演示
        </span>
        <Space>
          <Button onClick={handleToggleTheme}>主题切换</Button>
          <Button onClick={handleSwitchLang}>{lang === Lang.cn ? "English" : "中文"}</Button>
        </Space>
      </Toolbar>
      <WorkflowEditor themeMode={themeMode} lang={lang} />
    </ShellContainer>
  )
})