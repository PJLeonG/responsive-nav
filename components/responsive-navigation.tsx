"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMouseEnter = (item: string) => {
    if (!isMobile) {
      setActiveSubmenu(item)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveSubmenu(null)
    }
  }

  const navItems = [
    { name: "Home Security", href: "/home-security", hasSubmenu: false },
    { name: "Smart Home", href: "/smart-home", hasSubmenu: false },
    { name: "Digital Security", href: "/digital-security", hasSubmenu: false },
    {
      name: "About Us",
      href: "/about-us",
      hasSubmenu: true,
      submenu: [
        { name: "Our Company", href: "/about-us/company" },
        { name: "YouTube Channel", href: "/about-us/youtube" },
        { name: "Latest Research", href: "/about-us/research" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ]

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex  justify-between h-16">
          {/* Logo - same for mobile and desktop */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold">
              LOGO
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-all"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="h-6 w-6">
              <Menu
                className={cn(
                  "h-6 w-6 menu-toggle-icon  transition-all duration-300 ease-in-out",
                  isOpen ? "opacity-0 hidden" : "opacity-100 visible"
                )}
              />
              <X
                className={cn(
                  "h-6 w-6 menu-toggle-icon  transition-opacity duration-300 ease-in-out",
                  !isOpen ? "opacity-0 invisible" : "opacity-100 visible"
                )}
              />
            </div>
            <span className="ml-2 h-6">MENU TOGGLE</span>
          </button>
        </div>



          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 ">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group flex flex-grow"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.href} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  {item.name}
                </Link>
                {item.hasSubmenu && activeSubmenu === item.name && (
                  <div className="absolute right-0 z-10 mt-8 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all opacity-0 group-hover:opacity-100">
                    {item.submenu?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={cn(
            "md:hidden",
    "absolute left-0 right-0 z-50 transition-all duration-500 ease-in-out",
            isOpen
      ? "opacity-100 visible"
      : "opacity-0 invisible"
          )}
        >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t bg-white shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      </nav>
    </header>
  )
}
