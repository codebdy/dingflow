import { Space, Button } from "antd"
import { memo } from "react"
import { MiniFloatContainer } from "../ZoomBar"
import { undoIcon, redoIcon } from "../../icons"
import { useRedoList } from "../../hooks/useRedoList"
import { useUndoList } from "../../hooks/useUndoList"

export const OperationBar = memo((
  props: {
    float?: boolean,
  }
) => {
  const { float } = props
  const redoList = useRedoList();
  const undoList = useUndoList();

  return (
    <MiniFloatContainer className={"workflow-operation-bar" + (float ? " float" : "")}>
      <Space>
        <Button
          type={"text"}
          size="small"
          icon={undoIcon}
          disabled={undoList.length === 0}
        />
        <Button
          type={"text"}
          size="small"
          disabled={redoList.length === 0}
          icon={redoIcon}
        />
      </Space>
    </MiniFloatContainer>
  )
})