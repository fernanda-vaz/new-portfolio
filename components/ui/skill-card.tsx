import { Card } from '@/components/ui/card'
import { ReactNode } from 'react'

interface SkillsCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function SkillsCard({ icon, title, description }: SkillsCardProps) {
  return (
    <Card className='flex flex-col items-center p-6 text-center shadow-sm h-60'>
      <div className='mb-5 rounded-full bg-primary/10 p-3'>{icon}</div>
      <h3 className='text-xl md:text-2xl font-bold'>{title}</h3>
      <p className='mt-4 text-sm md:text-lg lg:text-xl text-muted-foreground'>{description}</p>
    </Card>
  )
}
