'use client'

import { motion } from 'motion/react'
import { ProjectCard } from './ui/project-card'
import { Project } from '@/lib/interface'
import { SectionHeading, SlideIn, TextReveal, Transition } from './ui/transitions'
import { useState } from 'react'
import { Button } from './ui/button'

interface ProjectProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectProps) {
  const [showMore, setShowMore] = useState(false)

  const numProjectToShow = 3

  return (
    <section
      id='projects'
      className='w-full py-12 md:py-24 lg:py-32 bg-background'
    >
      <Transition>
        <span className='blob size-1/2 absolute top-20 left-20 blur-[100px] -z-10' />
      </Transition>
      <div className='container px-4 md:px-6'>
        <motion.div
          className='flex-col items-center justify-center space-y-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading className='md:pl-16 overflow-hidden tracking-tighter text-start w-full'>
            <SlideIn className='text-accent-foreground/50'>Projetos</SlideIn>
            <br />
            <SlideIn>
              recentes<span className='text-primary'>.</span>
            </SlideIn>
          </SectionHeading>

          <Transition className='text-start w-full md:pl-16'>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed mb-4'>
              Confira alguns dos meus trabalhos mais recentes.
            </p>
          </Transition>
        </motion.div>

        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.slice(0, showMore ? projects.length : numProjectToShow).map((proj, i) => (
            <Transition
            transition={{ delay: 0.2 + i * 0.1}}
            viewport={{ once: true }}
            key={i}
            layoutId={proj.title}
            >
              <ProjectCard 
                title={proj.title}
                description={proj.description}
                badge={proj.badge}
                category={proj.category}
                imageUrl={proj.imageUrl}
                href={proj.href}
                githuburl={proj.githuburl}
              />
            </Transition>
          ))}
          
          {/* {projects.map((item, i) => (
            <SlideIn key={i}>
              <ProjectCard
                title={item.title}
                description={item.description}
                badge={item.badge}
                category={item.category}
                imageUrl={item.imageUrl}
                href={item.href}
                githuburl={item.githuburl}
              />
            </SlideIn>
          ))} */}
        </motion.div>
      </div>
      <div className='grid place-items-center py-8'>
        {projects.length > numProjectToShow && (
          <Button
            variant='outline'
            size='lg'
            onClick={() => setShowMore(!showMore)}
        >
            <TextReveal>{showMore ? 'Ver menos' : 'Ver mais'}</TextReveal>
          </Button>
        )}
      </div>
    </section>
  )
}
