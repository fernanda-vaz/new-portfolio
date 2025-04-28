'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { motion } from 'motion/react'
import { About } from '@/lib/interface'
import {
  MotionAnimatedText,
  SlideIn,
  TextReveal,
  Transition,
} from './ui/transitions'

interface HeroProps {
  about: About
}

export default function HeroSection({ about }: HeroProps) {
  return (
    <section
      className='relative isolate overflow-hidden w-full py-12 md:py-24 lg:py-32 xl:py-48'
      style={{ zIndex: 0 }}
    >
      <Transition>
        <span
          className='blob size-1/2 absolute top-20 left-20 blur-[100px] -z-10 opacity-50'
          style={{
            zIndex: -1,
            isolation: 'isolate',
          }}
        />
      </Transition>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-20'>
          <div className='flex flex-col justify-center space-y-4 gap-12'>
            <div className='space-y-2 flex flex-col lg:text-start text-center'>
              <Transition>
                <Badge
                  className='inline-flex text-lg font-normal'
                  variant='outline'
                >
                  Olá, sou {about.name}
                </Badge>
              </Transition>
              <motion.h1
                className='mt-10 text-4xl font-bold tracking-tight text-primary sm:text-6xl max-w-[800px] text-wrap'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className='text-gradient'>{about.badge}</span>
              </motion.h1>
              {/* <motion.p
                className='mt-6 text-lg leading-8 text-muted-foreground'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {about.subtitle}
              </motion.p> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='lg:text-start text-center max-w-screen mt-6 text-xl/relaxed leading-8 text-muted-foreground'
              >
                <MotionAnimatedText>{about.title}</MotionAnimatedText>
              </motion.div>
            </div>

            <SlideIn className='relative z-10'>
              <div className='flex flex-col gap-8 min-[480px]:flex-row items-center lg:justify-start justify-center'>
                <Link
                  href='#projects'
                  className='w-fit px-8 h-14 shrink-0 bg-secondary shadow-md rounded-xl flex justify-center items-center cursor-pointer text-secondary-foreground hover:bg-primary/70 hover:text-foreground transition-colors duration-300 font-medium gap-2'
                >
                  <span className='relative overflow-hidden inline-block'>
                    <TextReveal>Ver Projetos</TextReveal>
                  </span>
                </Link>

                <Link
                  href='#contact'
                  className='w-fit px-8 h-14 shrink-0 shadow-md rounded-xl flex justify-center items-center cursor-pointer border border-input bg-transparent hover:bg-background hover:text-accent-foreground hover:opacity-95 transition-colors duration-300 font-medium gap-2'
                >
                  <span className='relative overflow-hidden inline-block'>
                    <TextReveal>Vamos conversar</TextReveal>
                  </span>
                </Link>
              </div>
            </SlideIn>
          </div>
          <motion.div
            className='mx-auto mt-16 lg:mt-0'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className='relative w-fit'>
              <Image
                src={'/profile-fe.png'}
                width={800}
                height={450}
                alt='Imagem de perfil'
                className='rounded-full object-cover size-48 md:size-80 border-2 border-secondary mb-8 md:mb-0'
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
