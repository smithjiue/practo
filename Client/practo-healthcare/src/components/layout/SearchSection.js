import { useState, useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
import { useSearch } from '@/context/SearchContext'

const specialtiesList = [
  'Cardiologist',
  'Dentist',
  'Gynecologist/obstetrician',
  'General Physician',
  'Dermatologist',
  'Ear-nose-throat (ENT) Specialist',
  'Homoeopath',
  'Ayurveda',
  // Add more specialties here...
]

export default function SpecialitySelect({ handleSearch }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  const [specialty, setSpecialty] = useState('')
  const { updateSearch } = useSearch()
  const query = specialty
  const filteredSpecialties =
    query === ''
      ? specialtiesList
      : specialtiesList.filter(s =>
          s.toLowerCase().includes(query.toLowerCase())
        )

  const handleSelect = item => {
    updateSearch({
      specialty: specialty || 'Dermatologist',
    })
    setOpen(false)
    handleSearch?.()
  }

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className=" flex-1 relative z-[9999]" ref={wrapperRef}>
      <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400 pointer-events-none " />
      <input
        type="text"
        placeholder="Search doctors by speciality..."
        value={specialty}
        onFocus={() => setOpen(true)}
        onChange={e => {
          setSpecialty(e.target.value)
          setOpen(true)
        }}
        className="pl-10 h-12 w-full border border-gray-300 focus:outline-none"
        onKeyDown={e => e.key === 'Enter' && handleSearch?.()}
      />

      {open && filteredSpecialties.length > 0 && (
        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto z-100">
          {filteredSpecialties.map(item => (
            <div
              key={item}
              onClick={() => handleSelect(item)}
              className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-blue-50"
            >
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-gray-500" />
                <span>{item}</span>
              </div>
              <span className="text-xs text-gray-400 uppercase">
                Speciality
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
