import aegisShield from '../assets/aegis-shield.png'

export function ShieldLogo({ className = '' }: { className?: string }) {
  return <img className={className} src={aegisShield} alt="Aegis shield logo" />
}
