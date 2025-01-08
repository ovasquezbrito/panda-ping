import { cn } from '@/utils'
import React from 'react'

interface HeadingPros extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
    className?: string
}

const Heading = ({children, className, ...props}: HeadingPros) => {
  return (
    <h1 className={cn("text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800", className)} {...props}>{children}</h1>
  )
}

export default Heading