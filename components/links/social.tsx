'use client'

import Link from 'next/link'
import {
  Discord,
  Gmail,
  Instagram,
  Linkedin,
  Tiktok,
  WhatsApp,
} from './ui/icons'
import { motion } from 'motion/react'

export default function Social() {
  const socialIcons = [
    {
      title: 'instagram',
      icon: <Instagram />,
      href: 'https://instagram.com/fevazdev',
    },
    {
      title: 'linkedin',
      icon: <Linkedin />,
      href: 'https://www.linkedin.com/in/vaz-fernanda',
    },
    {
      title: 'tiktok',
      icon: <Tiktok />,
      href: 'https://www.tiktok.com/@_fevaz',
    },
    {
      title: 'gmail',
      icon: <Gmail />,
      href: 'mailto:fernandavazdev@gmail.com',
    },
    {
      title: 'discord',
      icon: <Discord />,
      href: 'https://discord.com/users/.fernandavaz',
    },
    {
      title: 'whatsapp',
      icon: <WhatsApp />,
      href: 'https://wa.link/ax1g3o',
    },
  ]

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-2'>
        {socialIcons.map((icon, i) => (
          <motion.div
            key={icon.title}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 90,
              damping: 10,
              mass: 0.5,
              delay: 0.15 * i,
            }}
            whileHover={{
              y: -10,
              scale: 1.1,
              transition: { type: 'spring', stiffness: 300 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { type: 'spring', stiffness: 400 },
            }}
          >
            <Link href={icon.href} target='_blank'>
              {icon.icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
