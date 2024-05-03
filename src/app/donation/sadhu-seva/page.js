'use client'
import MainPoster from '@/components/Donation/SadhuSeva/01MainPoster/MainPoster'
import SadhuDonationSection from '@/components/Donation/SadhuSeva/02SadhuDontaionSection/SadhuDontaionSection'
import SadhuCardSection from '@/components/Donation/SadhuSeva/03SadhuCardSection/SadhuCardSection'
import SadhuPaymentSection from '@/components/Donation/SadhuSeva/04SadhuPaymentSection/SadhuPaymentSection'
import React from 'react'

const SadhuSeva = () => {
  return (
    <>
      <MainPoster />

      <div className="relative bg-[url('/maxresdefault.jpg')] bg-cover bg-center w-full">
        <div
          style={{ backgroundColor: "#38002099" }}
        >
          <SadhuDonationSection />
          <SadhuCardSection />
          <SadhuPaymentSection />
        </div>
      </div>
    </>
  );
}

export default SadhuSeva
