// components/ui/FloatingMoon.tsx
import Image from 'next/image'

const FloatingMoon = () => {
  return (
    <div className="relative">
      <Image
        src="/LuneHomepage.png"
        alt="Lune flottante"
        width={150}
        height={150}
        className="animate-floating"
      />
    </div>
  )
}

export default FloatingMoon
