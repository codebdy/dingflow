import { memo } from "react"
import { useStartNode } from "../../hooks/useStartNode"

export const StartNode = memo(() => {
  const { startNode } = useStartNode()
  return (
    <>
      {startNode?.id}
    </>
  )
})