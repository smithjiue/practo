'use client'

import DoctorCard from './DoctorCard'

export default function DoctorsList() {
  const doctors = [
    {
      id: 1,
      type: 'clinic',
      name: 'Aesthetic Heart Dermatology & Cardiology Clinic',
      doctorCount: '1 Dermatologist',
      experience: '11 - 13 years experience',
      location: 'Jayanagar',
      fee: 800,
      rating: 97,
      patientStories: 159,
      image: '/api/placeholder/80/80',
      isAd: true,
    },
    {
      id: 2,
      type: 'doctor',
      name: 'Dr. Sheelavathi Natraj',
      specialty: 'Dermatologist',
      experience: '21 years experience overall',
      location: 'JP Nagar,Bangalore',
      clinics: 'Sapphire Skin And Aesthetics Clinic + 1 more',
      fee: 800,
      rating: 94,
      patientStories: 1506,
      availableToday: true,
      noBookingFee: true,
      image: '/api/placeholder/80/80',
    },
  ]

  return (
    <div className="space-y-6">
      {doctors.map(doctor => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  )
}
