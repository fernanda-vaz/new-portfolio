'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, GithubIcon } from './icons'
import { TextReveal } from './transitions'

interface ProjectCardProps {
  imageUrl: string
  title: string
  description: string
  category: string
  badge: string[]
  href: string
  githuburl: string
}

export function ProjectCard({
  imageUrl,
  title,
  description,
  category,
  badge,
  href,
  githuburl,
}: ProjectCardProps) {
  return (
    <>
      <motion.div className=''>
        <AnimatePresence>
          <motion.div
            className='bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/50 h-[450px]'
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='relative h-64 overflow-hidden group'>
              <Image
                src={imageUrl}
                alt={title}
                layout='fill'
                objectFit='cover'
                className='transition-transform duration-300 ease-in-out group-hover:scale-105 z-0'
              />
              <motion.div
                className='absolute inset-0 bg-black/75 flex items-center justify-center z-10'
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className='text-white text-center px-4'>{description}</p>
              </motion.div>
              //
              <motion.div
                className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300'
                whileHover={{ opacity: 1 }}
              >
                <p className='text-white text-center px-4'>{description}</p>
              </motion.div>
            </div>

            <div className='p-6'>
              <div className='text-sm font-medium text-primary mb-1'>
                {category}
              </div>

              <h3 className='text-xl font-semibold text-foreground mb-2'>
                {title}
              </h3>

              <div className='flex flex-wrap gap-2 mb-4'>
                {badge.map((item, i) => (
                  <Badge key={i} variant='secondary'>
                    {item}
                  </Badge>
                ))}
              </div>

              <div className='flex items-center justify-between'>
                <Link
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline hover:text-secondary inline-flex items-center'
                >
                  <TextReveal>Ver Projeto</TextReveal>
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Link>

                <Link
                  href={githuburl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline hover:text-secondary inline-flex items-center'
                >
                  <GithubIcon />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  )
}
