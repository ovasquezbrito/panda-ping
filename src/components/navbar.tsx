import React from 'react'
import Link from 'next/link'
import { SignOutButton } from "@clerk/nextjs"

import MaxWidthWrapper from './max-width-wrapper'
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
  const user = false
  return (
    <nav className='sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between'>
          <Link href="/" className='flex z-40 font-semibold'>
            Ping<span className='text-brand-700'>Panda</span>
          </Link>

          <div className='h-full flex items-center space-x-4'>
            {user ? (
              <>
                <SignOutButton>
                  <Button size='sm' variant='ghost'>Salir</Button>
                </SignOutButton>
                <Link href="/dashboard" className={buttonVariants({
                  size: "sm",
                  className: "hidden sm:flex items-center gap-1"
                })}>Panel <ArrowRight className='ml-1.5 size-4'/></Link>
             </>) : (
              <>
                <Link href="/dashboard" className={buttonVariants({
                  size: "sm",
                  variant: 'ghost'
                })}>
                  Precios
                </Link>
                <Link href="/login" className={buttonVariants({
                  size: "sm",
                  variant: 'ghost'
                })}>
                  Entrar
                </Link>
                <div className='h-8 w-px bg-gray-200'/>
                <Link href="/register" className={buttonVariants({
                  size: "sm",
                  className: 'flex items-center gap-1.5'
                })}>
                  Registrate <ArrowRight className='size-4'/>
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar