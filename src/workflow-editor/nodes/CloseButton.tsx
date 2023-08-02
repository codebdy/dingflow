import { useCallback } from "react"
import { CloseIcon } from "./styled"
import { useEditorStore } from "../hooks"

export const CloseButton = ((
  props: {
    nodeId?: string
  }
) => {
  const { nodeId } = props
  const store = useEditorStore()

  const handleClose = useCallback(() => {
    store?.removeNode(nodeId)
  }, [nodeId, store])

  return (
    <CloseIcon className="close" onClick={handleClose} />
  )
})