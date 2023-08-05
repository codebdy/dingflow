import { memo } from "react"
import className from "classnames"

export const ContentPlaceholder = memo((
  props: {
    text?: string,
    secondary?: boolean,
  }
) => {
  const { text, secondary } = props
  return (
    <span
      className={className("text", secondary ? " secondary" : "")}>
      {text}
    </span>
  )
})