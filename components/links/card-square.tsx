'use client'

import Link from 'next/link'
import { OpenFolder, WebIcon, Link as Links } from './ui/icons'
import { motion } from 'motion/react'

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: [0, 0.71, 0.2, 1.01],
}

export default function CardSquare() {
  const items = [
    {
      title: 'Meu\nPortfólio',
      icons: [<WebIcon key='web' />, <Links key='link1' />],
      href: 'https://fevaz.com.br',
    },
    {
      title: 'Alguns\nProjetos',
      icons: [<OpenFolder key='folder' />, <Links key='link2' />],
      href: 'https://fevaz.com.br/#projects',
    },
  ]

  return (
    <div className='flex justify-center items-center gap-8 p-8'>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, y: 0 }}
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
            <div className='flex-shrink-0 w-36 h-36 aspect-square rounded-xl bg-glass-gradient shadow-glass'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex justify-between p-2'>{item.icons}</div>
                <div className='py-4 px-2 font-semibold text-lg'>
                  <p>
                    {item.title.split('\n').map((line, i) => (
                      <span>
                        {line}
                        {i < item.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
