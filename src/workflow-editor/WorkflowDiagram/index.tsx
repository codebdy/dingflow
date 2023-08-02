import { memo } from "react"
import { styled } from "styled-components"
import { ZoomBar } from "../ZoomBar"
import { StartNode } from "../nodes/StartNode"
import { EndNode } from "../nodes/EndNode"

const Canvas = styled.div`
  flex: 1;
  background-color: ${props => props.theme.mode === "light" ? "#f5f5f7" : undefined} ;
  padding: 56px 16px;
  position: relative;
  cursor: grab;//grabbing
`

export const WorkflowDiagram = memo(() => {
  return (
    <Canvas style={{ transform: `scale(1)` }}>
      <StartNode />
      <EndNode />
      <ZoomBar />
    </Canvas>
  )
})