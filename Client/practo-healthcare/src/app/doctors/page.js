'use client'

import Header from '@/components/layout/Header'
import SearchFilters from '@/components/common/SearchFilters'
import DoctorsList from '@/components/common/DoctorsList'
import { useSearch } from '@/context/SearchContext'

export default function DoctorsPage() {
  const { searchData } = useSearch()
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <SearchFilters />
        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {searchData.results} {searchData.speaciality} available in{' '}
            {searchData.location}
          </h1>
          <p className="text-gray-600 mb-6 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              ✓
            </span>
            Book appointments with minimum wait-time & verified doctor details
          </p>
          <DoctorsList />
        </div>
      </div>
    </div>
  )
}
