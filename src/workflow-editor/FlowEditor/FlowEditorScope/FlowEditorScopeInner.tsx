import { useToken } from "antd/es/theme/internal";
import { memo, useMemo, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { EditorEngine } from "../../classes";
import { WorkflowEditorStoreContext } from "../../contexts";
import { INodeMaterial, IMaterialUIs } from "../../interfaces";
import { useTranslate } from "../../react-locales";
import { IThemeToken } from "../../theme";
import { defaultMaterials } from "../defaultMaterials";

export const FlowEditorScopeInner = memo((props: {
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
  const store: EditorEngine = useMemo(() => {
    return new EditorEngine()
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