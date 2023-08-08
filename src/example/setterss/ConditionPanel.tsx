import { memo, useCallback, useState } from "react"
import { Form } from "antd"
import { DefaultExpressionInput, ExpressionGroupType, ExpressionNodeType, ExpressionTreeInput, IExpressionGroup } from "../../workflow-editor"
import { createUuid } from "../../workflow-editor/utils/create-uuid"

export interface IConditionSettings {

}

export const ConditionPanel = memo((
  props: {
    value?: IConditionSettings
    onChange?: (value?: IConditionSettings) => void
  }
) => {
  const [settingsType, setSettingsType] = useState<string>("node")
  const [rootExpression, setRootExpression] = useState<IExpressionGroup>({
    id: "root",
    nodeType: ExpressionNodeType.Group,
    groupType: ExpressionGroupType.And,
    children: [
      {
        nodeType: ExpressionNodeType.Expression,
        id: createUuid(),
      }
    ]
  })

  const handleExpressionChange = useCallback((exp: IExpressionGroup) => {
    setRootExpression(exp)
  }, [])

  return (
    <Form layout="vertical" colon={false}>
      <ExpressionTreeInput
        ExpressInput={DefaultExpressionInput}
        value={
          rootExpression
        }
        onChange={handleExpressionChange}
      />
    </Form>
  )
})