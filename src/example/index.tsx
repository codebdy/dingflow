import { ConfigProvider, theme } from "antd"
import { memo, useCallback, useState } from "react"
import { ExampleInner } from "./ExampleInner"

export const Example = memo(() => {
  const [themeMode, setThemeMode] = useState<"dark" | "light">("light")

  const handleToggleTheme = useCallback(() => {
    setThemeMode(mode => mode === "light" ? "dark" : "light")
  }, [])
  
  return (
    <ConfigProvider
      theme={{
        algorithm: themeMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      <ExampleInner toggleTheme={handleToggleTheme} />
    </ConfigProvider>
  )
})