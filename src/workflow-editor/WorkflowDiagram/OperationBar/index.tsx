import { Space, Button } from "antd"
import { memo } from "react"
import { MiniFloatContainer } from "../ZoomBar"
import { undoIcon, redoIcon } from "../../icons"

export const OperationBar = memo((
  props: {
    float?: boolean,
  }
) => {
  const { float } = props
  return (
    <MiniFloatContainer className={"workflow-operation-bar" + (float ? " float" : "")}>
      <Space>
        <Button
          type={"text"}
          size="small"
          icon={undoIcon}
        />
        <Button
          type={"text"}
          size="small"
          disabled
          icon={redoIcon}
        />
      </Space>
    </MiniFloatContainer>
  )
})