'use client'

import { motion } from 'motion/react'
import { Smile } from './ui/icons'
import Image from 'next/image'

export default function Header() {
  return (
    <section className='flex flex-col items-center py-4'>
      <div className='relative w-24 h-24 rounded-full border-2 border-[#6564DB] overflow-hidden'>
        <Image
          src='/profile-fe.png'
          alt='Foto de perfil'
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col w-4/5 m-4 gap-2 text-center'>
        <h1 className='font-semibold'>Fernanda Vaz</h1>
        <div className='flex justify-center items-center gap-1'>
          <p>
            Desenvolvedora Front-end
            <span className='text-[#6564db]'>.</span>
          </p>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={{
              rotate: 0,
              transition: { duration: 0.3 },
            }}
          >
            <Smile />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
