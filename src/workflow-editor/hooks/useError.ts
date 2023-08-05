import { useCallback, useEffect, useState } from "react"
import { IErrors } from "../interfaces/state"
import { useEditorStore } from "./useEditorStore"

export function useError(nodeId: string) {
  const [errors, setErrors] = useState<IErrors>()

  const store = useEditorStore()

  const handleErrorsChange = useCallback((errs: IErrors) => {
    setErrors(errs)
  }, [])

  useEffect(() => {
    const unsub = store?.subscribeErrorsChange(handleErrorsChange)
    return unsub
  }, [handleErrorsChange, store])

  useEffect(() => {
    setErrors(store?.store.getState().errors)
  }, [store?.store])

  return errors?.[nodeId]
}