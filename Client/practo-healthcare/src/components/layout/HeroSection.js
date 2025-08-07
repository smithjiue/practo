'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSearch } from '@/context/SearchContext'

export default function HeroSection() {
  const router = useRouter()
  const { updateSearch } = useSearch()
  const [location, setLocation] = useState('Bangalore')
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
    <div className="bg-gradient-to-b from-blue-800 to-blue-900 min-h-screen relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-10">
        {/* Medical Icons Background */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white rounded-lg transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-400 rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-60 right-10 w-14 h-14 bg-orange-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-20 pb-32">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your home for health
            </h1>
          </div>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Find and Book
              </h2>

              <div className="flex flex-col md:flex-row gap-4">
                {/* Location Input */}
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="pl-10 h-12 border-gray-300"
                  />
                </div>

                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search doctors, clinics, hospitals, etc."
                    value={specialty}
                    onChange={e => setSpecialty(e.target.value)}
                    className="pl-10 h-12 border-gray-300"
                    onKeyPress={e => e.key === 'Enter' && handleSearch()}
                  />
                </div>

                {/* Search Button */}
                <Button
                  onClick={handleSearch}
                  className="h-12 px-8 bg-blue-600 hover:bg-blue-700"
                >
                  Search
                </Button>
              </div>

              {/* Popular Searches */}
              <div className="mt-6">
                <p className="text-gray-600 mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map(search => (
                    <Button
                      key={search}
                      variant="outline"
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
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
