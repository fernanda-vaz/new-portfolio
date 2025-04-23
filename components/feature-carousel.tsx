'use client'

import { motion, useAnimation, useMotionValue } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { iconsMap } from './ui/icons'
import { Feature } from '@/lib/interface'
import { SectionHeading, SlideIn, Transition } from './ui/transitions'

interface FeatureProps {
  features: Feature[]
}

export default function FeatureCarousel({ features }: FeatureProps) {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()

    if (currentX > 0) {
      controls.start({
        x: 0,
        transition: { type: 'spring', stiffness: 300, damping: 30 },
      })
    } else if (currentX < -width) {
      controls.start({
        x: -width,
        transition: { type: 'spring', stiffness: 300, damping: 30 },
      })
    }
  }

  return (
    <div className='py-20 bg-gradient-to-b from-background to-secondary/15 relative'>
      <div className='maw-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading className='md:pl-16 overflow-hidden tracking-tighter text-start'>
          <SlideIn className='text-accent-foreground/50'>Como posso</SlideIn>
          <br />
          <SlideIn>
            te ajudar<span className='text-primary'>.</span>
          </SlideIn>
        </SectionHeading>
        <motion.div
          ref={carousel}
          className='cursor-grab overflow-hidden'
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            drag='x'
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: 'grabbing' }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className='flex'
          >
            {features.map((item, index) => {
              const IconComponent = iconsMap[item.icon as keyof typeof iconsMap]

              return (
                <motion.div
                  key={index}
                  className='min-w-[300px] h-[400px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10'
                >
                  <div>
                    <div className='text-4xl mb-4'>{<IconComponent />}</div>
                    <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                    <p className='text-muted-foreground'>{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
