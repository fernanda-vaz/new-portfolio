'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { HTMLMotionProps, motion } from 'motion/react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SectionHeadingProps extends HTMLMotionProps<'h3'> {}

export const SectionHeading = ({
  className,
  ...props
}: SectionHeadingProps) => {
  return (
    <motion.h3
      className={cn(
        'text-4xl md:text-6xl font-semibold font-sans md:px-4 px-2 pb-10 mx-auto',
        className
      )}
      {...props}
    />
  )
}

interface TextRevealProps {
  children: string
  className?: string
}

export const TextReveal = ({ children, className }: TextRevealProps) => {
  const [hover, setHover] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn('relative overflow-hidden whitespace-pre', className)}
    >
      <div className='overflow-hidden'>
        {children.split('').map((char, i) => (
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: hover ? '-100%' : 0 }}
            layout
            transition={{ delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] }}
            exit={{
              y: 0,
              transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
            }}
            key={i}
            className='inline-block whitespace-'
          >
            {char}
          </motion.span>
        ))}
      </div>

      <motion.div className='absolute left-0 top-0'>
        {children.split('').map((char, i) => (
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: hover ? 0 : '100%' }}
            layout
            transition={{ delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] }}
            exit={{
              y: 0,
              transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
            }}
            key={i}
            className='inline-block whitespace-'
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

interface TransitionProps extends HTMLMotionProps<'div'> {}

export const Transition = ({
  initial,
  whileInView,
  transition,
  ...rest
}: TransitionProps) => {
  const init = initial ? initial : { opacity: 0 }
  const inView = whileInView ? whileInView : { opacity: 1 }
  const trans = transition ? transition : { duration: 0.8, delay: 0.4 }

  return (
    <motion.div
      initial={init}
      whileInView={inView}
      transition={trans}
      {...rest}
    />
  )
}

interface Props extends HTMLMotionProps<'span'> {}

export const SlideIn = ({
  className,
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}: Props) => {
  const init = initial ? initial : { opacity: 0, y: '100%' }
  const inView = whileInView ? whileInView : { opacity: 1, y: 0 }
  const trans = transition ? transition : { duration: 0.5, delay: 0.3 }

  return (
    <motion.span
      initial={init}
      whileInView={inView}
      transition={trans}
      viewport={viewport ? viewport : { once: true }}
      className={cn('inline-block overflow-hidden', className)}
      {...rest}
    />
  )
}

// gsap.registerPlugin(ScrollTrigger)

// export const AnimatedText = ({ children }: { children: string }) => {
//   useEffect(() => {
//     const elements = document.querySelectorAll('.animated-text')

//     elements.forEach((element) => {
//       const split = new SplitType(element as HTMLElement, {
//         types: 'words,chars',
//       })

//       gsap.from(split.chars, {
//         scrollTrigger: {
//           trigger: element,
//           start: 'top 90%',
//           end: 'top 20%',
//           scrub: true,
//           markers: false,
//         },
//         opacity: 0.3,
//         stagger: 0.02,
//       })
//     })
//   }, [])

//   return (
//     <div>
//       <span className='animated-text text-muted-foreground md:text-xl/relaxed'>
//         {children}
//       </span>
//     </div>
//   )
// }

export const MotionAnimatedText = ({ children }: { children: string }) => {
  const [words, setWords] = useState<string[]>([])

  useEffect(() => {
    setWords(children.split(' '))
  }, [children])

  return (
    <div className='overflow-hidden'>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: i * 0.08,
            duration: 0.5,
            ease: 'easeOut',
          }}
          className='inline-block mr-2'
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
