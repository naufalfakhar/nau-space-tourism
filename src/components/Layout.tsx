import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()
  const path = location.pathname.substring(1)

  return (
    <div
      className={cn(
        `flex h-screen flex-col bg-cover bg-no-repeat`,
        `${
          path === 'technology'
            ? 'bg-technology-mobile'
            : path === 'crew'
            ? 'bg-crew-mobile'
            : path === 'destination'
            ? 'bg-destination-mobile'
            : 'bg-home-mobile'
        }`,
        `${
          path === 'technology'
            ? 'md:bg-technology-tablet'
            : path === 'crew'
            ? 'md:bg-crew-tablet'
            : path === 'destination'
            ? 'md:bg-destination-tablet'
            : 'md:bg-home-tablet'
        }`,
        `${
          path === 'technology'
            ? '2xl:bg-technology-desktop'
            : path === 'crew'
            ? '2xl:bg-crew-desktop'
            : path === 'destination'
            ? '2xl:bg-destination-desktop'
            : '2xl:bg-home-desktop'
        }`
      )}
    >
      <Navbar />
      <main className='z-10 flex-1 overflow-auto'>
        <Outlet />
      </main>
    </div>
  )
}
