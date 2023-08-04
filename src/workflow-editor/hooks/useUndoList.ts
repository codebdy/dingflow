import { useCallback, useEffect, useState } from "react"
import { useEditorStore } from "./useEditorStore"
import { ISnapshot } from "../interfaces/state"

export function useUndoList() {
  const [undoList, setSetUndoList] = useState<ISnapshot[]>([])
  const store = useEditorStore()

  const handleUndoListChange = useCallback((list: ISnapshot[]) => {
    setSetUndoList(list)
  }, [])

  useEffect(() => {
    const unsub = store?.subscribeUndoListChange(handleUndoListChange)
    return unsub
  }, [handleUndoListChange, store])

  useEffect(() => {
    setSetUndoList(store?.store.getState().undoList || [])
  }, [store?.store])

  return undoList
}