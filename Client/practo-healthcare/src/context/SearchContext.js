'use client'

import { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export function SearchProvider({ children }) {
  const [searchData, setSearchData] = useState({
    location: '',
    specialty: '',
    results: 29,
    filters: {
      gender: '',
      experience: '',
      patientStories: '',
      sortBy: 'Relevance',
    },
  })
  const [doctors, setDoctors] = useState([])

  const updateSearch = newData => {
    setSearchData(prev => ({ ...prev, ...newData }))
  }
  const updateDoctors = data => {
    setDoctors(data)
  }

  const updateFilters = newFilters => {
    setSearchData(prev => ({
      ...prev,
      filters: { ...prev.filters, ...newFilters },
    }))
  }

  return (
    <SearchContext.Provider
      value={{
        searchData,
        updateSearch,
        updateFilters,
        updateDoctors,
        doctors,
      }}
    >
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
