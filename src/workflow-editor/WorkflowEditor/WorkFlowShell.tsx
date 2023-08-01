import { memo, useMemo } from "react"
import { ThemeProvider } from "styled-components"
import { IThemeToken } from "../theme"
import { useToken } from "antd/es/theme/internal"

export const WorkFlowShell = memo((props: {
  mode?: 'dark' | 'light',
  themeToken?: IThemeToken,
  children?: React.ReactNode,
}) => {
  const { mode, children, themeToken } = props;
  const [, token] = useToken();
  const theme: { token: IThemeToken, mode?: 'dark' | 'light' } = useMemo(() => {
    return {
      token: themeToken || token,
      mode
    }
  }, [mode, themeToken, token])
  return (
    <ThemeProvider theme={theme}>
      {
        children
      }
    </ThemeProvider>
  )
})