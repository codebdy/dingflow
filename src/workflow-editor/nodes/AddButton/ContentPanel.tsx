import { memo } from "react"
import { styled } from "styled-components"
import { useEditorStore } from "../../hooks"
import { MaterialItem } from "./MaterialItem"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 360px;
`


export const ContentPanel = memo(() => {
  const editorStore = useEditorStore()
  return (
    <Container className="add-node-content">
      {
        editorStore?.materials?.map(material => {
          return (
            <MaterialItem key={material.defaultConfig.nodeType} material={material} />
          )
        })
      }
    </Container>
  )
})