"use client";

import ContactIcons from "@/components/Contact/01ContactIcons/ContactIcons";
import ContactForm from "@/components/Contact/02ContactForm/ContactForm";
import Queries from "@/components/Contact/02Queries/Queries";
import Maps from "@/components/Contact/03Map/Maps";
import SocialMedia from "@/components/Contact/04SocialMedia/SocialMedia";

const page = () => {
  return (
    <div className="bg-white">
      <img
        src="https://t4.ftcdn.net/jpg/04/81/72/77/360_F_481727770_1u2ylNpie8WRosMVbv1COXDnnEK6ofwh.jpg"
        className="w-full object-cover"
      />
      <ContactIcons />
      <div className="sm:flex lg:flex-row flex-col lg:gap-0 gap-10 items-center justify-evenly pb-10">
        <ContactForm />
        <Queries />
      </div>
      <Maps />
      <SocialMedia />
    </div>
  );
};

export default page;
