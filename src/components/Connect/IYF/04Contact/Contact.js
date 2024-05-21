"use client";

const Contact = () => {
  return (
    <div className="p-10 bg-[#d17a29] text-white" id="contact">
      <h1 className="text-center font-medium">Contact Us</h1>
      <div className="flex flex-col md:flex-row py-5">
        <div className="md:w-1/2 text-center">
          <h4 className="font-semibold">Contact Number:</h4>
          <div className="mt-5">
            <h5 className="pb-2">Offline Classes:</h5>
            <p className="text-base font-bold mb-0">
              <span>Vishudha Parth Pr: </span>
              <span>+91 987654321</span>
            </p>
            <p className="text-base font-bold mb-0">
              <span>Avinashi Govind Pr: </span>
              <span>+91 987654321</span>
            </p>
          </div>
          <div className="mt-7">
            <h5 className="pb-2">Offline Classes:</h5>
            <p className="text-base font-bold mb-0">
              <span>Hitakara Vamana Das: </span>
              <span>+91 987654321</span>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 pt-16 md:pt-0 flex flex-col justify-center items-center">
          <h2
            className={`text-center pb-8 font-medium text-4xl`}
          >
            Community
          </h2>
          <div className="flex justify-center items-center gap-4 md:gap-20">
            <img
              src="/Home/Hero/social_media_icons/instagram.svg"
              className="h-10 sm:h-12"
            />
            {/* <img
              src="/Home/Hero/social_media_icons/facebook.svg"
              className="h-10 sm:h-12"
            /> */}
            <img
              src="/Home/Hero/social_media_icons/youtube.svg"
              className="h-10 sm:h-12"
            />
            <img
              src="/Home/Hero/social_media_icons/whatsapp.svg"
              className="h-10 sm:h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
