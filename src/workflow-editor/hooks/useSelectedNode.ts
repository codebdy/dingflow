import { useEditorStore } from "./useEditorStore";
import { useSelectedId } from "./useSelectedId";

export function useSelectedNode() {
  const selectedId = useSelectedId();
  const store = useEditorStore();

  return selectedId ? store?.getNode(selectedId) : undefined
}