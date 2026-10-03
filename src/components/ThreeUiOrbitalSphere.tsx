import { useEffect, useRef, useState, type ComponentType } from 'react'
import { useReducedMotion } from 'framer-motion'

type OrbitalSphereProps = {
  className?: string
  speed?: number
  particleSize?: number
  particleOpacity?: number
  orbitOpacity?: number
  scale?: number
  haloOpacity?: number
  hue?: number
}

export function ThreeUiOrbitalSphere(props: OrbitalSphereProps) {
  const host = useRef<HTMLDivElement>(null)
  const [Renderer, setRenderer] = useState<ComponentType<OrbitalSphereProps> | null>(null)
  const [supported, setSupported] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const scene = document.querySelector('.hero-scene')
    if (!scene) return
    const observer = new IntersectionObserver(([entry]) => scene.classList.toggle('scene-paused', !entry?.isIntersecting || document.hidden))
    const visibility = () => scene.classList.toggle('scene-paused', document.hidden || !scene.getBoundingClientRect().width)
    observer.observe(scene)
    document.addEventListener('visibilitychange', visibility)
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility) }
  }, [])

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      setSupported(Boolean(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))))
    } catch {
      setSupported(false)
    }
  }, [])

  useEffect(() => {
    const element = host.current
    if (!element || !supported || reducedMotion) return
    let alive = true
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting || Renderer) return
      import('@designcodeio/threeui/components/OrbitalSphereBackground')
        .then(module => { if (alive) setRenderer(() => module.OrbitalSphereBackground) })
        .catch(() => { /* The CSS radar remains as the fallback scene. */ })
    })
    observer.observe(element)
    return () => { alive = false; observer.disconnect() }
  }, [Renderer, reducedMotion, supported])

  return <div ref={host} className="threeui-load-area" aria-hidden="true">
    {supported && !reducedMotion && Renderer && <Renderer {...props}/>}
  </div>
}
