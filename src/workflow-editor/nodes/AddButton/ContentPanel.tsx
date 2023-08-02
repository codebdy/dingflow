import { memo } from "react"
import { styled } from "styled-components"
import { useEditorStore } from "../../hooks"
import { MaterialItem } from "./MaterialItem"
import { INodeMaterial } from "../../interfaces/material"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 360px;
`


export const ContentPanel = memo((
  props: {
    nodeId: string
    onClickMaterial: (material: INodeMaterial) => void,
  }
) => {
  const { nodeId, onClickMaterial } = props
  const editorStore = useEditorStore()
  return (
    <Container className="add-node-content">
      {
        editorStore?.materials?.map(material => {
          return (
            <MaterialItem
              nodeId={nodeId}
              key={material.defaultConfig.nodeType}
              material={material}
              onClick={() => onClickMaterial?.(material)}
            />
          )
        })
      }
    </Container>
  )
})