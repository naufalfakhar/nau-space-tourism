import * as React from 'react'
import { TailwindIndicator } from './TailwindIndicator'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'

type Props = { children: React.ReactNode }

export default function DestinationLayout({ children }: Props) {
  return (
    <div className='flex h-screen flex-col bg-home-mobile bg-cover bg-no-repeat md:bg-home-tablet 2xl:bg-home-desktop'>
      <Navbar />
      <NavbarMobile />
      <div className='flex-1'>{children}</div>
      <TailwindIndicator />
    </div>
  )
}
