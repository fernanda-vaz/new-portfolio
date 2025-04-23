import { Skill } from '@/lib/interface'
import { ParallaxText } from './ui/parallax-text'

interface MarqueeProps {
  skills: Skill[]
}

export default function Marquee({ skills }: MarqueeProps) {
  return (
    <div className='relative w-full overflow-hidden bg-background py-16'>
      <div className='absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10'>
        <ParallaxText baseVelocity={-3}>
          {skills.map((skill, index) =>
            skill.enabled ? (
              <span
                key={index}
                className='text-xl sm:text-2xl md:text-5xl font-bold text-transparent px-4'
                style={{
                  WebkitTextStroke: '1px rgb(156, 163, 175)',
                }}
              >
                {skill.name} •
              </span>
            ) : null
          )}
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          {skills.map((skill, index) =>
            skill.enabled ? (
              <span
                key={index}
                className='text-xl sm:text-2xl md:text-5xl font-bold text-transparent px-4'
                style={{
                  WebkitTextStroke: '1px rgb(156, 163, 175)',
                }}
              >
                {skill.name} •
              </span>
            ) : null
          )}
        </ParallaxText>
      </div>
    </div>
  )
}
