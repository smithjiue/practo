'use client'

import { Star, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DoctorCard({ doctor }) {
  return (
    <Card className="p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Doctor/Clinic Image and Basic Info */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              {doctor.type === 'clinic' ? (
                <div className="text-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded mx-auto mb-1"></div>
                  <span className="text-xs font-medium">Clinic</span>
                </div>
              ) : (
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">Dr</span>
                </div>
              )}
            </div>
            {doctor.isAd && (
              <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white text-xs">
                AD
              </Badge>
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
              {doctor.name}
            </h3>
            {doctor.specialty && (
              <p className="text-gray-600">{doctor.specialty}</p>
            )}
            {doctor.doctorCount && (
              <p className="text-gray-600 underline">{doctor.doctorCount}</p>
            )}
            <p className="text-gray-600 text-sm">{doctor.experience}</p>

            <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
              <MapPin className="h-4 w-4" />
              <span>{doctor.location}</span>
            </div>

            {doctor.clinics && (
              <p className="text-gray-600 text-sm mt-1">{doctor.clinics}</p>
            )}

            <p className="font-medium text-gray-800 mt-2">
              ₹{doctor.fee} Consultation{' '}
              {doctor.type === 'clinic' ? 'Fees' : 'fee at clinic'}
            </p>
          </div>
        </div>

        {/* Rating and Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:flex-1">
          {/* Rating Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                <span className="text-green-600 font-medium text-sm">
                  👍 {doctor.rating}%
                </span>
              </div>
              <span className="text-gray-600 underline text-sm cursor-pointer">
                {doctor.patientStories} Patient Stories
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            {doctor.availableToday && (
              <div className="flex items-center gap-2 text-green-600 text-sm mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Available Today
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
                {doctor.type === 'clinic'
                  ? 'Book Clinic Visit'
                  : 'Book Clinic Visit'}
                {doctor.noBookingFee && (
                  <span className="block text-xs">No Booking Fee</span>
                )}
              </Button>

              {doctor.type === 'doctor' && (
                <Button
                  variant="outline"
                  className="text-blue-500 border-blue-500 hover:bg-blue-50"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Clinic
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
