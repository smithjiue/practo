'use client'

import {
  Star,
  MapPin,
  Phone,
  ThumbsUp,
  Smile,
  SmilePlus,
  Meh,
  Frown,
  ThumbsDown,
  Calendar,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function DoctorCard({ doctor }) {
  const IconComponent = ThumbsDown
  function RatingBadge({ rating }) {
    let IconComponent

    if (rating >= 90) {
      IconComponent = ThumbsUp
    } else if (rating >= 80) {
      IconComponent = Smile
    } else if (rating >= 70) {
      IconComponent = SmilePlus
    } else if (rating >= 60) {
      IconComponent = Meh
    } else if (rating >= 50) {
      IconComponent = Frown
    } else {
      IconComponent = ThumbsDown
    }
  }
  return (
    <Card className="p-6 m-2">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:flex-1">
        {/* Doctor/Clinic Image and Basic Info */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              {doctor.type === 'clinic' ? (
                <div className="text-center">
                  <span className="text-xs font-medium">Clinic</span>
                </div>
              ) : (
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">Dr</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
              {doctor.firstName} {doctor.lastName}
            </h3>
            {doctor.specialty && (
              <p className="text-gray-500 text-sm">{doctor.specialty}</p>
            )}
            {doctor.doctorCount && (
              <p className="text-gray-500 text-sm">{doctor.doctorCount}</p>
            )}
            <p className="text-gray-500 text-sm">{doctor.experience}</p>

            <div className="flex items-center gap-1 text-sm mt-1">
              <MapPin className="h-4 w-4" />
              <span className="font-bold text-black">{doctor.city}</span>
              {doctor.type === 'clinic' ? (
                ''
              ) : (
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              )}

              {doctor.clinics && (
                <div className="text-gray-900 text-sm ">{doctor.clinics}</div>
              )}
            </div>

            <p className="font-medium text-gray-800 mt-2">
              ₹{doctor.consultationFee} Consultation{' '}
              {doctor.type === 'clinic' ? 'Fees' : 'fee at clinic'}
            </p>
            <hr className="border-t border-dotted border-gray-300 my-4" />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 ">
                <div className="flex items-center gap-1 bg-green-600 px-2 py-1 rounded">
                  <IconComponent className="text-white h-4 w-4" />
                  <span className="text-white font-medium text-sm">
                    {doctor.rating}%
                  </span>
                </div>

                <span className="text-gray-600 underline text-sm cursor-pointer">
                  {doctor.patientStories} Patient Stories
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating and Actions */}
        {/* <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:flex-1"> */}
        {/* Rating Section */}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          {doctor.isAvailableToday && (
            <div className="flex items-center justify-center gap-2 text-green-600 text-sm mb-2">
              <div className="">
                <Calendar />
              </div>
              Available Today
            </div>
          )}

          {doctor.type === 'clinic' ? (
            <div>
              <Button className="flex flex-col bg-blue-500 hover:bg-blue-600 text-white px-8">
                Book Clinic Visit
              </Button>
            </div>
          ) : (
            <div>
              <button className="flex flex-col bg-blue-500 hover:bg-blue-600 text-white px-8 rounded-sm shadow-xs text-sm font-medium">
                Book Clinic Visit
                {/* {doctor.noBookingFee && ( */}
                <div className="text-xs">No Booking Fee</div>
                {/* )} */}
              </button>
            </div>
          )}

          {doctor.type === 'doctor' && (
            <Button
              variant="outline"
              className="text-blue-500 border-blue-500 hover:bg-blue-500"
            >
              <Phone className="h-4 w-4 mr-2 " />
              Contact Clinic
            </Button>
          )}
        </div>
      </div>
      {/* </div> */}
    </Card>
  )
}
