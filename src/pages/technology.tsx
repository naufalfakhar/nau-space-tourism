import * as React from 'react'
import data from '../data.json'
import { cn } from '@/lib/utils'

export default function Technology() {
  const technology = data.technology
  const technologyTabs = data.technology.map((d) => d.name)

  const [currentTab, setCurrentTab] = React.useState<string>('Launch vehicle')
  const currentTechnology = technology?.find((d) => d.name === currentTab)

  return (
    <div
      className={cn(
        'container flex h-full flex-col items-center text-white',
        'md:p-10 md:px-0',
        '2xl:mx-auto 2xl:max-w-6xl 2xl:items-start 2xl:p-0'
      )}
    >
      <h1
        className={cn(
          'mt-0.5 font-barlowCondensed uppercase tracking-[2.7px]',
          'md:mt-10 md:self-start md:px-10 md:text-xl md:tracking-[3.38px]',
          'tracking-[4.72px] 2xl:mt-[76px] 2xl:text-[28px]'
        )}
      >
        <span className='pr-[18px] font-bold opacity-25'>03</span> space launch
        101
      </h1>

      <div
        className={cn('flex flex-col', '2xl:mt-[26px] 2xl:flex-row-reverse')}
      >
        <img
          src={currentTechnology?.images.landscape}
          alt={currentTechnology?.name}
          className={cn(
            'mt-8 h-[170px] w-full',
            'md:mt-[60px] md:h-[310px]',
            '2xl:hidden'
          )}
        />
        <img
          src={currentTechnology?.images.portrait}
          alt={currentTechnology?.name}
          className={cn(
            'hidden',
            '2xl:absolute 2xl:right-0 2xl:block 2xl:h-[527px] 2xl:w-[515px]'
          )}
        />
        <div
          className={cn(
            'flex flex-col items-center',
            '2xl:mt-[137px] 2xl:flex-row 2xl:items-start 2xl:gap-20'
          )}
        >
          <nav className={cn('mt-[26px]', 'md:mt-[56px]', '2xl:mt-0')}>
            <ul
              className={cn(
                'flex items-center justify-center gap-[27px]',
                'md:gap-9',
                '2xl:flex-col 2xl:gap-8'
              )}
            >
              {technologyTabs.map((d, idx) => (
                <li key={d}>
                  <button
                    onClick={() => setCurrentTab(d)}
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-transparent font-barlowCondensed uppercase tracking-[1px] text-white',
                      `${
                        currentTab === d
                          ? 'border-white bg-white text-black'
                          : ''
                      }`,
                      '2xl:h-20 2xl:w-20 2xl:text-[32px]',
                      'hover:border-white'
                    )}
                  >
                    {idx + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={cn(
              'flex flex-col items-center',
              'md:gap-4',
              '2xl:max-w-[470px] 2xl:items-start'
            )}
          >
            <h3
              className={cn(
                'mt-[26px] font-barlowCondensed text-sm uppercase tracking-[2.36px] text-primary',
                'md:mt-11 md:tracking-[2.7px]',
                '2xl:mt-0'
              )}
            >
              the terminology...
            </h3>
            <h2
              className={cn(
                'mt-2 font-bellefair text-2xl uppercase',
                'md:text-[40px]',
                '2xl:mt-[11px] 2xl:text-[56px]'
              )}
            >
              {currentTechnology?.name}
            </h2>
            <p
              className={cn(
                'mt-4 max-w-[327px] text-center font-barlow text-[15px] leading-[25px] text-primary',
                'md:max-w-[600px] md:text-base md:leading-[28px]',
                '2xl:max-w-[700px] 2xl:text-start 2xl:text-lg 2xl:leading-[32px]'
              )}
            >
              {currentTechnology?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
