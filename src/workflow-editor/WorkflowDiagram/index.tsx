import { CSSProperties, memo, useCallback, useState } from "react"
import { styled } from "styled-components"
import { ZoomBar } from "../ZoomBar"
import { StartNode } from "../nodes/StartNode"
import { canvasColor } from "../utils/canvasColor"

const DiagramContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  background-color: ${canvasColor} ;
  position: relative;
  height: 0;
`

const Canvas = styled.div`
  flex: 1;
  padding: 56px 16px;
  overflow: auto;
  cursor: grab;//grabbing
  display: flex;
`

const CanvasInner = styled.div`
  flex: 1;
`

export const WorkflowDiagram = memo((
  props: {
    className?: string,
    style?: CSSProperties,
  }
) => {
  const [zoom, setZoom] = useState(1)

  const haneldZoomIn = useCallback(() => {
    setZoom(zoom => (zoom + 0.1))
  }, [])

  const haneldZoomOut = useCallback(() => {
    setZoom(zoom => (zoom - 0.1))
  }, [])

  return (
    <DiagramContainer {...props}>
      <Canvas className="flow-canvas">
        <CanvasInner style={{ transform: `scale(${zoom})` }}>
          <StartNode />
        </CanvasInner>
      </Canvas>
      <ZoomBar zoom={zoom} onZoomIn={haneldZoomIn} onZoomOut={haneldZoomOut} />
    </DiagramContainer >
  )
})