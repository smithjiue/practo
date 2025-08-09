'use client'

import {
  MessageCircle,
  ShoppingCart,
  FileText,
  TestTube,
  BookOpen,
  Briefcase,
} from 'lucide-react'

export default function ServicesSection() {
  const services = [
    { icon: MessageCircle, title: 'Consult with a doctor' },
    { icon: ShoppingCart, title: 'Order Medicines' },
    { icon: FileText, title: 'View medical records' },
    { icon: TestTube, title: 'Book test', badge: 'New' },
    { icon: BookOpen, title: 'Read articles' },
    { icon: Briefcase, title: 'For healthcare providers' },
  ]

  return (
    <div className="bg-[#1a237e] relative z-[10]">
      <div className="container mx-auto flex justify-center items-center py-6 divide-x divide-gray-400/40">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              className="flex flex-col items-center px-6 cursor-pointer group"
            >
<<<<<<< HEAD
              <div className="relative flex items-center justify-center mb-2 ">
                <Icon className="h-6 w-6 text-white hover:animate-out" />
                {service.badge && (
                  <span className="absolute -top-3 -right-6 bg-green-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                    {service.badge}
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap hover:text-white">
                {service.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
