

import Link from 'next/link'
import { TextReveal, Transition } from './ui/transitions'

export function Footer() {
  return (
    <footer className='w-full border-t py-6 md:py-0'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <Transition>
          <div className='text-center md:text-left'>
            &copy; {new Date().getFullYear()} | Todos os direitos reservados.
          </div>
        </Transition>
        <nav className='flex gap-4 sm:gap-6'>
          <Transition>
            <div className='text-center md:text-right flex'>
              desenvolvido por @
              <Link
                href={'https://www.linkedin.com/in/vaz-fernanda/'}
                className='text-primary font-semibold'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TextReveal>Fernanda Vaz</TextReveal>
              </Link>
            </div>
          </Transition>
        </nav>
      </div>
    </footer>
  )
}
