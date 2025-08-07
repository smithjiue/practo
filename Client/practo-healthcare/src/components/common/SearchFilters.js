'use client'

import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSearch } from '@/context/SearchContext'
import { useState } from 'react'

export default function SearchFilters() {
  const { searchData, updateFilters } = useSearch()
  const [openDropdown, setOpenDropdown] = useState(null)

  const filterOptions = {
    gender: ['Any', 'Male', 'Female'],
    patientStories: ['Any', '100+', '500+', '1000+'],
    experience: ['Any', '5+ years', '10+ years', '15+ years'],
    sortBy: ['Relevance', 'Experience', 'Rating', 'Fees'],
  }

  const FilterDropdown = ({ label, options, value, onChange, filterKey }) => {
    return (
      <div className="relative">
        <Button
          variant="outline"
          onClick={() =>
            setOpenDropdown(openDropdown === filterKey ? null : filterKey)
          }
          className="bg-blue-800 text-white border-blue-700 hover:bg-blue-700"
        >
          {label}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        {openDropdown === filterKey && (
          <div className="absolute top-full left-0 mt-1 bg-white border rounded-lg shadow-lg z-10 min-w-[150px]">
            {options.map(option => (
              <button
                key={option}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={() => {
                  onChange({ [filterKey]: option })
                  setOpenDropdown(null)
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-blue-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4">
          <FilterDropdown
            label="Gender"
            options={filterOptions.gender}
            value={searchData.filters.gender}
            onChange={updateFilters}
            filterKey="gender"
          />
          <FilterDropdown
            label="Patient Stories"
            options={filterOptions.patientStories}
            value={searchData.filters.patientStories}
            onChange={updateFilters}
            filterKey="patientStories"
          />
          <FilterDropdown
            label="Experience"
            options={filterOptions.experience}
            value={searchData.filters.experience}
            onChange={updateFilters}
            filterKey="experience"
          />
          <Button
            variant="outline"
            className="bg-blue-800 text-white border-blue-700 hover:bg-blue-700"
          >
            All Filters
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>

          <div className="ml-auto">
            <FilterDropdown
              label={`Sort By: ${searchData.filters.sortBy}`}
              options={filterOptions.sortBy}
              value={searchData.filters.sortBy}
              onChange={updateFilters}
              filterKey="sortBy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
