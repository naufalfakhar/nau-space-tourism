import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div
      className={cn(
        'container flex h-full flex-col items-center gap-y-[81px] pb-12 pt-6 text-white',
        'md:px-[159px] md:pt-[106px]',
        'lg:flex-row lg:items-end lg:gap-[386px] lg:px-[165px] lg:pb-[131px] lg:pt-[251px]'
      )}
    >
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-4 text-primary',
          'md:gap-6',
          'lg:max-w-[450px] lg:items-start'
        )}
      >
        <div
          className={cn(
            'font-barlowCondensed uppercase tracking-[2.7px]',
            'md:text-xl md:tracking-[3.4px]',
            'lg:text-[28px] lg:tracking-[4.72px]'
          )}
        >
          So, you want to travel to
        </div>
        <div
          className={cn(
            'font-bellefair text-[80px] uppercase leading-[100px] text-white',
            'md:text-[150px] md:leading-[150px]',
            'lg:leading-none'
          )}
        >
          Space
        </div>
        <div
          className={cn(
            'text-center font-barlow text-[15px] leading-[25px]',
            'md:text-base md:leading-[28px]',
            'lg:text-left lg:text-lg lg:leading-[32px]'
          )}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>

      <Link
        to='/destination'
        className={cn(
          'relative flex h-40 w-40 cursor-pointer items-center justify-center rounded-full bg-white text-xl uppercase tracking-[1.25px] text-dark',
          'md:h-60 md:w-60 md:text-[32px] md:tracking-[2px]',
          'lg:h-[274px] lg:w-[274px]',
          'before:absolute before:-z-10 before:h-96 before:w-96 before:scale-0 before:rounded-full before:bg-white/30 before:transition-transform before:duration-300',
          'hover:before:scale-100'
        )}
      >
        Explore
      </Link>
    </div>
  )
}
