'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Find Doctors', href: '/', active: true },
    { name: 'Video Consult', href: '/video-consult' },
    { name: 'Surgeries', href: '/surgeries' },
  ]

  const corporateItems = [
    { name: 'For Corporates', badge: 'NEW' },
    { name: 'For Providers' },
    { name: 'Security & help' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">practo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium ${
                  item.active
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {corporateItems.map(item => (
              <div key={item.name} className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-blue-600"
                >
                  {item.badge && (
                    <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded mr-2">
                      {item.badge}
                    </span>
                  )}
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm">
              Login / Signup
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-2">
                {corporateItems.map(item => (
                  <button
                    key={item.name}
                    className="text-left text-gray-700 hover:text-blue-600 py-2 w-full"
                  >
                    {item.badge && (
                      <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded mr-2">
                        {item.badge}
                      </span>
                    )}
                    {item.name}
                  </button>
                ))}
                <Button variant="outline" size="sm" className="mt-4">
                  Login / Signup
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      <div className="bg-gray-200 p-4"></div>
    </header>
  )
}
