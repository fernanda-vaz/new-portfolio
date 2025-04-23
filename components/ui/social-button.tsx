import Link from 'next/link'
import { Button, ButtonProps } from '@/components/ui/button'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils' // Certifique-se de ter esse utilitário

interface SocialButtonProps extends ButtonProps {
  icon: ReactNode
  url: string
  platform: string
}

export function SocialButton({ 
  icon, 
  url, 
  platform,
  className,
  ...props
}: SocialButtonProps) {
  return (
    <Button 
      variant='outline' 
      size='icon' 
      asChild
      className={cn(
        'transition-colors hover:bg-primary/10 hover-lift hover:text-secondary', // 
        className 
      )}
      {...props}
    >
      <Link href={url} target='_blank' rel='noopener noreferrer'>
        {icon}
        <span className='sr-only'>{platform}</span>
      </Link>
    </Button>
  )
}