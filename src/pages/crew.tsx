import * as React from 'react'
import data from '../data.json'
import { cn } from '@/lib/utils'

export default function Crew() {
  const crew = data.crew
  const crewTabs = data.crew.map((d) => d.name)

  const [currentTab, setCurrentTab] = React.useState<string>('Douglas Hurley')
  const currentCrew = crew?.find((d) => d.name === currentTab)

  return (
    <div
      className={cn(
        'container flex h-full flex-col items-center px-6 text-white',
        'md:p-10',
        '2xl:mx-auto 2xl:max-w-6xl 2xl:p-0'
      )}
    >
      <div
        className={cn(
          'mt-0.5 font-barlowCondensed uppercase tracking-[2.7px]',
          'md:mt-10 md:self-start md:text-xl md:tracking-[3.38px]',
          'tracking-[4.72px] 2xl:mt-[76px] 2xl:text-[28px]'
        )}
      >
        <span className='pr-[18px] font-bold opacity-25'>02</span> meet your
        crew
      </div>

      <div
        className={cn(
          'flex flex-col items-center',
          'md:flex-col-reverse',
          '2xl:w-full 2xl:flex-1 2xl:flex-row-reverse 2xl:items-center 2xl:justify-between'
        )}
      >
        <div
          className={cn(
            'mt-8 flex h-[222px] w-[327px] flex-col items-center border-b-[1px] border-b-[#383B4B]',
            'md:mt-0 md:border-b-0'
          )}
        >
          <img
            src={currentCrew?.images.webp}
            alt={currentCrew?.name}
            className={cn(
              'h-[222px]',
              'md:absolute md:bottom-0 md:h-[400px] ',
              '2xl:h-[700px]'
            )}
          />
        </div>

        <div
          className={cn(
            'flex flex-col items-center',
            'md:flex-col-reverse',
            '2xl:items-start'
          )}
        >
          <div>
            <nav className={cn('z-50 mt-8', 'md:mt-10')}>
              <ul
                className={cn(
                  'flex items-center justify-center gap-4',
                  '2xl:gap-6'
                )}
              >
                {crewTabs.map((d) => (
                  <li key={d}>
                    <button onClick={() => setCurrentTab(d)}>
                      <div
                        className={cn(
                          'h-[10px] w-[10px] rounded-full bg-white/20',
                          `hover:bg-white/50`,
                          'md:text-base md:tracking-[2.7px]',
                          `${currentTab === d ? 'bg-white' : ''}`
                        )}
                      ></div>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={cn('flex flex-col items-center', '2xl:items-start')}>
            <div
              className={cn(
                'mt-8 font-bellefair uppercase opacity-50',
                'md:mt-[60px] md:text-2xl',
                '2xl:pb-7 2xl:pt-4 2xl:text-[32px]'
              )}
            >
              {currentCrew?.role}
            </div>
            <div
              className={cn(
                'mt-2 font-bellefair text-2xl uppercase',
                'md:text-[40px]',
                '2xl:text-[56px]'
              )}
            >
              {currentCrew?.name}
            </div>
            <div
              className={cn(
                'mt-4 max-w-[327px] text-center font-barlow text-[15px] leading-[25px] text-primary',
                'md:max-w-[600px] md:text-base md:leading-[28px]',
                '2xl:max-w-[700px] 2xl:text-start 2xl:text-lg 2xl:leading-[32px]'
              )}
            >
              {currentCrew?.bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
