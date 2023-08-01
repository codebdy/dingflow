import { memo, useState } from "react"

export const Example = memo(() => {
  const [themeMode, setThemeMode] = useState<"dark" | "light">("light")
  return (
    <>haha
    </>
  )
})