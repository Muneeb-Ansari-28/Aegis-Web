declare module '@designcodeio/threeui/components/OrbitalSphereBackground' {
  import type { ComponentType } from 'react'

  export const OrbitalSphereBackground: ComponentType<{
    className?: string
    speed?: number
    particleSize?: number
    particleOpacity?: number
    orbitOpacity?: number
    scale?: number
    haloOpacity?: number
    hue?: number
  }>
}
