'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Drawer } from '@mui/material'
import { MenuIcon, MoonIcon, SunIcon } from './ui/icons'
import Image from 'next/image'
import Logo from '@/app/favicon.ico'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }

  return (
    <motion.header
      className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className='container flex max-w-7xl h-16 gap-2 items-center justify-between p-6 lg:px-8'>
        <Link href='/'>
          <Image src={Logo} alt='Logo Fernanda Vaz' width={24} height={24} />
        </Link>
        <div className='flex lg:flex-1'>
          <Link href='/' className='font-semibold text-xl'>
            <span className='text-primary'>Fernanda Vaz</span>Portfolio
          </Link>
        </div>
        <div className='hidden md:flex gap-6 '>
          <Link
            href='#about'
            className='text-sm font-medium hover:text-secondary transition-all duration-300'
          >
            Sobre
          </Link>
          <Link
            href='#skills'
            className='text-sm font-medium hover:text-secondary transition-all duration-300'
          >
            Tecnologias
          </Link>
          <Link
            href='#projects'
            className='text-sm font-medium hover:text-secondary transition-all duration-300'
          >
            Projetos
          </Link>
          <Link
            href='#contact'
            className='text-sm font-medium hover:text-secondary transition-all duration-300'
          >
            Contato
          </Link>
        </div>

        <div className='flex-1 justify-end hidden md:flex'>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200'
            >
              {theme === 'dark' ? (
                <SunIcon className='h-5 w-5' />
              ) : (
                <MoonIcon className='h-5 w-5' />
              )}
            </button>
          )}
        </div>

        <div className='md:hidden'>
          <Button variant='ghost' size='icon' onClick={toggleMenu}>
            <MenuIcon className='h-5 w-5' />
          </Button>
        </div>
      </nav>

      <Drawer anchor='right' open={openMenu} onClose={closeMenu}>
        <div className='w-64 p-6 flex flex-col gap-4 bg-background text-foreground h-full'>
          <Link
            href='#about'
            className='text-base font-medium hover:text-secondary transition-all duration-300'
            onClick={closeMenu}
          >
            Sobre
          </Link>
          <Link
            href='#skills'
            className='text-base font-medium hover:text-secondary transition-all duration-300'
            onClick={closeMenu}
          >
            Tecnologias
          </Link>
          <Link
            href='#projects'
            className='text-base font-medium hover:text-secondary transition-all duration-300'
            onClick={closeMenu}
          >
            Projetos
          </Link>

          <Button
            variant='outline'
            className='font-medium hover:bg-secondary/20 hover:text-foreground'
          >
            <Link href='#contact' className='font-medium' onClick={closeMenu}>
              Contato
            </Link>
          </Button>

          <div className='flex-col flex-1 justify-end'>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='rounded-full p-2 bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors duration-200'
              >
                {theme === 'dark' ? (
                  <SunIcon className='h-5 w-5' />
                ) : (
                  <MoonIcon className='h-5 w-5' />
                )}
              </button>
            )}
          </div>
        </div>
      </Drawer>
    </motion.header>
  )
}
