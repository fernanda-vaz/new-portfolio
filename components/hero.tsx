'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
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
    <section className='relative isolate overflow-hidden w-full py-12 md:py-24 lg:py-32 xl:py-48'>
      <Transition>
        <span className='blob size-1/2 absolute top-20 left-20 blur-[100px] -z-10 opacity-50' />
      </Transition>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-20'>
          <div className='flex flex-col justify-center space-y-4 gap-12'>
            <div className='space-y-2 flex flex-col md:text-start text-center'>
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
                className='md:text-start text-center max-w-[600px] mt-6 text-xl/relaxed leading-8 text-muted-foreground'
              >
                <MotionAnimatedText>{about.title}</MotionAnimatedText>
              </motion.div>
            </div>
            <SlideIn>
              <div className='flex flex-col gap-8 min-[400px]:flex-row items-center md:justify-start md:mx-auto justify-center' >
                <Button asChild size='lg' disabled={false} className='z-50'>
                  <Link href='#projects'>
                    <TextReveal>Ver Projetos</TextReveal>
                  </Link>
                </Button>

                <Button
                  asChild
                  size='lg'
                  disabled={false}
                  variant='outline'
                  className='z-50'
                >
                  <Link href='#contact'>
                    <TextReveal>Entre em Contato</TextReveal>
                  </Link>
                </Button>
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
                src={about.heroImage.url}
                width={800}
                height={450}
                alt='Imagem de perfil'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
