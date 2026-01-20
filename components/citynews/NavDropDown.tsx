// components/layout/NavDropdown.tsx
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
  isActive?: boolean; // we'll control HOME manually
};

export default function NavDropdown({
  label,
  href = '#',
  submenu,
  isActive = false,
}: NavDropdownProps) {
  const hasSubmenu = !!submenu && submenu.length > 0;
  
  // HOME is always considered "active"
  const isHome = label.toUpperCase() === 'HOME';
  const showActiveUnderline = isActive || isHome;

  return (
    <div className={`relative group ${hasSubmenu ? 'cursor-pointer' : ''}`}>
      <Link
        href={href}
        className={`
          relative px-3 py-2 text-sm lg:text-base font-medium uppercase tracking-wide 
          flex items-center gap-1.5 transition-colors duration-300
          text-gray-800
        `}
      >
        {label}

        {hasSubmenu && (
          <ChevronDown 
            className={`
              w-4 h-4 transition-colors duration-300
              ${showActiveUnderline ? 'text-yellow-600' : 'text-gray-600 group-hover:text-yellow-600'}
            `}
          />
        )}

        {/* Animated / static underline */}
        <span
          className={`
            absolute bottom-0 left-0 h-[2px] bg-yellow-500
            ${showActiveUnderline 
              ? 'w-full' 
              : 'w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100'
            }
            ${showActiveUnderline ? '' : 'origin-left transition-transform duration-400 ease-out'}
          `}
        />
      </Link>

      {/* Dropdown submenu */}
      {hasSubmenu && (
        <div
          className={`
            absolute top-full left-0 min-w-[220px] mt-2
            bg-white border border-gray-200 rounded-lg shadow-xl 
            opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible
            transition-all duration-200 ease-out z-50
            pointer-events-none group-hover:pointer-events-auto
          `}
        >
          <div className="py-1.5">
            {submenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  block px-5 py-2.5 text-sm text-gray-700 
                  hover:bg-yellow-50 hover:text-yellow-700 transition-colors
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