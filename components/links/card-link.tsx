'use client'

import { motion } from 'motion/react'
import { Coffee, GitHub, WhatsApp } from './ui/icons'
import Link from 'next/link'

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: [0, 0.71, 0.2, 1.01],
}

export default function CardLink() {
  const items = [
    {
      title: 'GitHub',
      icon: <GitHub />,
      className:
        'w-80 h-16 flex-shrink-0 rounded-xl bg-glass-gradient shadow-glass bg-blur-md flex justify-center',
      href: 'https://github.com/fernanda-vaz/',
    },
    {
      title: 'Vamos conversar!',
      icon: <WhatsApp />,
      className:
        'w-80 h-16 flex-shrink-0 rounded-xl bg-glass-gradient shadow-glass bg-blur-md flex justify-center',
      href: 'https://wa.link/ax1g3o',
    },
    {
      title: 'Buy me a coffee',
      icon: <Coffee />,
      className:
        'w-80 h-16 flex-shrink-0 rounded-xl border border-black/50 bg-[#313131] text-[#f2f2f2] shadow-glass bg-blur-md flex justify-center',
      href: 'https://buymeacoffee.com/fernandavaz',
    },
  ]

  return (
    <div className='w-full flex flex-col items-center gap-4'>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.2 + index * 0.3 }}
          whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href={item.href} target='_blank' rel='noopener noreferrer'>
            <div className={item.className}>
              <div className='flex items-center justify-center text-center text-base gap-4'>
                <p className='font-bold'>{item.title}</p>
                {item.icon}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
