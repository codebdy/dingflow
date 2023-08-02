import { useCallback, useEffect, useState } from "react"
import { useEditorStore } from "./useEditorStore"
import { ActionType, SelectNodeAction } from "../actions"

export function useSelectedId() {
  const [selectedId, setSelectedId] = useState<string>()
  const store = useEditorStore()

  const handleSelectedChange = useCallback((selected: string | undefined) => {
    setSelectedId(selected)
  }, [])

  const doSetSelectedId = useCallback((selected: string | undefined) => {
    const selectAction: SelectNodeAction = { type: ActionType.SELECT_NODE, payload: { id: selected } }
    store?.dispatch(selectAction)
  }, [store])

  useEffect(() => {
    const unsub = store?.subscribeSelectedChange(handleSelectedChange)
    return unsub
  }, [handleSelectedChange, store])

  useEffect(() => {
    setSelectedId(store?.store.getState().selectedId)
  }, [store?.store])

  return { selectedId: selectedId, setSelectedId: doSetSelectedId }
}