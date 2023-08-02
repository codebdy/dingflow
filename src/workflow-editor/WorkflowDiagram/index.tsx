import { CSSProperties, memo } from "react"
import { styled } from "styled-components"
import { ZoomBar } from "../ZoomBar"
import { StartNode } from "../nodes/StartNode"
import { EndNode } from "../nodes/EndNode"

const DiagramContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  background-color: ${props => props.theme.mode === "light" ? "#f5f5f7" : undefined} ;
  position: relative;
  height: 0;
`

const Canvas = styled.div`
  flex: 1;
  padding: 56px 16px;
  overflow: auto;
  cursor: grab;//grabbing
`

export const WorkflowDiagram = memo((
  props: {
    className?: string,
    style?: CSSProperties,
  }
) => {
  const { style, ...other } = props;
  return (
    <DiagramContainer style={{ transform: `scale(1)`, ...style }}{...other}>
      <Canvas>
        <StartNode />
        <EndNode />
      </Canvas>
      <ZoomBar />
    </DiagramContainer >
  )
})