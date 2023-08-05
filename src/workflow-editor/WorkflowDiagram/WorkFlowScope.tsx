import { memo, useEffect, useMemo, useState } from "react"
import { ThemeProvider } from "styled-components"
import { IThemeToken } from "../theme"
import { useToken } from "antd/es/theme/internal"
import { EditorStore } from "../classes"
import { WorkflowEditorStoreContext } from "../contexts"
import { ConfigRoot } from "./ConfigRoot"
import { ILocales, LocalesManager } from "@rxdrag/locales"
import { LocalesContext, useTranslate } from "../react-locales"
import { defalutLocales } from "../locales"
import { IMaterialUIs, INodeMaterial } from "../interfaces/material"
import { defaultMaterials } from "./defaultMaterials"

const WorkFlowScopeInner = memo((props: {
  mode?: 'dark' | 'light',
  themeToken?: IThemeToken,
  children?: React.ReactNode,
  materials?: INodeMaterial[],
  materialUis?: IMaterialUIs,
}) => {
  const { mode, children, themeToken, materials, materialUis } = props;
  const [, token] = useToken();
  const t = useTranslate()

  const theme: { token: IThemeToken, mode?: 'dark' | 'light' } = useMemo(() => {
    return {
      token: themeToken || token,
      mode
    }
  }, [mode, themeToken, token])
  const store: EditorStore = useMemo(() => {
    return new EditorStore()
  }, [])

  useEffect(() => {
    store.t = t
  }, [store, t])

  useEffect(() => {
    const oldMaterials = store.materials
    const oldMaterialUis = store.materialUis
    store.materials = [...oldMaterials, ...defaultMaterials, ...materials || []]
    store.materialUis = { ...oldMaterialUis, ...materialUis }
    return () => {
      store.materials = oldMaterials;
      store.materialUis = oldMaterialUis;
    }
  }, [materialUis, materials, store])

  return (
    <WorkflowEditorStoreContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        {
          store && children
        }
      </ThemeProvider>
    </WorkflowEditorStoreContext.Provider>
  )
})

export const WorkFlowScope = memo((props: {
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
        <WorkFlowScopeInner {...other}>
          {children}
        </WorkFlowScopeInner>
      </ConfigRoot>
    </LocalesContext.Provider>
  )
})