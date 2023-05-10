import * as React from 'react'
import data from '../data.json'
import { cn } from '@/lib/utils'

export default function Destination() {
  const destination = data.destinations
  const destinationNames = data.destinations.map((d) => d.name)

  const [currentTab, setCurrentTab] = React.useState<string>('Moon')
  const currentDestination = destination?.find((d) => d.name === currentTab)

  return (
    <div
      className={cn(
        'container flex h-full flex-col items-center text-white',
        'md:p-10',
        '2xl:mx-auto 2xl:max-w-6xl 2xl:p-0'
      )}
    >
      <div
        className={cn(
          'mt-0.5 font-barlowCondensed uppercase tracking-[2.7px]',
          'md:mt-10 md:self-start md:text-xl md:tracking-[3.38px]',
          '2xl:mt-[76px]'
        )}
      >
        <span className='pr-[18px] font-bold opacity-25'>01</span> pick your
        destination
      </div>

      <div
        className={cn(
          'flex flex-col items-center',
          '2xl:w-full 2xl:flex-row 2xl:items-end 2xl:justify-center 2xl:gap-[157px]'
        )}
      >
        <img
          src={currentDestination?.images.webp}
          alt={currentDestination?.name}
          className={cn(
            'mt-8 h-[170px] w-[170px]',
            'md:mt-[60px] md:h-[300px] md:w-[300px]',
            '2xl:mt-[97px] 2xl:h-[445px] 2xl:w-[445px]'
          )}
        />
        <div
          className={cn(
            'flex flex-col',
            'md:max-w-[573px]',
            '2xl:max-w-[445px] 2xl:items-start'
          )}
        >
          <div className={cn('flex flex-col items-center', '2xl:items-start')}>
            <nav className={cn('mt-[26px]', 'md:mt-[53px]')}>
              <ul
                className={cn(
                  'flex items-center justify-center gap-[27px]',
                  'md:gap-9'
                )}
              >
                {destinationNames.map((d) => (
                  <li key={d}>
                    <button
                      onClick={() => setCurrentTab(d)}
                      className={cn(
                        'pb-2 font-barlowCondensed text-sm uppercase tracking-[2.36px] text-primary',
                        `hover:border-b-2 hover:border-primary`,
                        'md:text-base md:tracking-[2.7px]',
                        `${
                          currentTab === d
                            ? 'border-b-2 border-white text-white'
                            : ''
                        }`
                      )}
                    >
                      {d}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              className={cn(
                'mt-4 font-bellefair text-[56px] uppercase',
                'md:mt-8 md:text-[80px]',
                'md:mt-[37px] 2xl:text-[100px]'
              )}
            >
              {currentDestination?.name}
            </div>
            <p
              className={cn(
                'mb-8 border-b-[1px] border-[#383B4B] pb-8 text-center font-barlow text-[15px] leading-[25px] text-primary',
                'md:mb-7 md:pb-12 md:text-base md:leading-[28px]',
                '2xl:mb-7 2xl:pb-[54px] 2xl:pt-[14px] 2xl:text-left 2xl:text-lg'
              )}
            >
              {currentDestination?.description}
            </p>
          </div>
          <div
            className={cn(
              'flex w-full flex-col items-center gap-8',
              'md:flex-row md:justify-around md:pb-[62px]',
              '2xl:justify-start 2xl:gap-[79px] 2xl:pb-0'
            )}
          >
            <div
              className={cn(
                'flex flex-col items-center gap-3 uppercase',
                '2xl:items-start'
              )}
            >
              <div className='font-barlowCondensed text-sm tracking-[2.36px] text-primary'>
                avg. distance
              </div>
              <div className='font-bellefair text-[28px]'>
                {currentDestination?.distance}
              </div>
            </div>
            <div
              className={cn(
                'flex flex-col items-center gap-3 uppercase',
                '2xl:items-start'
              )}
            >
              <div className='font-barlowCondensed text-sm tracking-[2.36px] text-primary'>
                est. travel time
              </div>
              <div className='font-bellefair text-[28px]'>
                {currentDestination?.travel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
