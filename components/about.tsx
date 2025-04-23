import Image from 'next/image'
import { About, Service } from '@/lib/interface'
import { SectionHeading, SlideIn, Transition } from './ui/transitions'

interface AboutProps {
  about: About
  services: Service[]
}

export function AboutSection({ about, services }: AboutProps) {
  return (
    <section
      id='about'
      className='w-full py-12 md:py-24 lg:py-32 bg-background'
    >
      <div className='container px-4 md:px-6'>
        <div className='flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <SectionHeading className='md:pl-16 overflow-hidden tracking-tighter text-start'>
              <SlideIn className='text-accent-foreground/50'>Sobre</SlideIn>
              <br />
              <SlideIn>
                mim<span className='text-primary'>.</span>
              </SlideIn>
            </SectionHeading>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'></h2>
            <Transition className='text-start w-full md:pl-16'>
              <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed'>
                {about.description}
              </p>
            </Transition>
          </div>
          <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
            <Transition>
              <Image
                src={about.avatar.url}
                width={400}
                height={600}
                alt='foto de perfil'
                className='mx-auto aspect-video md:aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full'
              />
            </Transition>
            <div className='flex flex-col justify-center space-y-4'>
              <ul className='grid gap-6'>
                {services.map((item, index) => (
                  <SlideIn key={index}>
                    <li>
                      <div className='grid gap-1'>
                        <h3 className='text-xl font-bold'>{item.title}</h3>
                        <p className='text-muted-foreground'>
                          {item.description}
                        </p>
                      </div>
                    </li>
                  </SlideIn>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
