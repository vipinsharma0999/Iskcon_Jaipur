'use client'
import GuestHouseMain from '@/components/GuestHouse/01Main/Main'
import LuxriesusSection from '@/components/GuestHouse/02LuxriesusSection/LuxriesusSection'
import RoomSection from '@/components/GuestHouse/03RoomSection/RoomSection'
import FacilitiesSection from '@/components/GuestHouse/04FacilitiesSection/FacilitiesSection'
import TestimonialSection from '@/components/GuestHouse/05TestimonialSection/TestimonialSection'

import React from 'react'


const GuestHouse = () => {
  return (
    <div>
        <GuestHouseMain />
        <LuxriesusSection />
        <RoomSection />
        <FacilitiesSection />
        <TestimonialSection />
    </div>
  )
}

export default GuestHouse