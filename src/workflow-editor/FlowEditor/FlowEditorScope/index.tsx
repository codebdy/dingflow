import { memo, useEffect, useState } from "react"
import { IThemeToken } from "../../theme"
import { ConfigRoot } from "../ConfigRoot"
import { ILocales, LocalesManager } from "@rxdrag/locales"
import { LocalesContext } from "../../react-locales"
import { defalutLocales } from "../../locales"
import { IMaterialUIs, INodeMaterial } from "../../interfaces/material"
import { FlowEditorScopeInner } from "./FlowEditorScopeInner"

export const FlowEditorScope = memo((props: {
  mode?: 'dark' | 'light',
  themeToken?: IThemeToken,
  children?: React.ReactNode,
  lang?: string,
  locales?: ILocales,
  materials?: INodeMaterial[],
  materialUis?: IMaterialUIs,
}) => {
  const { children, lang, locales, ...other } = props
  const [localesManager, setLocalesManager] = useState(new LocalesManager(lang, defalutLocales))

  useEffect(() => {
    locales && localesManager.registerLocales(locales)
  }, [localesManager, locales])

  useEffect(() => {
    //暂时这么处理，后面把语言切换移动到locales-react
    setLocalesManager(new LocalesManager(lang, defalutLocales))
  }, [lang])

  return (
    <LocalesContext.Provider value={localesManager}>
      <ConfigRoot themeMode={other.mode}>
        <FlowEditorScopeInner {...other}>
          {children}
        </FlowEditorScopeInner>
      </ConfigRoot>
    </LocalesContext.Provider>
  )
})