'use client'

import { cn } from '@/lib/utils'
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
        className={cn(
          'focus:outline-none bg-transparent p-2 text-fontColor-900 rounded-lg focus-visible:border-neonGreen-400 w-full',
          className
        )}
      />
    )
  }
)

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={cn(
          'focus:outline-none bg-transparent p-2 rounded-lg text-fontColor-900 focus-visible:border-neonGreen-400 w-full',
          className
        )}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { FormInput, Textarea }
