import { cn } from '@/lib/utils'
import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavbarMobile from '@/components/NavbarMobile'

export default function Navbar() {
  const navItems: { number: string; name: string; href: string }[] = [
    { number: '00', name: 'Home', href: '/' },
    { number: '01', name: 'Destination', href: '/destination' },
    { number: '02', name: 'Crew', href: '/crew' },
    { number: '03', name: 'Technology', href: '/technology' },
  ]

  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  const location = useLocation()
  const path = location.pathname

  return (
    <header
      className={cn(
        'container flex items-center justify-between p-6',
        'md:p-0',
        'lg:mx-0 lg:mt-10 lg:max-w-full'
      )}
    >
      <Link to='/'>
        <img
          src='/src/assets/shared/logo.svg'
          alt='logo'
          className='md:pl-[39px] lg:pl-[55px]'
        />
      </Link>

      <nav
        className={cn(
          'relative hidden bg-white/[4%] py-[39px] pl-12 pr-[46px] text-white backdrop-blur-lg',
          'md:flex md:justify-center',
          'lg:pl-[123px] lg:pr-[165px]'
        )}
      >
        <div
          className={cn(
            'absolute right-full top-1/2 hidden h-px w-[473px] -translate-y-1/2 translate-x-4 bg-white',
            'lg:block'
          )}
        ></div>
        <ul className='text-secondaryLight flex gap-10 lg:gap-12'>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={cn(
                  `cursor-pointer pb-[39px] font-barlowCondensed text-sm tracking-[2.36px] transition duration-300 ease-in-out`,
                  `hover:border-b-2 hover:border-primary/50 hover:text-primary`,
                  `lg:text-base lg:tracking-[2.7px]`,
                  `${path === item.href ? 'border-b-2 border-white' : ''}`
                )}
              >
                <span className='mr-[11px] hidden font-bold lg:inline-block'>
                  {item.number}
                </span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className='z-50 md:hidden'>
        {showMobileMenu ? (
          <button type='button' onClick={() => setShowMobileMenu(false)}>
            <img src='/src/assets/shared/icon-close.svg' alt='logo' />
          </button>
        ) : (
          <button type='button' onClick={() => setShowMobileMenu(true)}>
            <img src='/src/assets/shared/icon-hamburger.svg' alt='logo' />
          </button>
        )}
      </div>

      {showMobileMenu && <NavbarMobile items={navItems} />}
    </header>
  )
}
