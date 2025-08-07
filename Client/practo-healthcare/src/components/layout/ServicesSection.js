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
      description: 'Get expert medical advice',
    },
    {
      icon: ShoppingCart,
      title: 'Order Medicines',
      description: 'Get medicines delivered',
    },
    {
      icon: FileText,
      title: 'View medical records',
      description: 'Access your health records',
    },
    {
      icon: TestTube,
      title: 'Book test',
      description: 'Schedule lab tests',
      badge: 'New',
    },
    {
      icon: BookOpen,
      title: 'Read articles',
      description: 'Health tips and insights',
    },
    {
      icon: Users,
      title: 'For healthcare providers',
      description: 'Join our network',
    },
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  {service.badge && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-medium text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
