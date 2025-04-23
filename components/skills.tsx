'use client'

import { iconsMap } from './ui/icons'
import { SkillsCard } from './ui/skill-card'
import { SkillCategory } from '@/lib/interface'
import { SectionHeading, SlideIn, Transition } from './ui/transitions'

interface SkillsProps {
  categories: SkillCategory[]
}

export default function SkillsSection({ categories }: SkillsProps) {
  return (
    <section id='skills' className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/15 to-background relative'>
     
      <div className='container px-4 md:px-6'>
        <div className='flex-col items-center justify-center space-y-4'>
          <div className='space-y-2'>
            <SectionHeading className='md:pl-16 overflow-hidden tracking-tighter text-start w-full'>
              <SlideIn className='text-accent-foreground/50'>
                Skills &
              </SlideIn>
              <br />
              <SlideIn>
                tecnologias<span className='text-primary'>.</span>
              </SlideIn>
            </SectionHeading>

            <Transition className='text-start w-full md:pl-16'>
              <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed'>
                Tecnologias e ferramentas que utilizo para criar soluções web de
                alta qualidade.
              </p>
            </Transition>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2'>
          {categories.map((item, index) => {
            const IconComponent = iconsMap[item.icon as keyof typeof iconsMap]

            return (
              <SlideIn key={index}>
                <SkillsCard
                  icon={<IconComponent className='h-6 w-6 text-primary' />}
                  title={item.name}
                  description={item.skills.join(', ')}
                />
              </SlideIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
