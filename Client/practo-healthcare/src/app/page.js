'use client'

import Header from '@/components/layout/Header'
import HeroSection from '@/components/layout/HeroSection'
import ServicesSection from '@/components/layout/ServicesSection'

export default function Home() {
  return (
    <div className="container bg-white">
      <Header />
      <HeroSection />
    </div>
  )
}
