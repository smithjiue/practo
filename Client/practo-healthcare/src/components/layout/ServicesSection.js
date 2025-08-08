'use client'

import {
  MessageCircle,
  ShoppingCart,
  FileText,
  TestTube,
  BookOpen,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ServicesSection() {
  const services = [
    {
      icon: MessageCircle,
      title: 'Consult with a doctor',
    },
    {
      icon: ShoppingCart,
      title: 'Order Medicines',
    },
    {
      icon: FileText,
      title: 'View medical records',
    },
    {
      icon: TestTube,
      title: 'Book test',
      badge: 'New',
    },
    {
      icon: BookOpen,
      title: 'Read articles',
    },
    {
      icon: Users,
      title: 'For healthcare providers',
    },
  ]

  return (
    <div className="bg-blue-500 p-2 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 items-center justify-items-center-safe">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className=" rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative inline-block">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center  mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  {service.badge && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-medium text-white mb-2">{service.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
