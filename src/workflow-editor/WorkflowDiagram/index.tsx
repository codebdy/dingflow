import { CSSProperties, memo, useCallback, useRef, useState } from "react"
import { styled } from "styled-components"
import { StartNode } from "../nodes/StartNode"
import { canvasColor } from "../utils/canvasColor"
import { ZoomBar } from "./ZoomBar"

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
  padding-bottom: 0;
  overflow: auto;
  cursor: grab;//grabbing
  display: flex;
`

const CanvasInner = styled.div`
  flex: 1;
  transform-origin: 50% 0px 0px;
`
function toDecimal(x: number) {
  const f = Math.round(x * 10) / 10;
  return f;
}

export interface IPosition {
  x: number,
  y: number,
}

export const WorkflowDiagram = memo((
  props: {
    className?: string,
    style?: CSSProperties,
  }
) => {
  const [zoom, setZoom] = useState(1)
  const [mousePressedPoint, setMousePressedPoint] = useState<IPosition>()
  const canvasRef = useRef<HTMLDivElement>(null)

  const haneldZoomIn = useCallback(() => {
    setZoom(zoom => toDecimal(zoom < 3 ? (zoom + 0.1) : zoom))
  }, [])

  const haneldZoomOut = useCallback(() => {
    setZoom(zoom => toDecimal(zoom > 0.1 ? (zoom - 0.1) : zoom))
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setMousePressedPoint({ x: e.clientX, y: e.clientY })
  }, [])

  const handleMouseUp = useCallback(() => {
    setMousePressedPoint(undefined)
  }, [])

  const handleMouseMove = useCallback(() => {
    if (!mousePressedPoint) {
      return
    }
  }, [mousePressedPoint])

  return (
    <DiagramContainer {...props}>
      <Canvas
        ref={canvasRef}
        className={"flow-canvas"}
        style={{
          cursor: mousePressedPoint ? "grabbing" : "grab"
        }}
        key={zoom}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <CanvasInner style={{ transform: `scale(${zoom})` }}>
          <StartNode />
        </CanvasInner>
      </Canvas>
      <ZoomBar zoom={zoom} onZoomIn={haneldZoomIn} onZoomOut={haneldZoomOut} />
    </DiagramContainer >
  )
})