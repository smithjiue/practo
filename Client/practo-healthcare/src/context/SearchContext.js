'use client'

import { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export function SearchProvider({ children }) {
  const [searchData, setSearchData] = useState({
    location: 'Bangalore',
    specialty: 'Dermatologist',
    results: 29,
    filters: {
      gender: '',
      experience: '',
      patientStories: '',
      sortBy: 'Relevance',
    },
  })

  const updateSearch = newData => {
    setSearchData(prev => ({ ...prev, ...newData }))
  }

  const updateFilters = newFilters => {
    setSearchData(prev => ({
      ...prev,
      filters: { ...prev.filters, ...newFilters },
    }))
  }

  return (
    <SearchContext.Provider value={{ searchData, updateSearch, updateFilters }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
