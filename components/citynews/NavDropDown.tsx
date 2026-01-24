import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

type SubmenuItem = {
  label: string;
  href: string;
};

type NavDropdownProps = {
  label: string;
  href?: string;
  submenu?: SubmenuItem[];
  isActive?: boolean;
};

export default function NavDropdown({
  label,
  href = '#',
  submenu,
  isActive = false,
}: NavDropdownProps) {
  const hasSubmenu = !!submenu && submenu.length > 0;
  const isHome = label.toUpperCase() === 'HOME';
  const showActiveUnderline = isActive || isHome;

  return (
    <div className={`relative group ${hasSubmenu ? 'cursor-pointer' : ''}`}>
      <Link
        href={href}
        className={`
          relative mr-[22px] text-sm lg:text-[15px] font-bold uppercase leading-[30px] 
          flex items-center gap-1.5 transition-colors duration-300 tracking-[-0.05em]
          text-black
        `}
      >
        {label}

        {hasSubmenu && (
          <ChevronDown
            className={`
              w-4 h-4 transition-colors duration-300
              ${showActiveUnderline ? 'text-black' : ' group-hover:text-black'}
            `}
          />
        )}
        <span
          className={`
            absolute bottom-0 left-0 h-[2px] bg-black
            ${showActiveUnderline
              ? 'w-full'
              : 'w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100'
            }
            ${showActiveUnderline ? '' : 'origin-left transition-transform duration-400 ease-out'}
          `}
        />
      </Link>
      {hasSubmenu && (
        <div
          className={`
            absolute top-full left-0 min-w-[220px]
            bg-white rounded-xs shadow-xl 
            opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible
            transition-all duration-200 ease-out z-50
            pointer-events-none group-hover:pointer-events-auto
          `}
        >
          <div>
            {submenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  block px-5 py-2.5 text-sm text-[#212121] 
                  hover:bg-[#f5f5f5]  transition-colors border-b border-[#eee] last:border-0 text-[13px] tracking-[-0.05em]
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}