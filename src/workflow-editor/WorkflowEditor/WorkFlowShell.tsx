import { memo, useMemo } from "react"
import { ThemeProvider } from "styled-components"
import { IThemeToken } from "../theme"
import { useToken } from "antd/es/theme/internal"

export const WorkFlowShell = memo((props: {
  mode?: 'dark' | 'light',
  children?: React.ReactNode,
}) => {
  const { mode, children } = props;
  const [, token] = useToken();
  const theme: { token: IThemeToken, mode?: 'dark' | 'light' } = useMemo(() => {
    return {
      token,
      mode
    }
  }, [mode, token])
  return (
    <ThemeProvider theme={theme}>
      {
        children
      }
    </ThemeProvider>
  )
})