'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSearch } from '@/context/SearchContext'
import SpecialitySelect from './SearchSection'
import Bg_Banner from './Bg_Banner'
import ServicesSection from './ServicesSection'

export default function HeroSection() {
  const router = useRouter()
  const { updateSearch } = useSearch()
  const [location, setLocation] = useState('')
  const [specialty, setSpecialty] = useState('')

  const popularSearches = [
    'Dermatologist',
    'Pediatrician',
    'Gynecologist/Obstetrician',
    'Orthopedist',
  ]

  const handleSearch = () => {
    updateSearch({
      location,
      specialty: specialty || 'Dermatologist',
      results: Math.floor(Math.random() * 50) + 20,
    })
    router.push('/doctors')
  }

  return (
    <div>
      <div className="bg-gradient-to-b from-blue-800 to-blue-900  relative overflow-hidden">
        {/* Background Illustration */}
        <div className="absolute inset-0 opacity-10">
          {/* Medical Icons Background */}
          <Bg_Banner />
        </div>

        <div className="container mx-auto  relative z-10">
          <div className="pt-8 pb-32">
            {/* Hero Text */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Your home for health
              </h1>
            </div>

            {/* Search Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Find and Book
              </h2>
              <div className="bg-white shadow-sm flex flex-col md:flex-row">
                {/* Location Input */}
                <div className="relative md:w-2/5 w-full">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Location"
                    value={location}
                    required={true}
                    onChange={e => setLocation(e.target.value)}
                    className="pl-10 h-12 border-gray-300 w-full"
                  />
                </div>

                {/* Search Input */}
                <div className="md:w-3/5 w-full">
                  <SpecialitySelect
                    specialty={specialty}
                    setSpecialty={setSpecialty}
                    handleSearch={handleSearch}
                  />
                </div>
              </div>
              {/* Popular Searches */}
              <div className="mt-1 flex flex-wrap gap-2">
                <p className="text-gray-400 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
                  Popular searches:
                </p>
                {popularSearches.map(search => (
                  <Button
                    key={search}
                    variant="link"
                    size="sm"
                    onClick={() => {
                      setSpecialty(search)
                      updateSearch({
                        location,
                        specialty: search,
                        results: Math.floor(Math.random() * 50) + 20,
                      })
                      router.push('/doctors')
                    }}
                    className="text-gray-400 border-blue-200 px-2 "
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesSection />
    </div>
  )
}
