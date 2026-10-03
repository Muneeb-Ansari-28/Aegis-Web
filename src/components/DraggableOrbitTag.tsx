import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from 'react'

type DragPosition = { x: number; y: number }

export function DraggableOrbitTag({ className, children }: { className: string; children: ReactNode }) {
  const labelRef = useRef<HTMLDivElement>(null)
  const pointer = useRef<DragPosition>({ x: 0, y: 0 })
  const grabOffset = useRef<DragPosition>({ x: 0, y: 0 })
  const draggingRef = useRef(false)
  const frame = useRef<number | null>(null)
  const [offset, setOffset] = useState<DragPosition>({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)

  const updateDrag = () => {
    const label = labelRef.current
    if (!draggingRef.current || !label) return

    const bounds = label.getBoundingClientRect()
    const dx = pointer.current.x - grabOffset.current.x - (bounds.left + bounds.width / 2)
    const dy = pointer.current.y - grabOffset.current.y - (bounds.top + bounds.height / 2)
    const distance = Math.hypot(dx, dy)
    const limit = 40
    const scale = distance > limit ? limit / distance : 1
    setOffset({ x: dx * scale, y: dy * scale })
    frame.current = requestAnimationFrame(updateDrag)
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    const bounds = event.currentTarget.getBoundingClientRect()
    grabOffset.current = {
      x: event.clientX - (bounds.left + bounds.width / 2),
      y: event.clientY - (bounds.top + bounds.height / 2),
    }
    pointer.current = { x: event.clientX, y: event.clientY }
    draggingRef.current = true
    setDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
    frame.current = requestAnimationFrame(updateDrag)
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return
    pointer.current = { x: event.clientX, y: event.clientY }
  }

  const release = () => {
    draggingRef.current = false
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    frame.current = null
    setDragging(false)
    setOffset({ x: 0, y: 0 })
  }

  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current)
  }, [])

  return <div ref={labelRef} className={`local-orbit-label ${className}${dragging ? ' is-dragging' : ''}`} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={release} onPointerCancel={release}>
    <div className="local-tag" style={{ '--drag-x': `${offset.x}px`, '--drag-y': `${offset.y}px` } as CSSProperties}>{children}</div>
  </div>
}
