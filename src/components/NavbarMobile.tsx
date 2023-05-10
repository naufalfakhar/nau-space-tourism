import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

type Props = { items: { number: string; name: string; href: string }[] }

export default function NavbarMobile({ items }: Props) {
  return (
    <nav className='fixed inset-y-0 right-0 z-40 flex flex-col gap-8 bg-white/[4%] pl-8 pr-[92px] pt-[118px] text-white backdrop-blur-lg animate-in slide-in-from-right-80'>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className={cn(`font-barlowCondensed tracking-[2.7px]`)}
        >
          <span className='mr-[11px] font-bold lg:inline-block'>
            {item.number}
          </span>
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
